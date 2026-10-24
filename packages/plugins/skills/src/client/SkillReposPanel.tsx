import { Button, Modal } from 'workdsh-ui';
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
type Discover = { ok: boolean; repo: string; ref: string | null; branches?: string[]; entries: RepoEntry[]; error?: string };
type Progress = {
  ok: boolean;
  jobId: string;
  status: 'running' | 'done' | 'cancelled' | 'error';
  total: number;
  done: number;
  current?: string;
  imported: { name: string }[];
  skipped: { name: string; reason: string }[];
  failed: { name: string; error: string }[];
  error?: string;
};

/** Community skill repos used as the DSH skill market (the public SkillHub
 *  search API requires an account, so this uses the installed skill-hub's
 *  GitHub discovery/import routes instead). */
const REPOS = [
  { repo: 'obra/superpowers', title: 'Superpowers', description: '社区高人气技能合集：头脑风暴、诊断、实现与评审工作流。' },
  { repo: 'mattpocock/skills', title: 'Matt Pocock Skills', description: '工程与 TypeScript 方向技能：交接、评审、架构与实现。' },
  { repo: 'nexu-io/open-design', title: 'Open Design', description: '设计方向技能合集：视觉、品牌、视频与创意模板。' },
] as const;

async function json<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, { credentials: 'same-origin', ...init });
  const text = await response.text();
  let payload: T;
  try { payload = JSON.parse(text) as T; } catch { throw new Error(`技能市场返回了非 JSON 响应（${response.status}）。`); }
  if (!response.ok || (payload as { ok?: boolean }).ok === false) throw new Error((payload as { error?: string }).error || `技能市场请求失败（${response.status}）。`);
  return payload;
}

export function SkillReposPanel({ query, onInstalled, onOpenInstalled }: { query: string; onInstalled: () => Promise<void>; onOpenInstalled: () => void }) {
  const [openRepo, setOpenRepo] = useState<string>();
  const [discover, setDiscover] = useState<Discover>();
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState<Progress>();
  const [error, setError] = useState('');
  const [installed, setInstalled] = useState('');

  const normalized = query.trim().toLowerCase();
  const repos = REPOS.filter(item => `${item.repo} ${item.title} ${item.description}`.toLowerCase().includes(normalized));
  const visibleEntries = useMemo(() => {
    const entries = discover?.entries ?? [];
    if (!normalized) return entries;
    return entries.filter(item => `${item.name} ${item.dir}`.toLowerCase().includes(normalized));
  }, [discover, normalized]);

  useEffect(() => { setSelected(visibleEntries.filter(item => !item.existing).map(item => item.path)); }, [visibleEntries]);

  const browse = async (repo: string) => {
    setOpenRepo(repo); setDiscover(undefined); setSelected([]); setProgress(undefined); setError(''); setBusy(true);
    try {
      const result = await json<Discover>(`/api/skill-hub/repo?repo=${encodeURIComponent(repo)}`);
      setDiscover(result);
      setSelected(result.entries.filter(item => !item.existing).map(item => item.path));
    } catch (cause) { setError(cause instanceof Error ? cause.message : '读取技能仓库失败。'); }
    finally { setBusy(false); }
  };

  const install = async () => {
    if (!openRepo || !discover?.ref || !selected.length) return;
    setBusy(true); setError('');
    try {
      const started = await json<{ jobId: string }>('/api/skill-hub/repo/import', {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ repo: openRepo, paths: selected, ref: discover.ref }),
      });
      let latest: Progress | undefined;
      for (let attempt = 0; attempt < 240; attempt++) {
        await new Promise(resolve => setTimeout(resolve, 500));
        latest = await json<Progress>(`/api/skill-hub/repo/import/progress?jobId=${encodeURIComponent(started.jobId)}`);
        setProgress(latest);
        if (latest.status !== 'running') break;
      }
      if (latest?.status === 'done') {
        setInstalled(`已安装 ${latest.imported.length} 个技能${latest.skipped.length ? `，跳过 ${latest.skipped.length} 个同名技能` : ''}${latest.failed.length ? `，失败 ${latest.failed.length} 个` : ''}。`);
        await onInstalled();
      } else if (latest?.error) setError(latest.error);
    } catch (cause) { setError(cause instanceof Error ? cause.message : '安装技能失败。'); }
    finally { setBusy(false); }
  };

  return <section className="skillhub-market" aria-label="技能市场">
    <div className="market-head"><h2>技能市场 <span className="market-count">{repos.length}</span></h2><span className="muted">从 GitHub 技能仓库安装，安装后进入本机技能目录</span></div>
    {installed && <div className="skillhub-success" role="status"><span>{installed}</span><Button onClick={onOpenInstalled}>查看已安装</Button><button className="skillhub-dismiss" aria-label="关闭安装提示" onClick={() => setInstalled('')}>×</button></div>}
    {repos.length ? <div className="grid">{repos.map(item => <article className="card market-card" key={item.repo}>
      <div className="card-top"><span className="skillhub-icon" aria-hidden>{item.title.slice(0, 1).toUpperCase()}</span><span className="card-title"><strong>{item.title}</strong><small>{item.repo}</small></span><Button className="install" aria-label={`浏览 ${item.title}`} onClick={() => void browse(item.repo)}>浏览</Button></div>
      <p className="muted">{item.description}</p>
    </article>)}</div> : <p className="muted">没有匹配的技能仓库。</p>}

    <Modal open={Boolean(openRepo)} label="技能仓库" className="skill-detail-dialog catalog-dialog" onClose={() => { if (!busy) setOpenRepo(undefined); }}>
      {openRepo && <article>
        <div className="detail-hero"><span className="skillhub-icon large" aria-hidden>{(REPOS.find(item => item.repo === openRepo)?.title ?? openRepo).slice(0, 1)}</span><div className="detail-title"><h1>{openRepo}</h1><p className="slug">{discover?.ref ? `版本 ${discover.ref}` : '正在读取仓库…'}</p></div></div>
        {busy && !discover && <p className="muted" role="status">正在读取仓库技能…</p>}
        {error && <p className="catalog-note" role="alert">{error}</p>}
        {discover && <>
          <p className="muted">共 {discover.entries.length} 个技能，已选择 {selected.length} 个。</p>
          <div className="repo-entries">{visibleEntries.map(item => <label className={`repo-entry ${item.existing ? 'existing' : ''}`} key={item.path}>
            <input type="checkbox" checked={selected.includes(item.path)} disabled={item.existing || busy} onChange={event => setSelected(current => event.currentTarget.checked ? [...current, item.path] : current.filter(path => path !== item.path))} />
            <span><strong>{item.name}</strong><small>{item.fileCount} 个文件 · {(item.totalBytes / 1024).toFixed(1)} KB{item.existing ? ' · 本机已存在' : ''}</small></span>
          </label>)}</div>
          {progress && <p className="muted" role="status">{progress.status === 'running' ? `正在安装 ${progress.done}/${progress.total}${progress.current ? ` · ${progress.current}` : ''}` : progress.status === 'done' ? '安装完成。' : progress.status === 'cancelled' ? '已取消。' : '安装失败。'}</p>}
          <div className="detail-actions" style={{ marginTop: 18 }}>
            <Button variant="primary" className="install solid" disabled={busy || !selected.length || !discover.ref} onClick={() => void install()}>{busy ? '正在处理…' : '安装所选技能'}</Button>
            <Button onClick={() => setOpenRepo(undefined)} disabled={busy}>关闭</Button>
          </div>
        </>}
      </article>}
    </Modal>
  </section>;
}
