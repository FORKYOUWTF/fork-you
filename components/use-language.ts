'use client';

import { useEffect, useState } from 'react';
import {
  type Language,
  type LanguagePreference,
  languageStorageKey,
  readLanguagePreference,
  resolveLanguage,
  saveLanguagePreference,
} from '@/lib/language';
import { copy } from '@/lib/copy';

// Accessing localStorage itself can throw in restricted browser contexts.
const storage = {
  getItem: (key: string) => window.localStorage.getItem(key),
  setItem: (key: string, value: string) =>
    window.localStorage.setItem(key, value),
};
const browserLanguages = () =>
  navigator.languages?.length ? navigator.languages : [navigator.language];

export function useLanguage() {
  // Keep the server export and first client render identical for hydration.
  const [language, setLanguage] = useState<Language>('en');
  const [preference, setPreference] = useState<LanguagePreference>('auto');

  useEffect(() => {
    const sync = () => {
      const saved = readLanguagePreference(storage);
      setPreference(saved);
      setLanguage(resolveLanguage(saved, browserLanguages()));
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key === null || event.key === languageStorageKey) sync();
    };
    sync();
    window.addEventListener('storage', onStorage);
    window.addEventListener('languagechange', sync);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('languagechange', sync);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy[language].pageTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', copy[language].pageDescription);
  }, [language]);

  function chooseLanguage(next: LanguagePreference) {
    setPreference(next);
    setLanguage(resolveLanguage(next, browserLanguages()));
    saveLanguagePreference(storage, next);
  }

  return { language, preference, chooseLanguage };
}
