import React, { useState } from 'react';
import './style.css'
import insta from '../assets/instagram.svg'
import x from '../assets/x.svg'
import meta from '../assets/meta.svg'
import linkedin from '../assets/linkedin.svg'
import searchIt from '../assets/searchIt.svg'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div id="nav">
      <div id="navtop">
        <div id="elemparent">
          <hr />
          <div id="elemchild">
            <div className="line">|</div>
            <div className="elem">
              <h4><a href="#">HOME</a></h4>
            </div>
            <div className="line">|</div>
            <div className="elem">
              <h4><a href="#">BLOG</a></h4>
            </div>
            <div className="line">|</div>
            <div className="elem">
              <h4><a href="#">ABOUT</a></h4>
            </div>
            <div className="line">|</div>
            <div className="elem">
              <h4><a href="#">LOGIN</a></h4>
            </div>
            <div className="line">|</div>
          </div>
          <hr />
        </div>
        <div className="social">
          <a href="https://in.linkedin.com/company/gdsc-tezpur-university" target="_blank"><img src={linkedin} alt="linkedin logo" /></a>
          <a href="https://twitter.com/gdsc_tezu" target="_blank"><img src={x} alt="x logo" /></a>
          <a href="https://m.facebook.com/profile.php?id=61550245499884&locale=en_GB&_rdr" target="_blank"><img src={meta} alt="meta logo" /></a>
          <a href="https://www.instagram.com/gdsc_tezu/" target="_blank"><img src={insta} alt="instagram logo" /></a>
        </div>
        {/* <div className="landing_page">
          <div className="menu">
            <label htmlFor="menuBtn" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </label>
          </div>
        </div> */}

      </div>
      <div id="background">
        <div id="titleparent">
          <div id="title">
            <h1>BINARY BARD</h1>
          </div>
        </div>
        <div id="searchgrandparent">
          <div id="searchparent">
            <div id="search">
              <form >
                <input type="text" placeholder="Search..." />
                <button type="submit"><img src={searchIt} alt="" /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
