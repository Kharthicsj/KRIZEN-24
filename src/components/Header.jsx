import React, { useState } from 'react';
import './Header.css'; 
import logo from '../Assets/logo/skcet-logo.webp';
import menu from '../Assets/logo/menu.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navigation">
      <img
        src={logo}
        alt="logo"
        className="logo skcetlogo"
      />
      <div className="nav">
        <div className="nav__item">
          <Link to="/">Home</Link>
        </div>
        <div className="nav__item">
          <Link to="/technical">Technical</Link>
          <div className="dropdown">
            <Link to="/paper-presentation">Paper Presentation</Link>
            <Link to="/project-presentation">Project Presentation</Link>
            <Link to="/web-app-development">WEB/APP Development</Link>
            <Link to="/electrio-quiz">ElectrioQuiz</Link>
            <Link to="/circuit-track">CircuitTrack</Link>
            <Link to="/cadfest">CadFest</Link>
            <Link to="/old-town-road">Old Town Road</Link>
          </div>
        </div>
        <div className="nav__item">
          <Link to="/non-technical">Non-Technical</Link>
          <div className="dropdown">
            <Link to="/foto-hunt">FotoHunt</Link>
            <Link to="/beyondinks">BeyondInks</Link>
            <Link to="/narrative-pulse">Narrative Pulse</Link>
          </div>
        </div>
        <div className="nav__item">
          <Link to="/workshop">Workshop</Link>
        </div>
        <div className="nav__item">
          <Link to="/gallery">Gallery</Link>
        </div>
      </div>
      <div className="phone__nav">
        <div className={`menu__btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <img src={menu} alt='menu-icon' />
        </div>
        <div className="navbar" style={{ width: menuOpen ? '50%' : '0' }}>
          <div className="nav__links">
            <Link to="/">Home</Link>
            <Link to="/technical">Technical</Link>
            <Link to="/non-technical">Non-Technical</Link>
            <Link to="/workshop">Workshop</Link>
            <Link to="/gallery">Gallery</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
