import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { newsStories, formatNewsDate } from '@/lib/news';
import { reportCorrectionUrl, suggestStoryUrl } from '@/lib/community';

export function NewsSection() {
  return (
    <section id="news" className="news" aria-labelledby="news-heading">
      <p className="eyebrow">NEWS / POWER / ACCOUNTABILITY</p>
      <h2 id="news-heading">News, with receipts.</h2>
      <p className="news-intro">
        Frontier AI, money, and who gets a say. Read what happened, what’s
        disputed, and why we’re paying attention.
      </p>
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
                {formatNewsDate(story.eventDate)}
              </time>
            </div>
            <h3 id={`${story.id}-heading`}>
              <a href={`#${story.id}`}>{story.title}</a>
            </h3>
            <p className="news-summary">{story.summary}</p>
            <span className="news-status">{story.status}</span>
            <details className="news-context">
              <summary aria-label={`Read the context: ${story.title}`}>
                Read the context
                <span>{story.sources.length} sources</span>
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
                            aria-label={`Source ${index + 1}: ${source.label}`}
                          >
                            [{index + 1}]
                          </a>
                        );
                      })}
                    </p>
                  </div>
                ))}
                <aside className="news-take" aria-label="Our editorial view">
                  <h4>Our take · Opinion</h4>
                  <p>{story.ourTake}</p>
                </aside>
                <h4>Read the sources</h4>
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
                        {source.kind}
                        {source.publishedAt && (
                          <>
                            {' '}
                            ·{' '}
                            <time dateTime={source.publishedAt}>
                              {formatNewsDate(source.publishedAt)}
                            </time>
                          </>
                        )}
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="news-reviewed">
                  Sources checked{' '}
                  <time dateTime={story.reviewedAt}>
                    {formatNewsDate(story.reviewedAt)}
                  </time>{' '}
                  (UTC). This is a dated brief; later developments may change
                  the picture.
                </p>
                <a
                  className="action-link"
                  href={reportCorrectionUrl(story.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Report a correction: ${story.title}`}
                >
                  Report a correction
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
          Bring a story. Bring sources.
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <p className="submission-note">
          Suggestions and corrections open public GitHub forms and require
          sign-in. We review sources before publishing or updating a brief.
        </p>
      </div>
    </section>
  );
}
