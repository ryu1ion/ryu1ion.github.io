import { FaGithub } from 'react-icons/fa';
import { FaGoogleScholar } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import avatar from '../assets/avatar.jpg';
import { profile } from '../data/profile';
import '../css/Hero.css';

export default function Hero() {
  const links = [
    { label: 'Email', icon: <MdEmail />, url: profile.links.email },
    { label: 'GitHub', icon: <FaGithub />, url: profile.links.github },
    { label: 'Google Scholar', icon: <FaGoogleScholar />, url: profile.links.scholar },
  ];

  return (
    <section className="hero-grid" id="home">
      <div className="hero-left">
        <div className="profile-frame">
          <img src={avatar} alt="Tianhao Chen's cat profile avatar" className="profile-pic" />
          <span className="profile-sparkle" aria-hidden="true">✦</span>
        </div>
        <div className="hero-meta">
          <h1 className="meta-name">{profile.name}</h1>
          <div className="meta-title">{profile.title}</div>
          <div className="meta-affiliation">{profile.affiliation}</div>
          <div className="meta-description" aria-label="Research interests">
            <div>🧠 Multimodal Large Language Models</div>
            <div>⚡ Reasoning &amp; Inference Efficiency</div>
            <div>🤖 Multi-Agent Collaboration</div>
          </div>
          <div className="meta-link">
            <a className="meta-linkitem" href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV / Resume</a>
          </div>
          <div className="contact-small">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target={item.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="icon-link"
                aria-label={item.label}
                title={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
          <div className="small-text">Last updated: September 2026</div>
        </div>
      </div>
    </section>
  );
}
