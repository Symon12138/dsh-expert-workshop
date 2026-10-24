import type { ComposerHandoffSource } from 'workdsh-contracts/composer';
import * as React from 'react';
import type { PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots';
import type { ExpertSummary } from '../shared.js';
import type { ExpertManagementClient } from './management.js';
import { Button, Icon, Modal } from 'workdsh-ui';
import { avatarColor, expertTitle } from './avatar.js';
import { WB_AVATARS } from './workbuddy-content.js';

function displayTitle(row: ExpertSummary): string {
  return row.expertType === 'team' ? row.name : expertTitle(row.name);
}

const pickerCss = `
.wd-expert-picker{position:relative;display:flex;align-items:center}
.wd-expert-trigger{display:flex;align-items:center;justify-content:center;min-width:36px;max-width:190px;height:36px;padding:0 9px;gap:7px;border:0;border-radius:10px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer}
.wd-expert-trigger:hover,.wd-expert-trigger[aria-expanded="true"]{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}
.wd-expert-trigger .expert-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:13px/20px "PingFang SC","Microsoft YaHei",sans-serif}.wd-expert-trigger svg{flex:none}
.wd-expert-trigger:disabled{opacity:.5;cursor:default}
.wd-expert-popover{position:absolute;z-index:90;left:0;bottom:calc(100% + 10px);width:336px;max-height:min(430px,60vh);overflow:auto;padding:8px;border-radius:15px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);box-shadow:var(--dsw-elevation-panel);font:14px/20px "PingFang SC","Microsoft YaHei",sans-serif}
.wd-expert-tabs{display:flex;gap:4px;margin:0 0 8px;padding:2px;border-radius:10px;background:var(--dsw-alias-bg-layer-2)}
.wd-expert-tabs button{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;min-height:32px;border:0;border-radius:8px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;font:13px/20px "PingFang SC","Microsoft YaHei",sans-serif}
.wd-expert-tabs button[aria-selected="true"]{background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font-weight:600}
.wd-expert-tabs button span{font-size:11px;color:var(--dsw-alias-label-tertiary)}
.wd-expert-search{width:100%;box-sizing:border-box;margin-bottom:6px;padding:7px 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);font:13px/18px "PingFang SC","Microsoft YaHei",sans-serif;outline:none}
.wd-expert-search:focus{border-color:var(--dsw-alias-brand-primary)}
.wd-expert-row{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:8px;padding:8px 5px;border-radius:10px}.wd-expert-row:hover{background:var(--dsw-alias-interactive-bg-hover)}
.wd-expert-copy{display:grid;grid-template-columns:38px minmax(0,1fr);gap:10px;align-items:center;min-width:0}
.wd-expert-mark{display:grid;place-items:center;width:38px;height:38px;border-radius:10px;background:var(--dsw-alias-interactive-bg-hover);color:#fff;font-weight:600;font-size:16px;object-fit:cover}.wd-expert-mark.img{display:block}
.wd-expert-copy strong,.wd-expert-copy small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wd-expert-copy small{margin-top:2px;font-size:11px;color:var(--dsw-alias-label-secondary)}
.wd-expert-action,.wd-expert-manage{border:0;background:transparent;color:inherit;cursor:pointer;font:inherit;border-radius:8px;padding:6px 8px}.wd-expert-action:disabled{opacity:.5;cursor:default}
.wd-expert-manage{display:flex;gap:8px;width:100%;margin-top:6px;padding:10px 9px;border-top:1px solid var(--dsw-alias-border-l2);border-radius:0;text-align:left}.wd-expert-manage:hover{background:var(--dsw-alias-interactive-bg-hover)}
.wd-expert-status{padding:12px;color:var(--dsw-alias-label-secondary)}
.summon-guard{padding:4px 2px 0}
.summon-guard h2{margin:0 0 12px;font-size:18px}
.summon-guard p{margin:0 0 12px;color:var(--dsw-alias-label-secondary);line-height:1.7}
.summon-guard .summon-dont-ask{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--dsw-alias-label-tertiary)}
.summon-guard .summon-guard-actions{display:flex;justify-content:flex-end;gap:10px;margin-top:22px}
@media(max-width:560px){.wd-expert-popover{position:fixed;left:12px;right:12px;bottom:86px;width:auto}}
`;

type Props = PropsRuntime<'conversation.input.left'> & {
  management: ExpertManagementClient;
  openManagement: () => void;
  summon: (id: string, revision: string | undefined, draft: string | undefined, source?: ComposerHandoffSource) => Promise<void>;
};

/** WorkBuddy-style picker: separate 专家 / 专家团 tabs, search, then summon. */
export function ConversationExperts({ useInput, sessionId, management, summon, openManagement }: Props) {
  const input = useInput(state => state);
  const root = React.useRef<HTMLDivElement>(null);
  const trigger = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState<'agent' | 'team'>('agent');
  const [query, setQuery] = React.useState('');
  const [items, setItems] = React.useState<readonly ExpertSummary[]>([]);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [acting, setActing] = React.useState(false);
  const [guardRow, setGuardRow] = React.useState<ExpertSummary>();
  const [dontAsk, setDontAsk] = React.useState(false);
  const [active, setActive] = React.useState<{ id: string; name: string }>();
  React.useEffect(() => {
    const controller = new AbortController();
    setActive(undefined);
    void management.verifyBinding(String(sessionId), controller.signal).then(async binding => {
      const detail = await management.get(binding.expertRevisionRef.expertId, binding.expertRevisionRef.revisionId, controller.signal);
      if (!controller.signal.aborted) setActive({ id: detail.expert.id, name: detail.revision?.definition.name ?? '已召唤专家' });
    }).catch(() => { /* Ordinary unbound conversations have no selected expert. */ });
    return () => controller.abort();
  }, [sessionId, management]);
  React.useEffect(() => {
    if (!open || acting) return;
    const outside = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); trigger.current?.focus(); } };
    document.addEventListener('pointerdown', outside); document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); };
  }, [open, acting]);
  React.useEffect(() => {
    if (!open) return;
    const controller = new AbortController();
    setLoading(true); setError(''); setItems([]);
    void (async () => {
      const rows: ExpertSummary[] = [];
      let cursor: string | undefined;
      do {
        const page = await management.list({ availability: 'enabled', limit: 100, ...(cursor ? { cursor } : {}) }, controller.signal);
        rows.push(...page.items); cursor = page.nextCursor;
      } while (cursor);
      if (!controller.signal.aborted) setItems(rows.filter(row => row.canUse && row.publishedRevisionRef));
    })().catch(cause => { if (!controller.signal.aborted) setError(cause instanceof Error ? cause.message : '无法加载专家，请重试。'); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [open, management]);
  const FINANCE_NOTICE_KEY = 'workdsh.experts.financeNoticeHidden';
  const performSummon = async (row: ExpertSummary) => {
    setActing(true); setError('');
    try { await summon(row.id, row.publishedRevisionRef?.revisionId, input.draft || undefined, { sessionId: String(sessionId), draft: input.draft, references: input.occurrences }); setOpen(false); }
    catch (cause) { setError(cause instanceof Error ? cause.message : '召唤失败，请重试。'); }
    finally { setActing(false); }
  };
  const choose = (row: ExpertSummary) => {
    const team = row.expertType === 'team';
    const finance = row.categoryId === '08-FinanceInvestment';
    let hidden = false;
    try { hidden = window.localStorage.getItem(FINANCE_NOTICE_KEY) === '1'; } catch { /* private mode */ }
    if (!team && (!finance || hidden)) { void performSummon(row); return; }
    setDontAsk(false);
    setGuardRow(row);
  };
  const confirmGuard = () => {
    if (!guardRow) return;
    if (guardRow.categoryId === '08-FinanceInvestment' && dontAsk) { try { window.localStorage.setItem(FINANCE_NOTICE_KEY, '1'); } catch { /* private mode */ } }
    const pending = guardRow;
    setGuardRow(undefined);
    void performSummon(pending);
  };
  const blocked = input.attachmentIds.length > 0 || input.phase !== 'plain';
  const counts = { agent: 0, team: 0 };
  for (const row of items) counts[row.expertType === 'team' ? 'team' : 'agent']++;
  const needle = query.trim().toLocaleLowerCase();
  const visible = items.filter(row => (row.expertType === 'team' ? 'team' : 'agent') === tab
    && (needle.length === 0 || `${row.name} ${row.description} ${row.profession ?? ''}`.toLocaleLowerCase().includes(needle)));
  return <>
    <style>{pickerCss}</style>
    <div className="wd-expert-picker" ref={root}>
      <button ref={trigger} className="wd-expert-trigger" type="button" aria-label="召唤专家" aria-haspopup="dialog" aria-expanded={open} disabled={blocked || acting} title={blocked ? '请先处理当前附件或正在执行的任务，再召唤专家。' : active ? `当前专家：${active.name}；点击更换专家` : '召唤专家'} onClick={() => setOpen(value => !value)}><Icon name="experts" />{active && <span className="expert-name">{active.name}</span>}</button>
      {open && <div role="dialog" aria-label="召唤专家" className="wd-expert-popover">
        <div className="wd-expert-tabs" role="tablist" aria-label="专家类型">
          <button type="button" role="tab" aria-selected={tab === 'agent'} onClick={() => setTab('agent')}>专家 <span>{counts.agent}</span></button>
          <button type="button" role="tab" aria-selected={tab === 'team'} onClick={() => setTab('team')}>专家团 <span>{counts.team}</span></button>
        </div>
        <input className="wd-expert-search" type="search" placeholder={tab === 'team' ? '搜索专家团' : '搜索专家'} aria-label={tab === 'team' ? '搜索专家团' : '搜索专家'} value={query} onChange={event => setQuery(event.currentTarget.value)} />
        {loading && <div className="wd-expert-status" role="status">正在加载专家…</div>}
        {error && <div className="wd-expert-status" role="alert">{error}</div>}
        {!loading && !error && !visible.length && <div className="wd-expert-status">{needle.length > 0 ? '没有匹配的结果，换个关键词试试。' : tab === 'team' ? '暂无可用专家团。' : '暂无可用专家，请先导入或发布专家。'}</div>}
        {visible.map(row => <div className="wd-expert-row" key={row.id}>
          <div className="wd-expert-copy">{WB_AVATARS[row.name] ? <img className="wd-expert-mark img" src={WB_AVATARS[row.name]} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" /> : <span className="wd-expert-mark" style={{ background: avatarColor(row.name) }}>{displayTitle(row).trim().charAt(0) || '专'}</span>}<span><strong title={row.name}>{displayTitle(row)}</strong><small>{row.description}</small></span></div>
          <button className="wd-expert-action" type="button" aria-label={`召唤 ${row.name}`} aria-pressed={active?.id === row.id} disabled={acting || row.readiness !== 'ready'} title={row.readiness === 'ready' ? '新建专家任务，保留输入文字，由你确认发送' : '专家依赖尚未就绪，请在专家中心查看'} onClick={() => void choose(row)}>{acting ? '处理中' : row.readiness === 'ready' ? '召唤' : '未就绪'}</button>
        </div>)}
        <button className="wd-expert-manage" type="button" disabled={acting} onClick={() => { setOpen(false); openManagement(); }}><span aria-hidden="true">↗</span>管理专家</button>
      </div>}
    </div>
    <Modal open={Boolean(guardRow)} label="召唤提示" className="summon-dialog" onClose={() => setGuardRow(undefined)}>
      {guardRow && <div className="summon-guard">
        <h2>{guardRow.expertType === 'team' ? '“专家团”使用提示' : '“专家”使用提示'}</h2>
        {guardRow.expertType === 'team' && <p>“专家团”可能会调用多位“专家”协同执行任务，消耗通常为“专家”的数倍。</p>}
        {guardRow.categoryId === '08-FinanceInvestment' && <p>“{guardRow.expertType === 'team' ? '专家团' : '专家'}”内容由 AI 生成，仅供参考，无法替代专业判断，不构成决策和投资建议。</p>}
        {guardRow.categoryId === '08-FinanceInvestment' && <label className="summon-dont-ask"><input type="checkbox" checked={dontAsk} onChange={event => setDontAsk(event.currentTarget.checked)} /> 不再提示</label>}
        <div className="summon-guard-actions">
          <Button onClick={() => setGuardRow(undefined)}>取消</Button>
          <Button variant="primary" disabled={acting} onClick={confirmGuard}>悉知并继续使用</Button>
        </div>
      </div>}
    </Modal>
  </>;
}
