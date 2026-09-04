import { awards } from '../data/awards';
import '../css/All.css';

export default function Awards() {
  return (
    <section className="card" id="awards" aria-labelledby="awards-heading">
      <h2 className="card-title" id="awards-heading">Selected Awards</h2>
      <div className="awards-list">
        {awards.map((award) => (
          <div key={`${award.year}-${award.title}`} className="award-item">
            <span className="award-icon" aria-hidden="true">✦ </span>
            <span className="award-text">
              [{award.year}]{' '}
              {award.link ? (
                <a href={award.link} target="_blank" rel="noopener noreferrer">{award.title}</a>
              ) : award.title}
              {' '}<span className="award-highlight">({award.detail})</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
