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
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="">Lista de albuns</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
