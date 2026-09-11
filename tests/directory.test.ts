import test from 'node:test';
import assert from 'node:assert/strict';
import {
  organizations,
  filterOrganizations,
  getPrimaryAction,
  parseFilters,
} from '../lib/directory.ts';

void test('a volunteer search never routes someone to a paid-careers action', () => {
  const results = filterOrganizations(organizations, { intent: 'volunteer' });
  assert.ok(results.some((org) => org.id === 'eff'));
  assert.ok(
    results.every(
      (org) => getPrimaryAction(org, 'volunteer').intent === 'volunteer',
    ),
  );
  assert.equal(
    getPrimaryAction(
      results.find((org) => org.id === 'eff')!,
      'volunteer',
    ).url,
    'https://www.eff.org/volunteer',
  );
});
void test('paid-work search excludes organizations with only contribution or volunteer routes', () => {
  const results = filterOrganizations(organizations, { intent: 'careers' });
  assert.ok(results.some((org) => org.id === 'igalia'));
  assert.ok(
    !results.some((org) =>
      ['godot', 'blender', 'mastodon', 'codeberg'].includes(org.id),
    ),
  );
});
void test('search terms combine with both organization type and participation route', () => {
  assert.deepEqual(
    filterOrganizations(organizations, {
      query: 'EFF',
      intent: 'volunteer',
    }).map((org) => org.id),
    ['eff'],
  );
  assert.deepEqual(
    filterOrganizations(organizations, {
      query: '  nExtCLOUD   PHP ',
      category: 'company',
      intent: 'contribute',
    }).map((org) => org.id),
    ['nextcloud'],
  );
  assert.deepEqual(
    filterOrganizations(organizations, {
      query: 'nextcloud',
      category: 'nonprofit',
    }),
    [],
  );
});
void test('zero results and blank search behave predictably without changing source data', () => {
  const before = JSON.stringify(organizations);
  assert.equal(
    filterOrganizations(organizations, { query: '   ' }).length,
    organizations.length,
  );
  assert.deepEqual(
    filterOrganizations(organizations, { query: 'zzzz-unfindable' }),
    [],
  );
  assert.equal(JSON.stringify(organizations), before);
});
void test('records have unique ids, dated evidence, and safe official links', () => {
  assert.equal(
    new Set(organizations.map((org) => org.id)).size,
    organizations.length,
  );
  for (const org of organizations) {
    assert.ok(org.actions.length && org.sources.length, org.id);
    assert.match(org.reviewedAt, /^\d{4}-\d{2}-\d{2}$/);
    for (const link of [...org.actions, ...org.sources]) {
      const url = new URL(link.url);
      assert.equal(url.protocol, 'https:');
      assert.equal(url.username, '');
      assert.equal(url.password, '');
    }
  }
});
void test('agent filter inputs reject malformed values before applying state', () => {
  assert.deepEqual(parseFilters({}), {
    query: '',
    category: 'all',
    intent: 'all',
  });
  for (const value of [
    null,
    [],
    { query: 12 },
    { query: 'x'.repeat(301) },
    { category: 'fake' },
    { intent: 'unpaid-job' },
    { private: true },
  ])
    assert.throws(() => parseFilters(value));
});
