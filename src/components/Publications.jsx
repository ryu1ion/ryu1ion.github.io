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
  'Multi-Agent Systems': '#ff7f96',
  'Collaborative Driving': '#ffb07f',
  'Latent Communication': '#ffcd49',
  'Efficient Multimodal AI': '#f3dc12',
  'KV Cache Compression': '#b8cc7d',
  'Visual Attention': '#7dcd6f',
  'Video Generation': '#6fcda6',
  'Autoregressive Models': '#87dcdc',
  'Interactive AI': '#7fcaff',
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
          * indicates equal contribution, and † denotes the advising professor.
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
                  if (author.role === 'advisor') symbol = '†';

                  const isMe = author.name === MY_NAME;
                  const authorName = isMe ? (
                    <strong style={{ color: '#F42E7A', fontWeight: 900 }}>
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
                    <span key={index} className="tag-item-show" style={{ color: '#888' }}>
                      #{tag}
                    </span>
                  );
                })}
              </div>

              <div className="publication-links">
                {paper.links.pdf && <a href={paper.links.pdf}>PDF</a>}
                {paper.links.arxiv && <a href={paper.links.arxiv}>arXiv</a>}
                {paper.links.github && <a href={paper.links.github}>Github</a>}
                {paper.links.web && <a href={paper.links.web}>Website</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
