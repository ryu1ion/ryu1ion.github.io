import { useState } from 'react';
import '../css/Header.css';
import logo from '../assets/logo.svg';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'news', label: 'News' },
  { id: 'publications', label: 'Publications' },
  { id: 'internship', label: 'Internship' },
  { id: 'education', label: 'Education' },
  { id: 'awards', label: 'Awards' },
  { id: 'more', label: 'More' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <header className={`header-wrapper ${menuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <div className="header-name">
          <img src={logo} alt="logo" style={{ width: '36px', marginRight: 12 }} />
          <div className="name-main">T<span className="fancy-i">i</span>anhao Chen</div>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="bar bar1" />
          <span className="bar bar2" />
          <span className="bar bar3" />
        </button>

        <nav className={`header-nav ${menuOpen ? 'show' : ''}`}>
          {NAV.map((item) => (
            <button
              key={item.id}
              className="nav-item"
              onClick={() => handleClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
