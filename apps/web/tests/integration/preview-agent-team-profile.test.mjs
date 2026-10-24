import assert from 'node:assert/strict';
import { test } from 'node:test';
import { withoutRedundantAgentTeamProfile } from '../../scripts/preview-agent-team.mjs';

test('preview keeps only the Expert Workshop-owned Agent Team bundle', () => {
  const input = { dsh: { profile: { bundles: ['@deepseek-ai/dsh-base', 'expertworkshop-plugin-experts', '@deepseek-ai/dsh-experimental-agent-team-profile', 'expertworkshop-plugin-library'] } } };
  const output = withoutRedundantAgentTeamProfile(input);
  assert.deepEqual(output.dsh.profile.bundles, ['@deepseek-ai/dsh-base', 'expertworkshop-plugin-experts', 'expertworkshop-plugin-library']);
  assert.equal(input.dsh.profile.bundles.length, 4);
  assert.equal(withoutRedundantAgentTeamProfile(output), undefined);
});

test('preview leaves a standalone upstream Team profile alone without Expert Workshop experts', () => {
  const input = { dsh: { profile: { bundles: ['@deepseek-ai/dsh-experimental-agent-team-profile'] } } };
  assert.equal(withoutRedundantAgentTeamProfile(input), undefined);
});
