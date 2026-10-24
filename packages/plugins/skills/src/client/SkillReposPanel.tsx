import { Button } from 'workdsh-ui';
import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';

type RepoEntry = {
  name: string;
  dir: string;
  path: string;
  origin: string;
  fileCount: number;
  totalBytes: number;
  existing: boolean;
};
type RepoSpec = { repo: string; title: string; description: string; query: string };
type Discover = { ok: boolean; repo: string; ref: string | null; entries: RepoEntry[] };
type Progress = {
  ok: boolean; status: 'running' | 'done' | 'cancelled' | 'error';
  imported: { name: string }[]; skipped: { name: string }[]; failed: { name: string; error: string }[]; error?: string;
};
type MarketItem = RepoEntry & { repo: string; ref: string | null; title: string };

/** Public community skill repos. `query` may carry an explicit `@ref` for
 *  repos without releases (anthropics/skills). */
const REPOS: readonly RepoSpec[] = [
  { repo: 'anthropics/skills', title: 'Anthropic Skills', description: 'Anthropic 官方技能仓库', query: 'anthropics/skills@main' },
  { repo: 'obra/superpowers', title: 'Superpowers', description: '社区高人气技能合集', query: 'obra/superpowers' },
  { repo: 'mattpocock/skills', title: 'Matt Pocock', description: '工程与 TypeScript 技能', query: 'mattpocock/skills' },
  { repo: 'nexu-io/open-design', title: 'Open Design', description: '设计、品牌与创意模板', query: 'nexu-io/open-design' },
] as const;

async function json<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, { credentials: 'same-origin', ...init });
  const text = await response.text();
  let payload: T;
  try { payload = JSON.parse(text) as T; } catch { throw new Error(`技能市场返回了非 JSON 响应（${response.status}）。`); }
  if (!response.ok || (payload as { ok?: boolean }).ok === false) throw new Error((payload as { error?: string }).error || `技能市场请求失败（${response.status}）。`);
  return payload;
}

function Mark({ name }: { name: string }) {
  let hue = 0;
  for (const ch of name) hue = (hue * 31 + (ch.codePointAt(0) ?? 0)) % 360;
  return <span className="skillhub-icon" style={{ background: `hsl(${hue} 36% 25%)`, color: `hsl(${hue} 84% 78%)` }} aria-hidden>{name.slice(0, 1).toUpperCase()}</span>;
}

export function SkillReposPanel({ query, onInstalled, onOpenInstalled }: { query: string; onInstalled: () => Promise<void>; onOpenInstalled: () => void }) {
  const [items, setItems] = useState<readonly MarketItem[]>([]);
  const [repoFilter, setRepoFilter] = useState('全部');
  const [limit, setLimit] = useState(60);
  const [busy, setBusy] = useState(true);
  const [installing, setInstalling] = useState('');
  const [installed, setInstalled] = useState<readonly string[]>([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    setBusy(true); setError('');
    void (async () => {
      const rows: MarketItem[] = [];
      await Promise.all(REPOS.map(async spec => {
        const result = await json<Discover>(`/api/skill-hub/repo?repo=${encodeURIComponent(spec.query)}`, { signal: controller.signal });
        for (const entry of result.entries) rows.push({ ...entry, repo: result.repo, ref: result.ref, title: spec.title });
      }));
      if (controller.signal.aborted) return;
      rows.sort((left, right) => left.title.localeCompare(right.title, 'zh-CN') || left.name.localeCompare(right.name));
      setItems(rows);
    })().catch(cause => { if (!controller.signal.aborted) setError(cause instanceof Error ? cause.message : '读取技能仓库失败。'); })
      .finally(() => { if (!controller.signal.aborted) setBusy(false); });
    return () => controller.abort();
  }, []);

  const normalized = query.trim().toLowerCase();
  useEffect(() => { setLimit(60); }, [repoFilter, normalized]);
  const filtered = useMemo(() => items.filter(item => (repoFilter === '全部' || item.repo === repoFilter)
    && (!normalized || `${item.name} ${item.title} ${item.repo}`.toLowerCase().includes(normalized))), [items, repoFilter, normalized]);
  const visible = filtered.slice(0, limit);
  const repos = ['全部', ...new Set(items.map(item => item.repo))];

  const install = async (item: MarketItem) => {
    if (!item.ref) return;
    setInstalling(item.path); setError(''); setMessage('');
    try {
      const started = await json<{ jobId: string }>('/api/skill-hub/repo/import', {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ repo: item.repo, paths: [item.path], ref: item.ref }),
      });
      let latest: Progress | undefined;
      for (let attempt = 0; attempt < 240; attempt++) {
        await new Promise(resolve => setTimeout(resolve, 500));
        latest = await json<Progress>(`/api/skill-hub/repo/import/progress?jobId=${encodeURIComponent(started.jobId)}`);
        if (latest.status !== 'running') break;
      }
      if (latest?.status === 'done') {
        setInstalled(current => [...new Set([...current, item.name])]);
        setMessage(`已安装「${item.name}」${latest.failed.length ? `，${latest.failed.length} 项失败` : ''}。`);
        await onInstalled();
      } else if (latest?.error) setError(latest.error);
    } catch (cause) { setError(cause instanceof Error ? cause.message : '安装技能失败。'); }
    finally { setInstalling(''); }
  };

  return <section className="skillhub-market" aria-label="技能市场">
    <div className="market-head"><h2>技能市场 <span className="market-count">{items.length}</span></h2><span className="muted">来自公开 GitHub 技能仓库，安装后进入本机技能目录</span></div>
    {message && <div className="skillhub-success" role="status"><span>{message}</span><Button onClick={onOpenInstalled}>查看已安装</Button><button className="skillhub-dismiss" aria-label="关闭安装提示" onClick={() => setMessage('')}>×</button></div>}
    {error && <p className="catalog-note" role="alert">{error}</p>}
    <nav className="category-tabs" aria-label="技能仓库">{repos.map(repo => <button key={repo} className={repoFilter === repo ? 'active' : ''} aria-pressed={repoFilter === repo} onClick={() => setRepoFilter(repo)}>{repo === '全部' ? '全部' : (REPOS.find(spec => spec.repo === repo)?.title ?? repo)}</button>)}</nav>
    {busy ? <p className="muted" role="status">正在读取技能仓库…</p> : visible.length ? <div className="grid">{visible.map(item => <article className="card market-card" key={`${item.repo}-${item.path}`}>
      <div className="card-top"><Mark name={item.name} /><span className="card-title"><strong title={item.name}>{item.name}</strong><small>{item.title} · {item.fileCount} 个文件</small></span>
        <Button className={`install${item.existing || installed.includes(item.name) ? ' is-status is-installed' : ''}`} disabled={item.existing || installing === item.path || installed.includes(item.name)} aria-label={`安装 ${item.name}`} onClick={() => void install(item)}>{item.existing || installed.includes(item.name) ? '已安装' : installing === item.path ? '…' : '＋'}</Button></div>
      <p className="muted">{item.dir}</p>
    </article>)}</div> : <p className="muted">没有匹配的技能。</p>}
    {visible.length < filtered.length && <div className="market-more"><Button onClick={() => setLimit(value => value + 60)}>加载更多（{filtered.length - visible.length}）</Button></div>}
  </section>;
}
