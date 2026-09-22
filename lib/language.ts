export type Language = 'en' | 'zh-CN';
export type LanguagePreference = Language | 'auto';
export const languageStorageKey = 'fork-you-language';

export function parseLanguagePreference(value: unknown): LanguagePreference {
  return value === 'en' || value === 'zh-CN' ? value : 'auto';
}

export function resolveLanguage(
  preference: LanguagePreference,
  browserLanguages: readonly string[],
): Language {
  if (preference !== 'auto') return preference;
  for (const tag of browserLanguages) {
    const primary = tag.toLowerCase().split(/[-_]/)[0];
    if (primary === 'zh') return 'zh-CN';
    if (primary === 'en') return 'en';
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
