import * as React from 'react';
import { Button } from 'expert-workshop-ui';
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
type MarketItem = HubSkill & { section: string };

const SECTIONS = [
  { key: 'hot', label: '热门' },
  { key: 'trending', label: '趋势' },
  { key: 'featured', label: '精选' },
  { key: 'recommended', label: '推荐' },
] as const;

const PAGE_SIZE = 60;

function normalize(skill: Record<string, unknown>): HubSkill {
  return {
    slug: String(skill.slug ?? ''),
    name: String(skill.displayName ?? skill.name ?? skill.slug ?? ''),
    description: String(skill.summary ?? skill.description ?? ''),
    description_zh: typeof skill.description_zh === 'string' ? skill.description_zh : undefined,
    category: String(skill.category ?? ''),
    iconUrl: typeof skill.icon_url === 'string' ? skill.icon_url : typeof skill.iconUrl === 'string' ? skill.iconUrl : undefined,
    version: typeof skill.version === 'string' ? skill.version : undefined,
    downloads: typeof skill.downloads === 'number' ? skill.downloads : undefined,
    stars: typeof skill.installs === 'number' ? skill.installs : typeof skill.stars === 'number' ? skill.stars : undefined,
    subCategories: Array.isArray(skill.subCategories) ? skill.subCategories as HubSkill['subCategories'] : undefined,
    namespace: skill.namespace && typeof skill.namespace === 'object' ? skill.namespace as HubSkill['namespace'] : undefined,
  };
}

function formatCount(value?: number): string {
  if (!value) return '0';
  if (value >= 10000) return `${(value / 10000).toFixed(1)}万`;
  return String(value);
}

async function fetchJson<T>(url: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(url, { credentials: 'same-origin', signal });
  if (!response.ok) throw new Error(`SkillHub 请求失败（${response.status}）。`);
  return await response.json() as T;
}

