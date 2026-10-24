import * as React from 'react';
import { Button } from 'workdsh-ui';
import { useEffect, useMemo, useState } from 'react';
import type { SkillManagementClient } from './management.js';

type HubSkill = {
  slug: string;
  name: string;
  description: string;
  description_zh?: string;
  category: string;
  iconUrl?: string;
  version?: string;
  downloads?: number;
  stars?: number;
  subCategories?: readonly { key: string; name: string }[];
  namespace?: { handle?: string; canonicalName?: string };
};
type Showcase = { section: string; skills?: HubSkill[] };

const SECTIONS = [
  { key: 'hot', label: '热门' },
  { key: 'trending', label: '趋势' },
  { key: 'featured', label: '精选' },
  { key: 'recommended', label: '推荐' },
] as const;

const PAGE_SIZE = 60;

async function proxy<T>(params: Record<string, string>): Promise<T> {
  const response = await fetch(`/api/workdsh-skills/skillhub?${new URLSearchParams(params)}`, { credentials: 'same-origin' });
  if (!response.ok) throw new Error(`SkillHub 请求失败（${response.status}）。`);
  return await response.json() as T;
}

function formatCount(value?: number): string {
  if (!value) return '0';
  if (value >= 10000) return `${(value / 10000).toFixed(1)}万`;
  return String(value);
}

export function SkillHubPanel({ query, management, onInstalled, onOpenInstalled }: { query: string; management: SkillManagementClient; onInstalled: () => Promise<void>; onOpenInstalled: () => void }) {
  const [items, setItems] = useState<readonly (HubSkill & { section: string })[]>([]);
  const [section, setSection] = useState('全部');
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [busy, setBusy] = useState(true);
  const [installing, setInstalling] = useState('');
  const [installed, setInstalled] = useState<readonly string[]>([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    setBusy(true); setError('');
    void (async () => {
      const results = await Promise.all(SECTIONS.map(async ({ key }) => {
        const response = await fetch(`/api/workdsh-skills/skillhub?kind=showcase&section=${key}`, { credentials: 'same-origin', signal: controller.signal });
        if (!response.ok) throw new Error(`SkillHub ${key} 榜单不可用（${response.status}）。`);
        return { key, data: await response.json() as Showcase };
      }));
      if (controller.signal.aborted) return;
      const bySlug = new Map<string, HubSkill & { section: string }>();
      for (const { key, data } of results) {
        for (const skill of data.skills ?? []) {
          if (!bySlug.has(skill.slug)) bySlug.set(skill.slug, { ...skill, section: key });
        }
      }
      setItems([...bySlug.values()]);
    })().catch(cause => { if (!controller.signal.aborted) setError(cause instanceof Error ? cause.message : '读取 SkillHub 失败。'); })
      .finally(() => { if (!controller.signal.aborted) setBusy(false); });
    return () => controller.abort();
  }, []);

  const normalized = query.trim().toLowerCase();
  useEffect(() => { setLimit(PAGE_SIZE); }, [section, normalized]);
  const filtered = useMemo(() => items.filter(item => (section === '全部' || item.section === section)
    && (!normalized || `${item.name} ${item.slug} ${item.description_zh ?? item.description} ${item.category}`.toLowerCase().includes(normalized))), [items, section, normalized]);
  const visible = filtered.slice(0, limit);
  const sectionCounts = useMemo(() => {
    const counts: Record<string, number> = { 全部: items.length };
    for (const item of items) counts[item.section] = (counts[item.section] ?? 0) + 1;
    return counts;
  }, [items]);

  const install = async (item: HubSkill) => {
    setInstalling(item.slug); setError(''); setMessage('');
    try {
      const params = new URLSearchParams({ kind: 'download', slug: item.slug });
      if (item.version) params.set('version', item.version);
      if (item.namespace?.handle) params.set('namespace', item.namespace.handle);
      const response = await fetch(`/api/workdsh-skills/skillhub?${params}`, { credentials: 'same-origin' });
      if (!response.ok) throw new Error(response.status === 404 ? '该技能暂不提供下载（可能是企业专有技能）。' : `下载失败（${response.status}）。`);
      const blob = await response.blob();
      const file = new File([blob], `${item.slug}.zip`, { type: 'application/zip' });
      const staged = await management.stageImport(file);
      await management.commitImport(staged.id, 'shared-agents');
      setInstalled(current => [...new Set([...current, item.slug])]);
      setMessage(`已安装「${item.name ?? item.slug}」。`);
      await onInstalled();
    } catch (cause) { setError(cause instanceof Error ? cause.message : '安装 SkillHub 技能失败。'); }
    finally { setInstalling(''); }
  };

  return <section className="skillhub-market" aria-label="SkillHub 技能目录">
    <div className="market-head"><h2>SkillHub <span className="market-count">{items.length}</span></h2><span className="muted">来自 skillhub.cn 公开榜单，安装到本机 DSH 技能目录</span></div>
    {message && <div className="skillhub-success" role="status"><span>{message}</span><Button onClick={onOpenInstalled}>查看已安装</Button><button className="skillhub-dismiss" aria-label="关闭安装提示" onClick={() => setMessage('')}>×</button></div>}
    {error && <p className="catalog-note" role="alert">{error}</p>}
    <nav className="category-tabs" aria-label="SkillHub 榜单">{['全部', ...SECTIONS.map(item => item.key)].map(key => <button key={key} className={section === key ? 'active' : ''} aria-pressed={section === key} onClick={() => setSection(key)}>{key === '全部' ? '全部' : (SECTIONS.find(item => item.key === key)?.label ?? key)} {sectionCounts[key] ?? 0}</button>)}</nav>
    {busy ? <p className="muted" role="status">正在读取 SkillHub…</p> : visible.length ? <div className="grid">{visible.map(item => <article className="card market-card" key={item.slug}>
      <div className="card-top"><span className="skillhub-icon" aria-hidden>{item.iconUrl ? <img src={item.iconUrl} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={event => { event.currentTarget.hidden = true; }} /> : item.name.slice(0, 1).toUpperCase()}</span><span className="card-title"><strong title={item.name}>{item.name}</strong><small>{item.subCategories?.[0]?.name || item.category} · v{item.version || '—'}</small></span>
        <Button className={`install${installed.includes(item.slug) ? ' is-status is-installed' : ''}`} disabled={installed.includes(item.slug) || installing === item.slug} aria-label={`安装 ${item.name}`} onClick={() => void install(item)}>{installed.includes(item.slug) ? '已安装' : installing === item.slug ? '…' : '＋'}</Button></div>
      <p className="muted">{item.description_zh ?? item.description}</p>
      <small className="skillhub-meta">下载 {formatCount(item.downloads)} · 收藏 {formatCount(item.stars)}</small>
    </article>)}</div> : <p className="muted">没有匹配的技能。</p>}
    {visible.length < filtered.length && <div className="market-more"><Button onClick={() => setLimit(value => value + PAGE_SIZE)}>加载更多（{filtered.length - visible.length}）</Button></div>}
  </section>;
}
