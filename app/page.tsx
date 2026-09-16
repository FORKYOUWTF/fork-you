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
  organizations,
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
import {
  repositoryUrl,
  suggestProjectUrl,
  reportCorrectionUrl,
} from '@/lib/community';

function OrganizationCard({
  organization: org,
  index,
  intent,
}: {
  organization: Organization;
  index: number;
  intent: Intent;
}) {
  const primaryAction = getPrimaryAction(org, intent);
  return (
    <article className="org-card">
      <div className="card-top">
        <span className="index">{String(index + 1).padStart(2, '0')}</span>
        <span className="org-type">
          {categories.find((c) => c.value === org.category)?.singular}
        </span>
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
            aria-label={`Why ${org.name} is listed`}
          >
            Why them? <ArrowRight size={15} aria-hidden="true" />
          </SheetTrigger>
          <SheetContent className="detail-sheet">
            <SheetHeader>
              <span className="eyebrow">THE RECEIPTS</span>
              <SheetTitle className="detail-title">{org.name}</SheetTitle>
              <SheetDescription className="detail-description">
                {org.description}
              </SheetDescription>
            </SheetHeader>
            <div className="detail-body">
              <section>
                <h3>Why we picked them</h3>
                <p>{org.reason}</p>
                <span className="editorial-label">
                  Our editorial assessment
                </span>
              </section>
              <section>
                <h3>How it is organized</h3>
                <p>{org.governance}</p>
              </section>
              <section>
                <h3>Your way in</h3>
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
                <h3>Read the sources</h3>
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
                <p className="source-date">
                  Sources reviewed {org.reviewedAt}. Opportunities can change.
                </p>
              </section>
              <p className="detail-note">
                A listing is a place to investigate, not a certification of an
                employer or an endorsement of our manifesto by this
                organization.
              </p>
              <a
                className="action-link correction-link"
                href={reportCorrectionUrl(org.name)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Report a correction for ${org.name} on GitHub`}
              >
                Report a correction
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <p className="submission-note">
                Public GitHub form. Sign-in required.
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </article>
  );
}

export default function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('all');
  const [intent, setIntent] = useState<Intent>('all');
  const results = useMemo(
    () => filterOrganizations(organizations, { query, category, intent }),
    [query, category, intent],
  );
  const currentFilters = useRef({ query, category, intent });
  useEffect(() => {
    currentFilters.current = { query, category, intent };
  }, [query, category, intent]);
  useEffect(
    () =>
      registerDirectoryTools({
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
        Skip to directory
      </a>
      <header id="top" className="site-header">
        <a className="wordmark" href="#top" aria-label="FORK YOU home">
          <GitFork size={27} strokeWidth={2.6} aria-hidden="true" />
          FORK YOU<span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#news">News</a>
          <a href="#manifesto">Why we’re here</a>
          <a href="#directory">Find your people</a>
          <a href="#contribute">Help build the list</a>
        </nav>
      </header>
      <main>
        <section className="intro" aria-labelledby="headline">
          <p className="campaign-kicker">THE FUTURE IS STILL UP FOR GRABS</p>
          <h1 id="headline">
            They want to eat everything.
            <br />
            <span>Fork the future.</span>
          </h1>
          <p className="campaign-intro">
            An open future needs people to build it. Find an open-source
            project, a company building in the open, or a public-interest
            organization worth your skills.
          </p>
          <a className="jump-link" href="#directory">
            {organizations.length} places to start{' '}
            <ArrowDown size={17} aria-hidden="true" />
          </a>
        </section>
        <NewsSection />
        <section
          className="manifesto"
          id="manifesto"
          aria-labelledby="manifesto-heading"
        >
          <h2 id="manifesto-heading">What are we worried about?</h2>
          <p>
            Assume frontier AI labs will try to eat everything: the tools we
            use, the work we do, and the attention we have left. What happens
            when a handful of companies becomes the way into everything else?
          </p>
          <p>
            That is our starting assumption. The future is still something
            people can shape. We want tools we can inspect, communities that
            have a say, and work we can take with us when we leave.
          </p>
          <blockquote>Open code. Shared power. Actual people.</blockquote>
          <h2>Why “FORK YOU”?</h2>
          <p>
            In software, a fork takes shared code in a new direction. This is an
            invitation to do the same with the future. Write code. Design
            something useful. Translate a guide. Defend someone’s rights. Help
            keep an alternative alive.
          </p>
        </section>
        <section className="participate" aria-labelledby="participate-heading">
          <h2 id="participate-heading">What can I do?</h2>
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
                Contribute to an open project.
              </a>{' '}
              Code, documentation, design, translation, and more.
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
                Find paid work you want to stand behind.
              </a>{' '}
              Explore companies, co-ops, and nonprofits.
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
                Give your time to the public interest.
              </a>{' '}
              Help a community or a cause that matters to you.
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
              <h2 id="directory-heading">Find your people.</h2>
            </div>
            <span className="directory-total">
              {organizations.length} places to start
              <span>Curated, with sources.</span>
            </span>
          </div>
          <div className="search-row">
            <label className="search-box">
              <Search size={21} aria-hidden="true" />
              <span className="sr-only">
                Search organizations, causes, or skills
              </span>
              <input
                type="search"
                maxLength={300}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a cause, skill, or name…"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
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
                aria-label="How you want to get involved"
              >
                <SelectValue>
                  {intents.find((i) => i.value === intent)?.label}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {intents.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
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
                aria-label="Organization type"
              >
                {categories.map((item) => (
                  <TabsTrigger key={item.value} value={item.value}>
                    {item.label}
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
                {results.length} {results.length === 1 ? 'match' : 'matches'}
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
                    />
                  ))}
                </div>
                {results.length === 0 && (
                  <div className="empty-state">
                    <Search size={30} aria-hidden="true" />
                    <h3>No people found. Yet.</h3>
                    <p>
                      Try a broader search or a different way to get involved.
                    </p>
                    <button onClick={reset}>
                      Clear all filters{' '}
                      <ArrowRight size={17} aria-hidden="true" />
                    </button>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
          <p className="directory-note">
            Careers links lead to official careers pages. They do not mean an
            organization is hiring today. Contribution and volunteer routes may
            be unpaid.
          </p>
        </section>
        <section
          className="community"
          id="contribute"
          aria-labelledby="community-heading"
        >
          <h2 id="community-heading">The list needs your people.</h2>
          <p>
            Know a project we missed? Spotted something out of date? Help make
            this directory more useful, with sources to back it up.
          </p>
          <div className="community-actions">
            <a
              className="jump-link"
              href={suggestProjectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Suggest a project <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              className="action-link"
              href={reportCorrectionUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Report a correction <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <p className="submission-note">
            Opens a public GitHub form. A GitHub account is required. We review
            suggestions and corrections before updating the list.
          </p>
        </section>
        <section
          className="standards"
          id="standards"
          aria-labelledby="standards-heading"
        >
          <div>
            <h2 id="standards-heading">Who gets on the list?</h2>
          </div>
          <ol>
            <li>
              <span>01</span>
              <div>
                <h3>A reason to be here</h3>
                <p>
                  Open-source work, shared ownership, or a documented
                  public-interest mission. We explain the connection.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>A real way in</h3>
                <p>
                  An official contribution guide, careers page, or volunteer
                  route. Paid work and unpaid participation stay clearly
                  labeled.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Receipts, not righteousness</h3>
                <p>
                  Sources and review dates. No invented jobs, independence
                  scores, or claims that an organization is “AI-proof.”
                </p>
              </div>
            </li>
          </ol>
        </section>
        <section className="closing-note" aria-labelledby="open-heading">
          <h2 id="open-heading">Does “open” mean perfect?</h2>
          <p>
            No. Open source can pay the bills. Nonprofits can make bad
            decisions. Read the governance notes and sources, ask questions, and
            decide for yourself. A listing does not mean an organization
            endorses FORK YOU.
          </p>
          <p className="closing-slogan">The future isn’t takeout.</p>
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
          <GitFork size={17} aria-hidden="true" /> Fork this site
        </a>
        <a className="footer-link" href="#directory">
          Back to the directory <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}
