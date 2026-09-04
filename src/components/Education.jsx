import { education } from '../data/education';
import '../css/All.css';

export default function Education() {
  return (
    <section className="card" id="education" aria-labelledby="education-heading">
      <h2 className="card-title" id="education-heading">Education</h2>
      <div className="education-list">
        {education.map((item) => (
          <article key={`${item.shortName}-${item.period}`} className="education-item">
            <div className={`education-logo-wrap ${item.logoClass ?? ''}`}>
              <img src={item.logo} alt={`${item.shortName} logo`} className="education-logo" />
            </div>
            <div className="education-copy">
              <div className="education-header">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <h3 className="education-university">{item.university}</h3>
                </a>
                <div className="education-period">
                  {item.period}
                  <span className="education-location">{item.location}</span>
                </div>
              </div>
              <div className="education-details">
                <p className="education-degree">{item.degree}{item.college ? `, ${item.college}` : ''}</p>
                {item.details.length > 0 && (
                  <ul className="education-highlights">
                    {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
