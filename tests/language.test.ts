import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseLanguagePreference,
  resolveLanguage,
  readLanguagePreference,
  saveLanguagePreference,
  languageStorageKey,
} from '../lib/language.ts';
import {
  organizations,
  filterOrganizations,
  getPrimaryAction,
  type DirectoryFilters,
} from '../lib/directory.ts';
import { newsStories, formatNewsDate } from '../lib/news.ts';
import { getOrganizations, getNewsStories } from '../lib/localization.ts';
import {
  organizationTranslations,
  actionLabels,
  sourceLabels,
} from '../lib/directory-zh.ts';
import { newsTranslations } from '../lib/news-zh.ts';
import { registerDirectoryTools } from '../lib/webmcp.ts';
import type { Language } from '../lib/language.ts';

void test('automatic selection respects browser order and Chinese variants', () => {
  for (const chinese of ['zh', 'zh-CN', 'zh-TW', 'zh-Hant-HK', 'ZH_cn'])
    assert.equal(resolveLanguage('auto', [chinese, 'en-US']), 'zh-CN');
  assert.equal(resolveLanguage('auto', ['en-CA', 'zh-CN']), 'en');
  assert.equal(resolveLanguage('auto', ['fr-FR', 'zh-CN', 'en']), 'zh-CN');
  assert.equal(resolveLanguage('auto', ['fr', 'de']), 'en');
  assert.equal(resolveLanguage('auto', []), 'en');
});

void test('manual choice wins, persists, and Auto restores browser preference', () => {
  const values = new Map<string, string>();
  const storage = {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => {
      values.set(key, value);
    },
  };
  assert.equal(readLanguagePreference(storage), 'auto');
  saveLanguagePreference(storage, 'en');
  assert.equal(
    resolveLanguage(readLanguagePreference(storage), ['zh-CN']),
    'en',
  );
  saveLanguagePreference(storage, 'zh-CN');
  assert.equal(
    resolveLanguage(readLanguagePreference(storage), ['en']),
    'zh-CN',
  );
  saveLanguagePreference(storage, 'auto');
  assert.equal(resolveLanguage(readLanguagePreference(storage), ['en']), 'en');
  assert.equal(
    resolveLanguage(readLanguagePreference(storage), ['zh-CN']),
    'zh-CN',
  );
  values.set(languageStorageKey, 'unexpected');
  assert.equal(readLanguagePreference(storage), 'auto');
  assert.equal(parseLanguagePreference(null), 'auto');
});

void test('blocked browser storage does not break language selection', () => {
  const storage = {
    getItem: () => {
      throw new Error('blocked');
    },
    setItem: () => {
      throw new Error('blocked');
    },
  };
  assert.equal(readLanguagePreference(storage), 'auto');
  assert.doesNotThrow(() => saveLanguagePreference(storage, 'zh-CN'));
  assert.equal(resolveLanguage('zh-CN', ['en']), 'zh-CN');
});

