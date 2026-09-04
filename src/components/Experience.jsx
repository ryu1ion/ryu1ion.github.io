import { experiences } from '../data/experience';
import '../css/Experience.css';

export default function Experience() {
  return (
    <section className="card" id="experience" aria-labelledby="experience-heading">
      <h2 className="card-title" id="experience-heading">Experience</h2>
      <div className="timeline-container">
        {experiences.map((experience) => (
          <article className="timeline-item" key={`${experience.organization}-${experience.period}`}>
            <div className="timeline-label" aria-hidden="true">
              <div className="exp-type work">{experience.type}</div>
              <div className="timeline-period-label">{experience.period.replace(' – ', '\n–\n')}</div>
            </div>
            <div className="timeline-content">
              <div className="org-logo-container">
                <img src={experience.logo} alt="" className="org-logo" />
              </div>
              <div className="exp-container">
                <div className="timeline-header">
                  <div className="exp-organization">
                    <a className="exp-organization-name" href={experience.link} target="_blank" rel="noopener noreferrer">
                      {experience.organization}
                    </a>
                    <div className="exp-role">{experience.role}</div>
                  </div>
                  <div className="exp-period">{experience.period}</div>
                </div>
                <ul className="exp-details">
                  {experience.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
                <div className="experience-tags">
                  {experience.tags.map((tag) => <span key={tag} className="role-tag">#{tag}</span>)}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
