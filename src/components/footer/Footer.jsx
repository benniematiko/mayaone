import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            Yadove<span>Agency</span>
          </a>
          <p className="footer-brand-text">
            Connecting households with reliable, background-checked, and professional domestic help across Nairobi and Riyadh.
          </p>
          <div className="footer-locations">
            <span>📍 Regional Hubs:</span>
            <span>• Nairobi, Kenya</span>
            <span>• Riyadh, Saudi Arabia</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-column-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Hire a Maid</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="footer-column-title">Our Services</h4>
          <ul className="footer-links">
            <li><a href="#services">House Cleaning</a></li>
            <li><a href="#services">Laundry & Ironing</a></li>
            <li><a href="#services">Meal Preparation</a></li>
            <li><a href="#services">Nanny & Childcare</a></li>
            <li><a href="#services">Elderly Care</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="footer-column-title">Contact Us</h4>
          <div className="footer-contact-item">
            <span>📞</span>
            <a href="tel:+254726571387">+254 726 571387</a>
          </div>
          <div className="footer-contact-item">
            <span>✉️</span>
            <a href="mailto:hello@sheinwithlizz.com">hello@sheinwithlizz.com</a>
          </div>
          <div className="footer-contact-item">
            <span>⏰</span>
            <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Yadove Agency. All rights reserved.</p>
        <div className="footer-legal-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;