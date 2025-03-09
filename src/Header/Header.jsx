import "./Header.css";
function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="header__nav">
            <p className="header__logo">Online</p>
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a href="#" className="header__nav-link active">
                  Introduction (current)
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">
                  Our Work
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">
                  Contact Us
                </a>
              </li>
            </ul>

            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hamburger-menu"
            >
              <rect y="5" width="30" height="3" fill="currentColor" />
              <rect y="13" width="30" height="3" fill="currentColor" />
              <rect y="21" width="30" height="3" fill="currentColor" />
            </svg>
          </nav>

          <div className="hero">
            <div className="hero__body">
              <h2 className="hero__main--heading">The Town</h2>
              <p className="hero__secondary--heading">WebSite HTML5,CSS3</p>
              <p className="hero__tertiary--heading">
                by <span className="author">Hisham-khalil</span>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
