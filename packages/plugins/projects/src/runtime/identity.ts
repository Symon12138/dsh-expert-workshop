import type { Context } from '@deepseek-ai/cordis';
import type { ActorContext, IdentityProfile, IdentityService } from 'expert-workshop-contracts';

export function localProjectActor(evidence?: { sessionId?: string; runId?: string }): ActorContext {
  return {
    principalId: 'local-user',
    organizationId: 'local-personal',
    requestId: `projects-local-${Date.now().toString(36)}`,
    resolvedBy: 'workdsh-local',
    ...(evidence?.sessionId === undefined ? {} : { sessionId: evidence.sessionId }),
    ...(evidence?.runId === undefined ? {} : { runId: evidence.runId }),
  };
}

export function projectIdentity(ctx: Context): IdentityService | undefined {
  return ctx.reflect.get('workdshIdentity') as IdentityService | undefined;
}

export function projectProfile(ctx: Context): Pick<IdentityProfile, 'principalId' | 'organization' | 'resolvedBy'> {
  const identity = projectIdentity(ctx);
  if (identity) return identity.profile();
  return {
    principalId: 'local-user',
    organization: { id: 'local-personal', kind: 'personal', name: '本地个人' } as IdentityProfile['organization'],
    resolvedBy: 'workdsh-local',
  } as Pick<IdentityProfile, 'principalId' | 'organization' | 'resolvedBy'>;
}

export async function resolveProjectActor(ctx: Context, evidence?: { sessionId?: string; runId?: string }, signal?: AbortSignal): Promise<ActorContext> {
  const identity = projectIdentity(ctx);
  if (!identity) return localProjectActor(evidence);
  return identity.resolve(evidence, signal);
}
