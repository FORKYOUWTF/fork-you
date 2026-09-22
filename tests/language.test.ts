import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseLanguagePreference,
  resolveLanguage,
  readLanguagePreference,
  saveLanguagePreference,
  languageStorageKey,
  languageOptions,
  type Language,
} from '../lib/language.ts';
import {
  organizations,
  filterOrganizations,
  getPrimaryAction,
  type DirectoryFilters,
} from '../lib/directory.ts';
import { newsStories, formatNewsDate } from '../lib/news.ts';
import { getOrganizations, getNewsStories } from '../lib/localization.ts';
import { translations } from '../lib/translations.ts';
import { copy } from '../lib/copy.ts';
import { registerDirectoryTools } from '../lib/webmcp.ts';

void test('automatic selection respects browser order, regions and explicit Chinese scripts', () => {
  for (const tag of ['zh', 'zh-CN', 'zh-SG', 'zh-Hans-HK', 'ZH_cn'])
    assert.equal(resolveLanguage('auto', [tag, 'en-US']), 'zh-CN');
  for (const tag of [
    'zh-TW',
    'zh-HK',
    'zh-MO',
    'zh-Hant',
    'zh-Hant-CN',
    'ZH_hant_HK',
  ])
    assert.equal(resolveLanguage('auto', [tag, 'en-US']), 'zh-TW');
  for (const [tag, expected] of [
    ['ko-KR', 'ko'],
    ['ja-JP', 'ja'],
    ['es-MX', 'es'],
    ['es-419', 'es'],
    ['fr-CA', 'fr'],
    ['it-CH', 'it'],
  ])
    assert.equal(resolveLanguage('auto', ['de', tag, 'en']), expected);
  assert.equal(resolveLanguage('auto', ['en-CA', 'zh-CN']), 'en');
  assert.equal(resolveLanguage('auto', ['fr-FR', 'zh-CN', 'en']), 'fr');
  assert.equal(resolveLanguage('auto', ['de', 'ar']), 'en');
  assert.equal(resolveLanguage('auto', []), 'en');
});

void test('every manual choice persists and Auto restores browser preference', () => {
  const values = new Map<string, string>();
  const storage = {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => {
      values.set(key, value);
    },
  };
  assert.equal(readLanguagePreference(storage), 'auto');
  for (const { value } of languageOptions) {
    saveLanguagePreference(storage, value);
    assert.equal(readLanguagePreference(storage), value);
    assert.equal(
      resolveLanguage(readLanguagePreference(storage), ['en', 'zh-CN']),
      value,
    );
  }
  saveLanguagePreference(storage, 'auto');
  assert.equal(resolveLanguage(readLanguagePreference(storage), ['en']), 'en');
  assert.equal(
    resolveLanguage(readLanguagePreference(storage), ['zh-HK']),
    'zh-TW',
  );
  assert.equal(
    resolveLanguage(readLanguagePreference(storage), ['ja-JP']),
    'ja',
  );
  values.set(languageStorageKey, 'unexpected');
  assert.equal(readLanguagePreference(storage), 'auto');
  for (const invalid of [
    null,
    undefined,
    '',
    {},
    'de',
    'toString',
    'constructor',
  ])
    assert.equal(parseLanguagePreference(invalid), 'auto');
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
  for (const { value } of languageOptions) {
    assert.doesNotThrow(() => saveLanguagePreference(storage, value));
    assert.equal(resolveLanguage(value, ['en']), value);
  }
});

