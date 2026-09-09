import { useState } from 'react';
import { publications } from '../data/publications';
import '../css/Publications.css';

const MY_NAME = 'Tianhao Chen';

const tagColors = {
  conference: 'conference',
  journal: 'journal',
  workshop: 'workshop',
  submission: 'submission',
  wip: 'wip',
  project: 'project',
  exhibition: 'exhibition',
};

const tagStyleMap = {
  'In Submission': '#cccccc',
  'Multi-Agent Systems': '#F47DA5',
  'Collaborative Driving': '#7FD2CC',
  'Latent Communication': '#A8E2DE',
  'Efficient Multimodal AI': '#27A7A1',
  'KV Cache Compression': '#65D4DF',
  'Visual Attention': '#51C2E0',
  'Video Generation': '#5AA7E8',
  'Autoregressive Models': '#928DE2',
  'Interactive AI': '#B48CDC',
};

export default function Publications() {
  const [selectedTag, setSelectedTag] = useState('');

  const filteredPublications = selectedTag
    ? publications.filter((paper) => paper.tags.includes(selectedTag))
    : publications;

  const handleTagClick = (tag) => {
    setSelectedTag(selectedTag === tag ? '' : tag);
  };

  const handleSelectChange = (event) => {
    const newTag = event.target.value;
    handleTagClick(newTag);
  };

  return (
    <div className="publications" id="publications" style={{ marginTop: '1rem' }}>
      <div className="publications-select">
        <div className="card-title">Publications</div>
        <select
          className="tag-select-filter"
          value={selectedTag}
          onChange={handleSelectChange}
          style={{ background: `${tagColors[selectedTag]}` }}
        >
          <option value="">All</option>
          {Object.keys(tagStyleMap).map((tag) => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>

      <div className="publications-info">
        <div className="publications-info-small">
          * indicates equal contribution, and † denotes corresponding authors.
        </div>
      </div>

      <div className="publications-list">
        {filteredPublications.map((paper, index) => (
          <div key={index} className="publication-card" id={paper.id}>
            <img
              src={paper.image}
              alt={paper.title}
              className="publication-image"
            />

            <div className="publication-content">
              <div className="publication-venue">
                {paper.venues.map((venue, venueIndex) => (
                  <span
                    key={venueIndex}
                    className={`venue-tag ${tagColors[venue.type]}`}
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

              <div className="publication-tags">
                {paper.tags.map((tag, index) => {
                  if (tag === 'Selected') {
                    return (
                      <span key={index} className="tag-item-show rainbow-tag-all">
                        #{tag}
                      </span>
                    );
                  }
                  if (tag === 'In Submission') {
                    return (
                      <span key={index} className="tag-item-show submission-tag-all">
                        #{tag}
                      </span>
                    );
                  }
                  return (
                    <span key={index} className="tag-item-show" style={{ color: 'var(--text-secondary)' }}>
                      #{tag}
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
