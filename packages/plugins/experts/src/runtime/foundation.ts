import type { Context } from '@deepseek-ai/cordis';
import type { SessionCreateRequest, SessionCreateValue } from '@deepseek-ai/dsh-api-session-controller';
import type {
  AccessService,
  ActorContext,
  AuditService,
  IdentityService,
} from 'expert-workshop-contracts';
import type { SkillManagementService } from 'expert-workshop-contracts/skills';

/** Local personal actor used when the identity/access foundation is absent. */
export function localActor(evidence?: { sessionId?: string; runId?: string }): ActorContext {
  return {
    principalId: 'local-user',
    organizationId: 'local-personal',
    requestId: `local-${Date.now().toString(36)}`,
    resolvedBy: 'expertworkshop-local',
    ...(evidence?.sessionId === undefined ? {} : { sessionId: evidence.sessionId }),
    ...(evidence?.runId === undefined ? {} : { runId: evidence.runId }),
  };
}

export async function resolveActor(ctx: Context, evidence?: { sessionId?: string; runId?: string }, signal?: AbortSignal): Promise<ActorContext> {
  const identity = ctx.reflect.get('expertworkshopIdentity') as IdentityService | undefined;
  if (!identity) return localActor(evidence);
  return identity.resolve(evidence, signal);
}

export interface LocalSessionAccess {
  create(request: SessionCreateRequest, signal?: AbortSignal): Promise<SessionCreateValue>;
}

export interface ExpertFoundation {
  readonly identity: IdentityService | undefined;
  readonly access: Pick<AccessService, 'authorize'>;
  readonly audit: Pick<AuditService, 'append'>;
  readonly sessionAccess: LocalSessionAccess;
  readonly skills: SkillManagementService | undefined;
}

/** Resolve governance services when present; otherwise run in local personal mode. */
export function resolveExpertFoundation(ctx: Context): ExpertFoundation {
  const access = ctx.reflect.get('expertworkshopAccess') as AccessService | undefined;
  const audit = ctx.reflect.get('expertworkshopAudit') as AuditService | undefined;
  const sessionAccess = ctx.reflect.get('expertworkshopSessionAccess') as LocalSessionAccess | undefined;
  return {
    identity: ctx.reflect.get('expertworkshopIdentity') as IdentityService | undefined,
    access: access ?? {
      authorize: async () => ({ effect: 'allow' as const, code: 'local-allow', authorizationRevision: 'local', grantIds: [] }),
    },
    audit: audit ?? { append: async () => undefined },
    sessionAccess: sessionAccess ?? {
      create: (request) => ctx.sessionController.create(request),
    },
    skills: ctx.reflect.get('expertworkshopSkills') as SkillManagementService | undefined,
  };
}
