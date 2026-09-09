import { awards } from '../data/awards';
import '../css/All.css';

export default function SelectedAwards() {
  return (
    <div className="card" id="awards" style={{ marginTop: '1rem' }}>
      <div className="card-title">Selected Awards</div>
      <div className="awards-list">
        {awards.map((award, index) => (
          <div key={index} className="award-item">
            <span className="award-icon">✦ </span>
            <span className="award-text">
              [{award.year}] {award.title}{' '}
              <span className="award-highlight">({award.detail})</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
