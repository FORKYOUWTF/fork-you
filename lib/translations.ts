import * as chineseDirectory from './directory-zh.ts';
import { newsTranslations } from './news-zh.ts';
import * as traditional from './locales/zh-TW.ts';
import * as korean from './locales/ko.ts';
import * as japanese from './locales/ja.ts';
import * as spanish from './locales/es.ts';
import * as french from './locales/fr.ts';
import * as italian from './locales/it.ts';
import type { OrganizationTranslation } from './directory-zh.ts';
import type { NewsTranslation } from './news-zh.ts';
import type { Language } from './language.ts';

export type TranslationBundle = {
  organizationTranslations: Record<string, OrganizationTranslation>;
  actionLabels: Record<string, string>;
  sourceLabels: Record<string, string>;
  newsTranslations: Record<string, NewsTranslation>;
};

export const translations: Record<
  Exclude<Language, 'en'>,
  TranslationBundle
> = {
  'zh-CN': { ...chineseDirectory, newsTranslations },
  'zh-TW': traditional,
  ko: korean,
  ja: japanese,
  es: spanish,
  fr: french,
  it: italian,
};
