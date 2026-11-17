import { useState } from 'react';
import { publications } from '../data/publications';
import '../css/Publications.css';

const MY_NAME = 'Tianhao Chen';

export default function Publications() {
  const [authorshipFilter, setAuthorshipFilter] = useState('all');

  const filteredPublications = authorshipFilter === 'first-author'
    ? publications.filter((paper) => paper.authors.some((author, index) => (
      author.name === MY_NAME && (index === 0 || author.role === 'first')
    )))
    : publications;

  return (
    <div className="publications" id="publications" style={{ marginTop: '1rem' }}>
      <div className="publications-select">
        <div className="card-title">Publications</div>
        <select
          className="tag-select-filter"
          aria-label="Filter publications by authorship"
          value={authorshipFilter}
          onChange={(event) => setAuthorshipFilter(event.target.value)}
        >
          <option value="all">All</option>
          <option value="first-author">First Author</option>
        </select>
      </div>

      <div className="publications-info">
        <div className="publications-info-small">
          * indicates equal contribution, and † denotes corresponding authors.
        </div>
      </div>

      <div className="publications-list">
        {filteredPublications.map((paper) => (
          <div key={paper.id} className="publication-card" id={paper.id}>
            <img
              src={paper.image}
              alt={paper.imageAlt ?? paper.title}
              className="publication-image"
            />

            <div className="publication-content">
              <div className="publication-venue">
                {paper.venues.map((venue, venueIndex) => (
                  <span
                    key={venueIndex}
                    className={`venue-tag ${venue.type}`}
                  >
                    {venue.name}
                  </span>
                ))}
              </div>

              <div className="publication-title-wrapper">
                <div className="publication-title">{paper.title}</div>
                <div className="abstract-popup">{paper.abstract}</div>
              </div>

              <div className="publication-authors">
                {paper.authors.map((author, index) => {
                  let symbol = '';
                  if (author.role === 'first') symbol = '*';
                  if (author.role === 'second') symbol = '**';
                  if (author.role === 'corresponding') symbol = '†';

                  const isMe = author.name === MY_NAME;
                  const authorName = isMe ? (
                    <strong style={{ color: 'var(--primary)', fontWeight: 900 }}>
                      {author.name + symbol}
                    </strong>
                  ) : (
                    author.name + symbol
                  );

                  return (
                    <span key={index}>
                      {author.link ? (
                        <a
                          href={author.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="author-link"
                        >
                          {authorName}
                        </a>
                      ) : (
                        authorName
                      )}
                      {index < paper.authors.length - 1 && ', '}
                    </span>
                  );
                })}
              </div>

              <div className="publication-links">
                {paper.links.pdf && (
                  <a href={paper.links.pdf} target="_blank" rel="noopener noreferrer">PDF</a>
                )}
                {paper.links.arxiv && (
                  <a href={paper.links.arxiv} target="_blank" rel="noopener noreferrer">arXiv</a>
                )}
                {paper.links.project && (
                  <a href={paper.links.project} target="_blank" rel="noopener noreferrer">Project</a>
                )}
                {paper.links.code && (
                  <a href={paper.links.code} target="_blank" rel="noopener noreferrer">Code</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
