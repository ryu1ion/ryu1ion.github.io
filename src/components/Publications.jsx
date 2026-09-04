import { useState } from 'react';
import { publications } from '../data/publications';
import '../css/Publications.css';

const MY_NAME = 'Tianhao Chen';

export default function Publications() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const topics = [...new Set(publications.map((paper) => paper.topic))];
  const visiblePublications = selectedTopic
    ? publications.filter((paper) => paper.topic === selectedTopic)
    : publications;

  return (
    <section className="publications" id="publications" aria-labelledby="publications-heading">
      <div className="publications-select">
        <h2 className="card-title" id="publications-heading">Publications</h2>
        <select
          className="tag-select-filter"
          value={selectedTopic}
          onChange={(event) => setSelectedTopic(event.target.value)}
          aria-label="Filter publications by topic"
        >
          <option value="">All topics</option>
          {topics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
        </select>
      </div>
      <p className="publications-info-small">Publication status and authorship follow the latest CV. Tianhao Chen is highlighted.</p>

      <div className="publications-list">
        {visiblePublications.map((paper) => (
          <article key={paper.id} className="publication-card" id={paper.id}>
            <img src={paper.image} alt={`Abstract visual for ${paper.title}`} className="publication-image" />
            <div className="publication-content">
              <div className="publication-venue">
                <span className={`venue-tag ${paper.venueType}`}>{paper.venue}</span>
              </div>
              <h3 className="publication-title">{paper.title}</h3>
              <p className="publication-authors">
                {paper.authors.map((author, index) => (
                  <span key={author}>
                    {author === MY_NAME ? <strong>{author}</strong> : author}
                    {index < paper.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
              <p className="publication-summary">{paper.abstract}</p>
              <div className="publication-tags">
                {paper.tags.map((tag) => <span key={tag} className="tag-item-show">#{tag}</span>)}
              </div>
              {paper.links.length > 0 && (
                <div className="publication-links">
                  {paper.links.map((link) => (
                    <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
