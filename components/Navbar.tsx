import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} aria-label="Primary">
      <div className="container nav__inner">
        <a className="nav__mark" href="#about">Davin S Thomas</a>

        <ul className="nav__links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a className="nav__link" href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        <a
          className="key key--small nav__action"
          href="mailto:davin.sthomas07@gmail.com"
        >
          Email
        </a>

        <button
          className="nav__toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="nav-panel"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X aria-hidden="true" size={20} strokeWidth={1.75} /> : <Menu aria-hidden="true" size={20} strokeWidth={1.75} />}
        </button>
      </div>

      {isOpen && (
        <div className="nav__panel" id="nav-panel">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    const targetElement = document.getElementById(link.href.replace('#', ''));
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="key key--small"
            href="mailto:davin.sthomas07@gmail.com"
            onClick={() => setIsOpen(false)}
          >
            Email
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
