import test from 'node:test';
import assert from 'node:assert/strict';
import { agentPresetProjectionDefinition as projection } from '@deepseek-ai/dsh-agent-preset-registry';

test('preset projection restores the selected composition rather than the creation preset', () => {
  // Controlled event fixtures; this does not create or resume a native Session.
  const header = Object.freeze({ agentPreset: 'expertworkshop-a' });
  const events = [
    { type: 'agent-preset/selected', seq: 1, time: 1, data: { agentPreset: 'expertworkshop-b' } },
    { type: 'expertworkshop/probe', seq: 2, time: 2, data: {}, ignorable: true },
  ];
  const replay = () => events.reduce((state, event) => projection.apply(state, event), projection.init(header));
  assert.equal(projection.init(header), 'expertworkshop-a');
  assert.equal(replay(), 'expertworkshop-b');
  assert.equal(replay(), 'expertworkshop-b');
  assert.equal(header.agentPreset, 'expertworkshop-a');
  assert.equal(projection.init({}), null);
  assert.equal(projection.wire.view(replay()), 'expertworkshop-b');
});
