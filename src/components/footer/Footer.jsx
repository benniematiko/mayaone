import React from 'react';
import './Footer.css';

const Footer = ({ logoUrl = '/white-logo.png' }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-brand">
          <a href="/" className="footer-logo-link">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt="Yadove Agency Logo"
                className="footer-white-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline-block';
                }}
              />
            ) : null}
            <span className="footer-logo-fallback" style={{ display: logoUrl ? 'none' : 'inline-block' }}>
              YADOVE <span>AGENCY</span>
            </span>
          </a>

          <p className="footer-brand-text">
            Connecting households with reliable, background-checked, and professional domestic help across Nairobi and Riyadh.
          </p>

          <div className="footer-locations">
            <span className="footer-locations-title">REGIONAL HUBS</span>
            <div className="location-tags">
              <span className="location-tag">Damman</span>
              <span className="location-tag">Jeddah</span>
              <span className="location-tag">Riyadh, Saudi Arabia</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-column-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#why-us">Why Choose Us</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#contact">Hire a Maid</a></li>
          </ul>
        </div>

        {/* Services Scope */}
        <div className="footer-col">
          <h4 className="footer-column-title">Our Services</h4>
          <ul className="footer-links">
            <li><a href="#services">House Cleaning</a></li>
            <li><a href="#services">Laundry & Ironing</a></li>
            <li><a href="#services">Meal Preparation</a></li>
            <li><a href="#services">Nanny & Childcare</a></li>
            <li><a href="#services">Elderly Care</a></li>
            <li><a href="#services">Post-Construction</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4 className="footer-column-title">Contact Us</h4>
          <div className="footer-contact-item">
            <span className="contact-icon">📞</span>
            <a href="tel:+254726571387">+96 653 485 1367</a>
          </div>
          <div className="footer-contact-item">
            <span className="contact-icon">✉️</span>
            <a href="mailto:hello@sheinwithlizz.com">hello@yadove.com</a>
          </div>
          <div className="footer-contact-item">
            <span className="contact-icon">⏰</span>
            <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Yadove Agency. All rights reserved.</p>
        <div className="footer-legal-links">
          <a href="#privacy">Privacy Policy</a>
          <span className="legal-divider">•</span>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;