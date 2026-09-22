'use client';

import { useMemo, useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  GitFork,
  Search,
  X,
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  filterOrganizations,
  getPrimaryAction,
  categories,
  intents,
  type Category,
  type Intent,
  type Organization,
} from '@/lib/directory';
import { registerDirectoryTools } from '@/lib/webmcp';
import { NewsSection } from '@/components/news-section';
import { useLanguage } from '@/components/use-language';
import { copy } from '@/lib/copy';
import { getOrganizations } from '@/lib/localization';
import {
  languageOptions,
  parseLanguagePreference,
  type Language,
} from '@/lib/language';
import {
  repositoryUrl,
  suggestProjectUrl,
  reportCorrectionUrl,
} from '@/lib/community';

function OrganizationCard({
  organization: org,
  index,
  intent,
  language,
}: {
  organization: Organization;
  index: number;
  intent: Intent;
  language: Language;
}) {
  const t = copy[language];
  const primaryAction = getPrimaryAction(org, intent);
  return (
    <article className="org-card">
      <div className="card-top">
        <span className="index">{String(index + 1).padStart(2, '0')}</span>
        <span className="org-type">{t.singular[org.category]}</span>
      </div>
      <h3>
        <span className="listing-mark" aria-hidden="true">
          +
        </span>
        {org.name}
      </h3>
      <p className="org-description">{org.description}</p>
      <div className="tags">
        {org.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="card-bottom">
        <a
          className="action-link"
          href={primaryAction.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {primaryAction.label}
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <Sheet>
          <SheetTrigger
            className="evidence-button"
            aria-label={t.whyListed(org.name)}
          >
            {t.whyButton} <ArrowRight size={15} aria-hidden="true" />
          </SheetTrigger>
          <SheetContent className="detail-sheet" closeLabel={t.close}>
            <SheetHeader>
              <span className="eyebrow">{t.receipts}</span>
              <SheetTitle className="detail-title">{org.name}</SheetTitle>
              <SheetDescription className="detail-description">
                {org.description}
              </SheetDescription>
            </SheetHeader>
            <div className="detail-body">
              <section>
                <h3>{t.whyPicked}</h3>
                <p>{org.reason}</p>
                <span className="editorial-label">{t.editorial}</span>
              </section>
              <section>
                <h3>{t.governance}</h3>
                <p>{org.governance}</p>
              </section>
              <section>
                <h3>{t.wayIn}</h3>
                <p>{org.participation}</p>
                <div className="detail-actions">
                  {org.actions.map((action) => (
                    <a
                      key={action.url}
                      href={action.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {action.label}
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </section>
              <section>
                <h3>{t.sources}</h3>
                <ul className="sources">
                  {org.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {source.label}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="source-date">{t.reviewed(org.reviewedAt)}</p>
              </section>
              <p className="detail-note">{t.detailNote}</p>
              <a
                className="action-link correction-link"
                href={reportCorrectionUrl(org.name)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.correctionFor(org.name)}
              >
                {t.correction}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <p className="submission-note">{t.publicForm}</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </article>
  );
}

export default function Home() {
  const { language, preference, chooseLanguage } = useLanguage();
  const t = copy[language];
  const organizations = useMemo(() => getOrganizations(language), [language]);
  const currentLanguage = useRef(language);
  useEffect(() => {
    currentLanguage.current = language;
  }, [language]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('all');
  const [intent, setIntent] = useState<Intent>('all');
  const results = useMemo(
    () => filterOrganizations(organizations, { query, category, intent }),
    [organizations, query, category, intent],
  );
  const currentFilters = useRef({ query, category, intent });
  useEffect(() => {
    currentFilters.current = { query, category, intent };
  }, [query, category, intent]);
  useEffect(
    () =>
      registerDirectoryTools({
        language: () => currentLanguage.current,
        read: () => currentFilters.current,
        apply: (filters) => {
          flushSync(() => {
            setQuery(filters.query);
            setCategory(filters.category);
            setIntent(filters.intent);
          });
          currentFilters.current = filters;
        },
      }),
    [],
  );
  function reset() {
    setQuery('');
    setCategory('all');
    setIntent('all');
  }
  return (
    <>
      <a className="skip-link" href="#directory">
        {t.skip}
      </a>
      <header id="top" className="site-header">
        <a className="wordmark" href="#top" aria-label={t.home}>
          <GitFork size={27} strokeWidth={2.6} aria-hidden="true" />
          FORK YOU<span className="wordmark-dot">.</span>
        </a>
        <div className="header-tools">
          <nav aria-label={t.navigation}>
            <a href="#news">{t.news}</a>
            <a href="#manifesto">{t.manifesto}</a>
            <a href="#directory">{t.directory}</a>
            <a href="#contribute">{t.contribute}</a>
          </nav>
          <label className="language-switch">
            <span className="sr-only">{t.language}</span>
            <select
              value={preference}
              onChange={(e) =>
                chooseLanguage(parseLanguagePreference(e.target.value))
              }
            >
              <option value="auto">{t.automatic}</option>
              {languageOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  lang={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </header>
      <main>
        <section className="intro" aria-labelledby="headline">
          <p className="campaign-kicker">{t.kicker}</p>
          <h1 id="headline">
            {t.headline}
            <br />
            <span>{t.headlineAccent}</span>
          </h1>
          <p className="campaign-intro">{t.intro}</p>
          <a className="jump-link" href="#directory">
            {t.places(organizations.length)}{' '}
            <ArrowDown size={17} aria-hidden="true" />
          </a>
        </section>
        <NewsSection language={language} />
        <section
          className="manifesto"
          id="manifesto"
          aria-labelledby="manifesto-heading"
        >
          <h2 id="manifesto-heading">{t.concernTitle}</h2>
          <p>{t.concern}</p>
          <p>{t.possibility}</p>
          <blockquote>{t.motto}</blockquote>
          <h2>{t.forkTitle}</h2>
          <p>{t.fork}</p>
        </section>
        <section className="participate" aria-labelledby="participate-heading">
          <h2 id="participate-heading">{t.participateTitle}</h2>
          <ol className="action-list">
            <li>
              <a
                href="#directory"
                onClick={() => {
                  setQuery('');
                  setCategory('all');
                  setIntent('contribute');
                }}
              >
                {t.projectAction}
              </a>{' '}
              {t.projectHelp}
            </li>
            <li>
              <a
                href="#directory"
                onClick={() => {
                  setQuery('');
                  setCategory('all');
                  setIntent('careers');
                }}
              >
                {t.careerAction}
              </a>{' '}
              {t.careerHelp}
            </li>
            <li>
              <a
                href="#directory"
                onClick={() => {
                  setQuery('');
                  setCategory('all');
                  setIntent('volunteer');
                }}
              >
                {t.volunteerAction}
              </a>{' '}
              {t.volunteerHelp}
            </li>
          </ol>
        </section>
        <section
          id="directory"
          className="directory"
          aria-labelledby="directory-heading"
        >
          <div className="directory-heading">
            <div>
              <h2 id="directory-heading">{t.directoryTitle}</h2>
            </div>
            <span className="directory-total">
              {t.places(organizations.length)}
              <span>{t.curated}</span>
            </span>
          </div>
          <div className="search-row">
            <label className="search-box">
              <Search size={21} aria-hidden="true" />
              <span className="sr-only">{t.search}</span>
              <input
                type="search"
                aria-label={t.search}
                maxLength={300}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label={t.clearSearch}
                >
                  <X size={18} aria-hidden="true" />
                </button>
              )}
            </label>
            <Select
              value={intent}
              onValueChange={(value) => setIntent((value ?? 'all') as Intent)}
            >
              <SelectTrigger
                className="intent-select"
                aria-label={t.involvement}
              >
                <SelectValue>{t.intents[intent]}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {intents.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {t.intents[item.value]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Tabs
            value={category}
            onValueChange={(value) => setCategory(value as Category)}
          >
            <div className="filter-row">
              <TabsList
                variant="line"
                className="category-tabs"
                aria-label={t.organizationType}
              >
                {categories.map((item) => (
                  <TabsTrigger key={item.value} value={item.value}>
                    {t.categories[item.value]}
                    <span>
                      {item.value === 'all'
                        ? organizations.length
                        : organizations.filter(
                            (org) => org.category === item.value,
                          ).length}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
              <output className="result-count" aria-live="polite">
                {t.matches(results.length)}
              </output>
            </div>
            {categories.map((item) => (
              <TabsContent key={item.value} value={item.value}>
                <div className="org-grid">
                  {results.map((org, index) => (
                    <OrganizationCard
                      key={org.id}
                      organization={org}
                      index={index}
                      intent={intent}
                      language={language}
                    />
                  ))}
                </div>
                {results.length === 0 && (
                  <div className="empty-state">
                    <Search size={30} aria-hidden="true" />
                    <h3>{t.emptyTitle}</h3>
                    <p>{t.emptyHelp}</p>
                    <button onClick={reset}>
                      {t.clearFilters}{' '}
                      <ArrowRight size={17} aria-hidden="true" />
                    </button>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
          <p className="directory-note">{t.directoryNote}</p>
        </section>
        <section
          className="community"
          id="contribute"
          aria-labelledby="community-heading"
        >
          <h2 id="community-heading">{t.communityTitle}</h2>
          <p>{t.community}</p>
          <div className="community-actions">
            <a
              className="jump-link"
              href={suggestProjectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.suggest} <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              className="action-link"
              href={reportCorrectionUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.correction} <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <p className="submission-note">{t.submission}</p>
        </section>
        <section
          className="standards"
          id="standards"
          aria-labelledby="standards-heading"
        >
          <div>
            <h2 id="standards-heading">{t.standardsTitle}</h2>
          </div>
          <ol>
            <li>
              <span>01</span>
              <div>
                <h3>{t.reasonTitle}</h3>
                <p>{t.reason}</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>{t.routeTitle}</h3>
                <p>{t.route}</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>{t.evidenceTitle}</h3>
                <p>{t.evidence}</p>
              </div>
            </li>
          </ol>
        </section>
        <section className="closing-note" aria-labelledby="open-heading">
          <h2 id="open-heading">{t.openTitle}</h2>
          <p>{t.open}</p>
          <p className="closing-slogan">{t.slogan}</p>
        </section>
      </main>
      <footer>
        <a className="wordmark" href="#top">
          FORK YOU<span className="wordmark-dot">.</span>
        </a>
        <a
          className="footer-link"
          href={repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitFork size={17} aria-hidden="true" /> {t.forkSite}
        </a>
        <a className="footer-link" href="#directory">
          {t.back} <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}