void test('all translations cover the full directory and news without changing evidence', () => {
  const before = JSON.stringify({ organizations, newsStories });
  for (const { value: language } of languageOptions) {
    if (language === 'en') continue;
    const {
      organizationTranslations,
      actionLabels,
      sourceLabels,
      newsTranslations,
    } = translations[language];
    assert.deepEqual(
      Object.keys(organizationTranslations).sort(),
      organizations.map((org) => org.id).sort(),
      language,
    );
    assert.deepEqual(
      Object.keys(newsTranslations).sort(),
      newsStories.map((story) => story.id).sort(),
      language,
    );
    const translatedOrganizations = getOrganizations(language);
    for (const original of organizations) {
      const translated = translatedOrganizations.find(
        (org) => org.id === original.id,
      )!;
      const text = organizationTranslations[original.id];
      assert.ok(text.name.trim());
      assert.equal(text.tags.length, original.tags.length);
      for (const key of [
        'description',
        'reason',
        'governance',
        'participation',
      ] as const) {
        assert.ok(text[key].trim(), language + ':' + original.id + '.' + key);
        assert.notEqual(translated[key], original[key]);
      }
      assert.equal(translated.reviewedAt, original.reviewedAt);
      assert.equal(translated.category, original.category);
      for (const action of original.actions)
        assert.ok(actionLabels[action.label], language + ':' + action.label);
      for (const source of original.sources)
        assert.ok(sourceLabels[source.label], language + ':' + source.label);
      assert.deepEqual(
        translated.actions.map(({ url, intent }) => ({ url, intent })),
        original.actions.map(({ url, intent }) => ({ url, intent })),
      );
      assert.deepEqual(
        translated.sources.map((s) => s.url),
        original.sources.map((s) => s.url),
      );
    }
    const stories = getNewsStories(language);
    for (const original of newsStories) {
      const translated = stories.find((story) => story.id === original.id)!;
      const text = newsTranslations[original.id];
      for (const key of [
        'title',
        'topic',
        'summary',
        'status',
        'ourTake',
      ] as const) {
        assert.ok(text[key].trim(), language + ':' + original.id + '.' + key);
        assert.notEqual(text[key], original[key]);
      }
      assert.equal(translated.eventDate, original.eventDate);
      assert.equal(translated.reviewedAt, original.reviewedAt);
      assert.deepEqual(
        Object.keys(text.context).sort(),
        original.context.map((c) => c.label).sort(),
      );
      original.context.forEach((item, i) => {
        assert.ok(translated.context[i].text.trim());
        assert.notEqual(translated.context[i].text, item.text);
        assert.notEqual(translated.context[i].label, item.label);
        assert.deepEqual(translated.context[i].sources, item.sources);
      });
      for (const source of original.sources)
        assert.ok(text.sourceLabels[source.id], language + ':' + source.id);
      assert.deepEqual(
        translated.sources.map(({ label: _label, ...evidence }) => evidence),
        original.sources.map(({ label: _label, ...evidence }) => evidence),
      );
    }
  }
  assert.equal(JSON.stringify({ organizations, newsStories }), before);
  assert.equal(formatNewsDate('2026-09-18', 'zh-CN'), '2026年9月18日');
  for (const { value } of languageOptions)
    assert.ok(formatNewsDate('2026-09-18', value).includes('2026'));
});

void test('multilingual searches retain results and correct participation routes in every language', () => {
  for (const { value: language } of languageOptions) {
    const records = getOrganizations(language);
    for (const query of [
      'Nextcloud 自托管',
      'Nextcloud 自行架設',
      'Nextcloud セルフホスト',
      'Nextcloud 셀프 호스팅',
      'Nextcloud colaboracion',
      'Nextcloud auto-hebergement',
      'Nextcloud collaborazione',
    ])
      assert.deepEqual(
        filterOrganizations(records, { query, intent: 'contribute' }).map(
          (org) => org.id,
        ),
        ['nextcloud'],
        language + ':' + query,
      );
    for (const query of [
      '电子前哨',
      '電子前哨',
      '전자프런티어',
      '電子フロンティア',
    ])
      assert.deepEqual(
        filterOrganizations(records, { query, intent: 'volunteer' }).map(
          (org) => org.id,
        ),
        ['eff'],
        language + ':' + query,
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

void test('translated controls, accessible labels and plural forms are complete', () => {
  for (const { value } of languageOptions) {
    const ui = copy[value];
    assert.deepEqual(Object.keys(ui).sort(), Object.keys(copy.en).sort());
    for (const text of Object.values(ui)) {
      if (typeof text === 'string') assert.ok(text.trim());
    }
    assert.ok(ui.whyListed('EFF').includes('EFF'));
    assert.ok(ui.contextFor('ZCode').includes('ZCode'));
    assert.ok(ui.sourceLabel(2, 'Reuters').includes('Reuters'));
    assert.ok(ui.reviewed('2026-09-18').includes('2026-09-18'));
  }
  assert.equal(copy.es.matches(1), '1 resultado');
  assert.equal(copy.es.matches(2), '2 resultados');
  assert.equal(copy.fr.sourceCount(1), '1 source');
  assert.equal(copy.fr.sourceCount(2), '2 sources');
  assert.equal(copy.it.matches(1), '1 risultato');
  assert.equal(copy.it.matches(2), '2 risultati');
  assert.match(copy['zh-TW'].projectAction, /專案/);
  assert.match(copy['zh-TW'].volunteerHelp, /社群/);
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
