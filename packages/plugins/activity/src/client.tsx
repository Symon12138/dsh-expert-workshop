import type { Context } from '@deepseek-ai/cordis';
import type { ActivityPresentation } from 'expert-workshop-contracts/activity';
import { createPresentationRegistry } from './registry.js';

// Compatibility for identity contributors only. Native Harness owns process and Team UI.
declare module '@deepseek-ai/cordis' { interface Context { activityPresentation: ActivityPresentation; } }
export const name = 'expertworkshop-activity-client';
export function apply(ctx: Context): void {
  ctx.provide('activityPresentation', createPresentationRegistry());
}
