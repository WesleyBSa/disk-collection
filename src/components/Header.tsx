import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <div className="container">
          <a href="/" className="logo">
            <img src="vinyl-record-icon-1.png" alt="Logo" />
            <span>DISK COLLECTION</span>
          </a>
          <button className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li>
              <Link href="/albums" onClick={closeMenu}>Lista de Álbuns</Link>
            </li>
            <li>
              <Link href="/admin" onClick={closeMenu}>Admin</Link>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
