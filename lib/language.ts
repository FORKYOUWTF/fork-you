export const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'zh-CN', label: '简体中文' },
  { value: 'zh-TW', label: '繁體中文' },
  { value: 'ko', label: '한국어' },
  { value: 'ja', label: '日本語' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'it', label: 'Italiano' },
] as const;
export type Language = (typeof languageOptions)[number]['value'];
export type LanguagePreference = Language | 'auto';
export const languageStorageKey = 'fork-you-language';

export function parseLanguagePreference(value: unknown): LanguagePreference {
  return languageOptions.some((option) => option.value === value)
    ? (value as Language)
    : 'auto';
}

export function resolveLanguage(
  preference: LanguagePreference,
  browserLanguages: readonly string[],
): Language {
  if (preference !== 'auto') return preference;
  for (const tag of browserLanguages) {
    const [primary, ...subtags] = tag.toLowerCase().split(/[-_]/);
    if (primary === 'zh') {
      // An explicit script takes precedence over a region (e.g. zh-Hans-HK).
      if (subtags.includes('hant')) return 'zh-TW';
      if (subtags.includes('hans')) return 'zh-CN';
      return subtags.some((part) => ['tw', 'hk', 'mo'].includes(part))
        ? 'zh-TW'
        : 'zh-CN';
    }
    const supported = languageOptions.find(
      (option) => option.value === primary,
    );
    if (supported) return supported.value;
  }
  return 'en';
}

export function readLanguagePreference(
  storage: Pick<Storage, 'getItem'>,
): LanguagePreference {
  try {
    return parseLanguagePreference(storage.getItem(languageStorageKey));
  } catch {
    return 'auto';
  }
}

export function saveLanguagePreference(
  storage: Pick<Storage, 'setItem'>,
  preference: LanguagePreference,
) {
  try {
    storage.setItem(languageStorageKey, preference);
  } catch {
    // The language switch still works when browser storage is unavailable.
  }
}
