import avatar from '../assets/avatar.jpg';
import '../css/Hero.css';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaGoogleScholar } from 'react-icons/fa6';
import { profile } from '../data/profile';

function Hero() {
  const links = [
    { label: 'Email', icon: <MdEmail />, url: profile.links.email },
    { label: 'GitHub', icon: <FaGithub />, url: profile.links.github },
    { label: 'Google Scholar', icon: <FaGoogleScholar />, url: profile.links.scholar },
  ];

  return (
    <div className="hero-grid">
      <div className="hero-left">
        <img
          src={avatar}
          alt="Profile"
          className="profile-pic"
        />
        <div className="hero-meta">
          <div className="meta-name">Tianhao Chen 陈天皓</div>
          M.S. Student in Computer Science
          <div className="meta-description">
            <div>🧠 Multimodal Large Language Models</div>
            <div>⚡ Reasoning &amp; Inference Efficiency</div>
            <div>🤖 Multi-Agent Collaboration</div>
          </div>
          <div className="meta-link">
            <a
              className="meta-linkitem"
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </div>
          <div className="contact-small">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
          <div className="small-text">Last Updated Date: 2026/09/05</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
