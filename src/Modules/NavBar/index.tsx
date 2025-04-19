import  { useState } from "react";

import "./index.css"
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="top-bar">
        <div className="test">
          <span>
            <img src="/element-4.png" alt="element " className="nav-hicons" />
          </span>{" "}
          Lorem ipsum dolor
        </div>
        <div>
          <span>
            {" "}
            <img src="/element-4.png" alt="element " className="nav-hicons" />
          </span>{" "}
          Lorem ipsum dolor
        </div>
        <div className="test">
          <span>
            {" "}
            <img src="/element-4.png" alt="element " className="nav-hicons" />
          </span>{" "}
          Lorem ipsum dolor
        </div>
      </div>

      <header className="nav-header">
        <div className="container">
          <div className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </div>

          <img src="/logo.png" alt="Logo" className="logo" />
          <h1>LOGO</h1>

          <div className="header-icons">
            <i>
              <img src="/search-normal.png" alt="search" className="nav-icons" />
            </i>
            <i>
              <img src="/heartnav.png" alt="heart" className="nav-icons" />
            </i>
            <i>
              <img src="/shopping-bag.png"alt="shopping" className="nav-icons" />
            </i>
            <i>
              <img src="/profile.png"alt="profile" className="nav-icons" />
            </i>
            <span className="lang">ENG ▾</span>
          </div>
        </div>

        <nav className={`nav ${menuOpen ? "show" : ""}`}>
          <ul>
            <li>SHOP</li>
            <li>SKILLS</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;