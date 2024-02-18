import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './style.css'
import searchIt from '../assets/searchIt.svg'

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };


  return (
    <div className="hamburger-parent">
      <div className="hamburger">
        <input type="checkbox" name="" id="menuBtn" checked={menuOpen} onChange={toggleMenu} />
        <div className={`menu_overlay ${menuOpen ? 'open' : ''}`}>
          <label htmlFor="menuBtn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </label>
          <div className="searchgrandparent-menu">
            <div className="searchparent-menu">
              <div className="search-menu">
                <form>
                  <input type="text" placeholder="Search..." />
                  <button type="submit">
                    <img src={searchIt} alt="search" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
            <li>
              <a href="#">LOGIN</a>
            </li>
          </ul>
          <div className="socialOfLinks">
          <div className="landing_page">
          <div className="menu">
            <label htmlFor="menuBtn" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </label>
          </div>
        </div>
      {showLinks && (
        <>
          <a href="https://in.linkedin.com/company/gdsc-tezpur-university" target="_blank">
            <img src="linkedin.svg" alt="linkedin logo" />
          </a>
          <a href="https://twitter.com/gdsc_tezu" target="_blank">
            <img src="x.svg" alt="x logo" />
          </a>
          <a href="https://m.facebook.com/profile.php?id=61550245499884&locale=en_GB&_rdr" target="_blank">
            <img src="meta.svg" alt="meta logo" />
          </a>
          <a href="https://www.instagram.com/gdsc_tezu/" target="_blank">
            <img src="instagram.svg" alt="instagram logo" />
          </a>
        </>
      )}
    </div>
        </div>
        
      </div>
    </div>
  );
};

export default HamburgerMenu;
