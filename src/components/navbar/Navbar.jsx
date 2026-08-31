import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="navbar-container">
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="top-bar-locations">
            <span>📍 Riyadh </span>
            <span className="separator">|</span>
            <span>📍 Dammam </span>
            <span className="separator">|</span>
            <span>📍 Jeddah, Saudi Arabia </span>
          </div>
          <div className="top-bar-contact">
            <a href="tel:+254726571387" className="top-bar-link">
              📞 +96 653 485 1367
            </a>
            <span className="separator">|</span>
            <a href="mailto:hello@yadove.com" className="top-bar-link">
              ✉️ hello@yadove.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Navigation */}
      <header className="navbar-header">
        {/* White Logo Image from public folder */}
        <a href="/" className="navbar-logo" onClick={closeDrawer}>
          <div className="logo-wrapper">
            {!imgError ? (
              <img 
                src="/yadove__white.png" 
                alt="Yadove Agency Logo" 
                className="logo-img"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="logo-fallback-text">
                Yadove<span>Agency</span>
              </span>
            )}
          </div>
        </a>

        {/* Hamburger Toggle */}
        <button 
          className="hamburger-toggle" 
          onClick={toggleDrawer}
          aria-label="Toggle Navigation Menu"
        >
          ☰
        </button>

        {/* Mobile Drawer Backdrop */}
        <div 
          className={`drawer-backdrop ${isDrawerOpen ? 'active' : ''}`}
          onClick={closeDrawer}
        ></div>

        {/* 80% Slide-In Navigation Drawer */}
        <ul className={`nav-menu ${isDrawerOpen ? 'open' : ''}`}>
          <button className="drawer-close-btn" onClick={closeDrawer} aria-label="Close Navigation Menu">
            ✕
          </button>

          <li>
            <a href="#home" className="nav-link" onClick={closeDrawer}>Home</a>
          </li>
          <li>
            <a href="#services" className="nav-link" onClick={closeDrawer}>Services</a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={closeDrawer}>Why Us</a>
          </li>
          <li>
            <a href="#pricing" className="nav-link" onClick={closeDrawer}>Rates</a>
          </li>
          <li>
            <a href="#contact" className="nav-link btn-hire" onClick={closeDrawer}>
              Request Maid
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;