import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    location: 'Nairobi',
    serviceType: 'Full-Time House Cleaning',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.fullName}! Your request has been submitted.`);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <span className="contact-badge">Get In Touch</span>
          <h2 className="contact-title">
            Request a Maid for <span>Your Home Today</span>
          </h2>
          <p className="contact-description">
            Fill out the form and our staffing managers in Nairobi or Riyadh will contact you within 24 hours to match your requirements.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <span className="contact-detail-icon">📍</span>
              <div>
                <strong>Nairobi Hub:</strong> Nairobi, Kenya
              </div>
            </div>
            <div className="contact-detail-item">
              <span className="contact-detail-icon">📍</span>
              <div>
                <strong>Riyadh Hub:</strong> Riyadh, Saudi Arabia
              </div>
            </div>
            <div className="contact-detail-item">
              <span className="contact-detail-icon">📞</span>
              <div>+254 726 571387</div>
            </div>
            <div className="contact-detail-item">
              <span className="contact-detail-icon">✉️</span>
              <div>hello@sheinwithlizz.com</div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+254 / +966 ..."
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Your Location</label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              >
                <option value="Nairobi">Nairobi, Kenya</option>
                <option value="Riyadh">Riyadh, Saudi Arabia</option>
                <option value="Other">Other Region</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="serviceType">Service Required</label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
              >
                <option value="Full-Time House Cleaning">Full-Time House Cleaning</option>
                <option value="Laundry & Ironing">Laundry & Ironing</option>
                <option value="Meal Preparation & Cooking">Meal Preparation & Cooking</option>
                <option value="Nanny & Childcare">Nanny & Childcare</option>
                <option value="Elderly Care Assistance">Elderly Care Assistance</option>
                <option value="Live-In Maid">Live-In Maid</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Specific Requirements</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us about working hours, preferences, or start date..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">Submit Request</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;