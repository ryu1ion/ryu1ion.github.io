import { useState } from 'react';
import { experiences } from '../data/experience';
import '../css/Internship.css';

export default function Internship() {
  const [selectedTag, setSelectedTag] = useState('Work');

  const handleTagClick = (tag) => {
    setSelectedTag(selectedTag === tag ? '' : tag);
  };

  const handleSelectChange = (event) => {
    const newTag = event.target.value;
    handleTagClick(newTag);
  };

  const filteredExperiences = selectedTag
    ? experiences.filter((experience) => experience.type === selectedTag)
    : experiences;

  return (
    <div className="card" id="internship" style={{ marginTop: '1rem' }}>
      <div className="publications-select">
        <div className="card-title">Internship</div>
        <select
          className="tag-select-filter"
          value={selectedTag}
          onChange={handleSelectChange}
        >
          <option value="">All</option>
          <option value="Work">Work</option>
          <option value="Research">Research</option>
        </select>
      </div>

      <div className="timeline-container">
        {filteredExperiences.map((experience, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-label">
              <div className={`exp-type ${experience.type.toLowerCase()}`}>
                {experience.type}
              </div>
              <div className="timeline-period-label">
                {experience.period.replace(' - ', '\n–\n')}
              </div>
            </div>

            <div className="timeline-content">
              <div className="org-logo-container">
                <img
                  src={experience.organization.logo}
                  alt={`${experience.organization.name} Logo`}
                  className="org-logo"
                />
              </div>

              <div className="exp-container">
                <div className="timeline-header">
                  <div className="exp-organization">
                    <a
                      className="exp-organization-name"
                      href={experience.organization.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {experience.organization.name}
                    </a>
                    <div className="exp-role">{experience.role}</div>
                  </div>

                  <div className="exp-period">
                    <div>{experience.period}</div>
                    <div className="exp-location">{experience.location}</div>
                  </div>
                </div>

                {experience.details && (
                  <ul className="exp-details">
                    {experience.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                )}

                {experience.projects && (
                  <ul className="exp-projects">
                    {experience.projects.map((project, projectIndex) => (
                      <li key={projectIndex}>
                        <div className="project-roles">
                          {project.name}
                          {project.roles.map((role, roleIndex) => (
                            <span key={roleIndex} className="role-tag">{role}</span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
