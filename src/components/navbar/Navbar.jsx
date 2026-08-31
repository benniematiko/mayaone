import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header-wrapper">
      {/* Top Utility Bar */}
      <div className="top-bar">
        <div className="top-bar-locations">
          <span>📍 Riyadh, Saudi Arabia</span>
          <span>📍 Nairobi, Kenya</span>
        </div>
        <div className="top-bar-contact">
          <a href="tel:+254726571387">+254 726 571387</a>
          <span className="top-bar-divider">|</span>
          <a href="mailto:hello@sheinwithlizz.com">hello@sheinwithlizz.com</a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          Yadove<span>Agency</span>
        </a>

        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="navbar-actions">
          <button className="btn-login">Client Login</button>
          <button className="btn-signup">Hire a Maid</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;