void test('every profile and news brief has complete Chinese copy without changing evidence', () => {
  const before = JSON.stringify({ organizations, newsStories });
  for (const original of organizations) {
    const translated = getOrganizations('zh-CN').find(
      (org) => org.id === original.id,
    )!;
    const copy = organizationTranslations[original.id];
    assert.ok(copy, original.id);
    for (const key of [
      'description',
      'reason',
      'governance',
      'participation',
    ] as const) {
      assert.match(copy[key], /[\u3400-\u9fff]/, `${original.id}.${key}`);
      assert.notEqual(translated[key], original[key]);
    }
    assert.equal(translated.reviewedAt, original.reviewedAt);
    assert.equal(translated.category, original.category);
    for (const action of original.actions)
      assert.ok(actionLabels[action.label], action.label);
    for (const source of original.sources)
      assert.ok(sourceLabels[source.label], source.label);
    assert.deepEqual(
      translated.actions.map(({ url, intent }) => ({ url, intent })),
      original.actions.map(({ url, intent }) => ({ url, intent })),
    );
    assert.deepEqual(
      translated.sources.map((s) => s.url),
      original.sources.map((s) => s.url),
    );
  }
  for (const original of newsStories) {
    const translated = getNewsStories('zh-CN').find(
      (story) => story.id === original.id,
    )!;
    const copy = newsTranslations[original.id];
    assert.ok(copy, original.id);
    for (const key of [
      'title',
      'topic',
      'summary',
      'status',
      'ourTake',
    ] as const)
      assert.match(copy[key], /[\u3400-\u9fff]/, `${original.id}.${key}`);
    assert.equal(translated.eventDate, original.eventDate);
    assert.equal(translated.reviewedAt, original.reviewedAt);
    assert.deepEqual(
      Object.keys(copy.context).sort(),
      original.context.map((c) => c.label).sort(),
    );
    original.context.forEach((item, i) => {
      assert.match(translated.context[i].text, /[\u3400-\u9fff]/);
      assert.deepEqual(translated.context[i].sources, item.sources);
    });
    for (const source of original.sources)
      assert.ok(copy.sourceLabels[source.id], source.id);
    assert.deepEqual(
      translated.sources.map(({ label: _label, ...evidence }) => evidence),
      original.sources.map(({ label: _label, ...evidence }) => evidence),
    );
  }
  assert.equal(JSON.stringify({ organizations, newsStories }), before);
  assert.equal(formatNewsDate('2026-09-18', 'zh-CN'), '2026年9月18日');
});

void test('bilingual queries keep the same results and participation routes after switching', () => {
  for (const language of ['en', 'zh-CN'] as const) {
    const records = getOrganizations(language);
    assert.deepEqual(
      filterOrganizations(records, {
        query: 'Nextcloud 自托管',
        intent: 'contribute',
      }).map((org) => org.id),
      ['nextcloud'],
    );
    assert.deepEqual(
      filterOrganizations(records, {
        query: '电子前哨',
        intent: 'volunteer',
      }).map((org) => org.id),
      ['eff'],
    );
    const volunteers = filterOrganizations(records, {
      query: '隐私',
      intent: 'volunteer',
    });
    assert.ok(volunteers.some((org) => org.id === 'tor'));
    assert.ok(
      volunteers.every(
        (org) => getPrimaryAction(org, 'volunteer').intent === 'volunteer',
      ),
    );
    assert.deepEqual(
      filterOrganizations(records, { query: '不存在的组织xyz' }),
      [],
    );
  }
});

void test('directory tools follow the displayed language and bilingual filters', (t) => {
  type Tool = { name: string; execute: (input: unknown) => unknown };
  const tools = new Map<string, Tool>();
  const signals: AbortSignal[] = [];
  const previous = Object.getOwnPropertyDescriptor(globalThis, 'document');
  Object.defineProperty(globalThis, 'document', {
    configurable: true,
    value: {
      modelContext: {
        registerTool: (tool: Tool, options: { signal: AbortSignal }) => {
          tools.set(tool.name, tool);
          signals.push(options.signal);
        },
      },
    },
  });
  t.after(() => {
    if (previous) Object.defineProperty(globalThis, 'document', previous);
    else Reflect.deleteProperty(globalThis, 'document');
  });
  let language: Language = 'zh-CN';
  let filters: Required<DirectoryFilters> = {
    query: '',
    category: 'all',
    intent: 'all',
  };
  const cleanup = registerDirectoryTools({
    language: () => language,
    read: () => filters,
    apply: (next) => {
      filters = next;
    },
  });
  const result = tools
    .get('set_directory_filters')!
    .execute({ query: '电子前哨', intent: 'volunteer' }) as {
    language: string;
    results: { name: string; action: { intent: string } }[];
  };
  assert.equal(result.language, 'zh-CN');
  assert.equal(result.results[0].name, '电子前哨基金会（EFF）');
  assert.equal(result.results[0].action.intent, 'volunteer');
  language = 'en';
  const english = tools.get('read_directory')!.execute({}) as typeof result;
  assert.equal(english.results[0].name, 'Electronic Frontier Foundation');
  cleanup?.();
  assert.ok(signals.every((signal) => signal.aborted));
});
