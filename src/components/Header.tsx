import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <a href="/" className="logo">
            <img src="vinyl-record-icon-1.png" alt="Logo" />
            <span>DISK COLLECTION</span>
          </a>
          <ul className="nav-links">
            <li>
              <Link href="/albums">Lista de Álbuns</Link>
            </li>
            <li>
              <Link href="/admin">Admin</Link>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
