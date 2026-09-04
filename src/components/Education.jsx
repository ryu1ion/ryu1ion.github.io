import { education } from '../data/education';
import '../css/All.css';

export default function Education() {
  return (
    <div className="card" id="education" style={{ marginTop: '1rem' }}>
      <div className="card-title">Education</div>
      <div className="education-list">
        {education.map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h3 className="education-university">{item.university}</h3>
              <div className="education-period">
                {item.period}
                <div className="education-location">{item.location}</div>
              </div>
            </div>

            <div className="education-details">
              <p className="education-degree">
                {item.degree}
                {item.college && `, ${item.college}`}
                {item.gpa && (
                  <span className="education-gpa">, GPA: <strong>{item.gpa}.</strong></span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
