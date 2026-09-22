import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { formatNewsDate } from '@/lib/news';
import { getNewsStories } from '@/lib/localization';
import { copy } from '@/lib/copy';
import type { Language } from '@/lib/language';
import { reportCorrectionUrl, suggestStoryUrl } from '@/lib/community';

export function NewsSection({ language }: { language: Language }) {
  const t = copy[language];
  const newsStories = getNewsStories(language);
  return (
    <section id="news" className="news" aria-labelledby="news-heading">
      <p className="eyebrow">{t.newsKicker}</p>
      <h2 id="news-heading">{t.newsTitle}</h2>
      <p className="news-intro">{t.newsIntro}</p>
      <div className="news-list">
        {newsStories.map((story) => (
          <article
            className="news-card"
            id={story.id}
            key={story.id}
            aria-labelledby={`${story.id}-heading`}
          >
            <div className="news-meta">
              <span>{story.topic}</span>
              <time dateTime={story.eventDate}>
                {formatNewsDate(story.eventDate, language)}
              </time>
            </div>
            <h3 id={`${story.id}-heading`}>
              <a href={`#${story.id}`}>{story.title}</a>
            </h3>
            <p className="news-summary">{story.summary}</p>
            <span className="news-status">{story.status}</span>
            <details className="news-context">
              <summary aria-label={t.contextFor(story.title)}>
                {t.readContext}
                <span>{t.sourceCount(story.sources.length)}</span>
                <ChevronDown size={17} aria-hidden="true" />
              </summary>
              <div className="news-context-body">
                {story.context.map((item) => (
                  <div className="news-context-item" key={item.label}>
                    <h4>{item.label}</h4>
                    <p>
                      {item.text}{' '}
                      {item.sources.map((id) => {
                        const index = story.sources.findIndex(
                          (source) => source.id === id,
                        );
                        const source = story.sources[index];
                        return (
                          <a
                            className="news-citation"
                            href={source.url}
                            key={id}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t.sourceLabel(index + 1, source.label)}
                          >
                            [{index + 1}]
                          </a>
                        );
                      })}
                    </p>
                  </div>
                ))}
                <aside className="news-take" aria-label={t.editorialView}>
                  <h4>{t.ourTake}</h4>
                  <p>{story.ourTake}</p>
                </aside>
                <h4>{t.sources}</h4>
                <ol className="news-sources">
                  {story.sources.map((source) => (
                    <li key={source.id}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {source.label}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                      <span>
                        {t.sourceKinds[source.kind]}
                        {source.publishedAt && (
                          <>
                            {' '}
                            ·{' '}
                            <time dateTime={source.publishedAt}>
                              {formatNewsDate(source.publishedAt, language)}
                            </time>
                          </>
                        )}
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="news-reviewed">
                  {t.checked}{' '}
                  <time dateTime={story.reviewedAt}>
                    {formatNewsDate(story.reviewedAt, language)}
                  </time>{' '}
                  {t.datedBrief}
                </p>
                <a
                  className="action-link"
                  href={reportCorrectionUrl(story.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.newsCorrection(story.title)}
                >
                  {t.correction}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </details>
          </article>
        ))}
      </div>
      <div className="news-contribute">
        <a
          className="action-link"
          href={suggestStoryUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.bringStory}
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <p className="submission-note">{t.newsSubmission}</p>
      </div>
    </section>
  );
}
