import { organizations, type Organization } from './directory.ts';
import { newsStories, type NewsStory } from './news.ts';
import {
  organizationTranslations,
  actionLabels,
  sourceLabels,
} from './directory-zh.ts';
import { newsTranslations } from './news-zh.ts';
import type { Language } from './language.ts';

export function getOrganizations(language: Language): Organization[] {
  return organizations.map((org) => {
    const translation = organizationTranslations[org.id];
    if (!translation) return org;
    // Both languages remain searchable, even after changing the display language.
    const searchTerms = [
      org.name,
      org.description,
      org.governance,
      org.participation,
      ...org.tags,
      translation.name,
      translation.description,
      translation.governance,
      translation.participation,
      ...translation.tags,
    ];
    if (language === 'en') return { ...org, searchTerms };
    return {
      ...org,
      ...translation,
      searchTerms,
      actions: org.actions.map((a) => ({
        ...a,
        label: actionLabels[a.label] ?? a.label,
      })),
      sources: org.sources.map((s) => ({
        ...s,
        label: sourceLabels[s.label] ?? s.label,
      })),
    };
  });
}

export function getNewsStories(language: Language): NewsStory[] {
  if (language === 'en') return newsStories;
  return newsStories.map((story) => {
    const translation = newsTranslations[story.id];
    if (!translation) return story;
    return {
      ...story,
      title: translation.title,
      topic: translation.topic,
      summary: translation.summary,
      status: translation.status,
      ourTake: translation.ourTake,
      context: story.context.map((item) => ({
        ...item,
        ...translation.context[item.label],
      })),
      sources: story.sources.map((s) => ({
        ...s,
        label: translation.sourceLabels[s.id] ?? s.label,
      })),
    };
  });
}
