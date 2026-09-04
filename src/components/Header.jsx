import { useEffect, useState } from 'react';
import { navigation } from '../data/profile';
import '../css/Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    let frame = 0;
    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const current = [...sections]
          .reverse()
          .find((section) => section.getBoundingClientRect().top <= 110);
        setActiveSection(current?.id ?? 'home');
      });
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <header className={`header-wrapper ${menuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <button className="header-name" type="button" onClick={() => handleClick('home')} aria-label="Back to top">
          <span className="header-monogram" aria-hidden="true">TC</span>
          <span className="name-main">Tianhao Ch<span className="fancy-i">e</span>n</span>
        </button>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span className="bar bar1" />
          <span className="bar bar2" />
          <span className="bar bar3" />
        </button>

        <nav id="primary-navigation" className={`header-nav ${menuOpen ? 'show' : ''}`} aria-label="Primary navigation">
          {navigation.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleClick(item.id)}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