export function SkillHubPanel({ query, management, onInstalled, onOpenInstalled }: { query: string; management: SkillManagementClient; onInstalled: () => Promise<void>; onOpenInstalled: () => void }) {
  const [items, setItems] = useState<readonly MarketItem[]>([]);
  const [searchItems, setSearchItems] = useState<readonly HubSkill[]>([]);
  const [section, setSection] = useState('全部');
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [busy, setBusy] = useState(true);
  const [searchBusy, setSearchBusy] = useState(false);
  const [installing, setInstalling] = useState('');
  const [installed, setInstalled] = useState<readonly string[]>([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    setBusy(true); setError('');
    void (async () => {
      const results = await Promise.all(SECTIONS.map(async ({ key }) => ({ key, data: await fetchJson<{ skills?: Record<string, unknown>[] }>(`/api/expertworkshop-skills/skillhub?kind=showcase&section=${key}`, controller.signal) })));
      if (controller.signal.aborted) return;
      const bySlug = new Map<string, MarketItem>();
      for (const { key, data } of results) {
        for (const raw of data.skills ?? []) {
          const skill = normalize(raw);
          if (skill.slug && !bySlug.has(skill.slug)) bySlug.set(skill.slug, { ...skill, section: key });
        }
      }
      setItems([...bySlug.values()]);
    })().catch(cause => { if (!controller.signal.aborted) setError(cause instanceof Error ? cause.message : '读取 SkillHub 失败。'); })
      .finally(() => { if (!controller.signal.aborted) setBusy(false); });
    return () => controller.abort();
  }, []);

  const normalized = query.trim();
  useEffect(() => {
    const controller = new AbortController();
    if (!normalized) { setSearchItems([]); setSearchBusy(false); return () => controller.abort(); }
    setSearchBusy(true);
    const timer = window.setTimeout(() => {
      void fetchJson<{ results?: Record<string, unknown>[] }>(`/api/expertworkshop-skills/skillhub?kind=search&q=${encodeURIComponent(normalized)}&limit=60`, controller.signal)
        .then(data => { if (!controller.signal.aborted) setSearchItems((data.results ?? []).map(normalize).filter(item => item.slug)); })
        .catch(cause => { if (!controller.signal.aborted) setError(cause instanceof Error ? cause.message : 'SkillHub 搜索失败。'); })
        .finally(() => { if (!controller.signal.aborted) setSearchBusy(false); });
    }, 300);
    return () => { window.clearTimeout(timer); controller.abort(); };
  }, [normalized]);

  useEffect(() => { setLimit(PAGE_SIZE); }, [section, normalized]);
  const showcaseFiltered = useMemo(() => items.filter(item => (section === '全部' || item.section === section)
    && (!normalized || `${item.name} ${item.slug} ${item.description_zh ?? item.description} ${item.category}`.toLowerCase().includes(normalized.toLowerCase()))), [items, section, normalized]);
  const display = normalized ? searchItems : showcaseFiltered.slice(0, limit);
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
      const response = await fetch(`/api/expertworkshop-skills/skillhub?${params}`, { credentials: 'same-origin' });
      if (!response.ok) throw new Error(response.status === 404 ? '该技能暂不提供下载（可能是企业专有技能）。' : `下载失败（${response.status}）。`);
      const blob = await response.blob();
      const file = new File([blob], `${item.slug}.zip`, { type: 'application/zip' });
      const staged = await management.stageImport(file);
      await management.commitImport(staged.id, 'shared-agents');
      setInstalled(current => [...new Set([...current, item.slug])]);
      setMessage(`已安装「${item.name || item.slug}」。`);
      await onInstalled();
    } catch (cause) { setError(cause instanceof Error ? cause.message : '安装 SkillHub 技能失败。'); }
    finally { setInstalling(''); }
  };

  return <section className="skillhub-market" aria-label="SkillHub 技能目录">
    <div className="market-head"><h2>SkillHub <span className="market-count">{normalized ? searchItems.length : items.length}</span></h2><span className="muted">{normalized ? `搜索「${normalized}」` : '来自 skillhub.cn 公开榜单，安装到本机 DSH 技能目录'}</span></div>
    {message && <div className="skillhub-success" role="status"><span>{message}</span><Button onClick={onOpenInstalled}>查看已安装</Button><button className="skillhub-dismiss" aria-label="关闭安装提示" onClick={() => setMessage('')}>×</button></div>}
    {error && <p className="catalog-note" role="alert">{error}</p>}
    {!normalized && <nav className="category-tabs" aria-label="SkillHub 榜单">{['全部', ...SECTIONS.map(item => item.key)].map(key => <button key={key} className={section === key ? 'active' : ''} aria-pressed={section === key} onClick={() => setSection(key)}>{key === '全部' ? '全部' : (SECTIONS.find(item => item.key === key)?.label ?? key)} {sectionCounts[key] ?? 0}</button>)}</nav>}
    {searchBusy && <p className="muted" role="status">正在搜索 SkillHub…</p>}
    {busy && !normalized ? <p className="muted" role="status">正在读取 SkillHub…</p> : display.length ? <div className="grid">{display.map(item => <article className="card market-card" key={item.slug}>
      <div className="card-top"><span className="skillhub-icon" aria-hidden>{item.iconUrl ? <img src={item.iconUrl} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={event => { event.currentTarget.hidden = true; }} /> : item.name.slice(0, 1).toUpperCase()}</span><span className="card-title"><strong title={item.name}>{item.name}</strong><small>{item.subCategories?.[0]?.name || item.category} · v{item.version || '—'}</small></span>
        <Button className={`install${installed.includes(item.slug) ? ' is-status is-installed' : ''}`} disabled={installed.includes(item.slug) || installing === item.slug} aria-label={`安装 ${item.name}`} onClick={() => void install(item)}>{installed.includes(item.slug) ? '已安装' : installing === item.slug ? '…' : '＋'}</Button></div>
      <p className="muted">{item.description_zh ?? item.description}</p>
      <small className="skillhub-meta">下载 {formatCount(item.downloads)} · 收藏 {formatCount(item.stars)}</small>
    </article>)}</div> : !busy && !searchBusy ? <p className="muted">{normalized ? '没有匹配的 SkillHub 技能。' : '没有匹配的技能。'}</p> : null}
    {!normalized && display.length < showcaseFiltered.length && <div className="market-more"><Button onClick={() => setLimit(value => value + PAGE_SIZE)}>加载更多（{showcaseFiltered.length - display.length}）</Button></div>}
  </section>;
}
