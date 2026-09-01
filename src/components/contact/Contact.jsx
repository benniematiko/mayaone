import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    location: 'Riyadh',
    serviceType: 'Full-Time House Cleaning',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    // Simulate async API call delay
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      location: 'Riyadh',
      serviceType: 'Full-Time House Cleaning',
      message: ''
    });
    setStatus({ submitting: false, submitted: false, error: null });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Information & Saudi Arabia Hubs Column */}
        <div className="contact-info">
          <span className="contact-badge">Get In Touch</span>
          <h2 className="contact-title">
            Request a Maid for <span>Your Home Today</span>
          </h2>
          <p className="contact-description">
            Fill out the form and our placement managers in Riyadh, Dammam, or Jeddah will review your household specifications and contact you within 24 hours.
          </p>

          <div className="hubs-wrapper">
            <h3 className="hubs-section-title">Saudi Regional Hubs</h3>
            
            <div className="hubs-grid">
              {/* Riyadh Hub Card */}
              <div className={`hub-card ${formData.location === 'Riyadh' ? 'active-hub' : ''}`}>
                <div className="hub-card-header">
                  <span className="hub-flag">📍</span>
                  <div>
                    <h4 className="hub-name">Riyadh Hub</h4>
                    <span className="hub-region">Central Region</span>
                  </div>
                </div>
                <div className="hub-details">
                  <div className="hub-detail-item">
                    <span>Riyadh, Saudi Arabia</span>
                  </div>
                  <div className="hub-detail-item">
                    <span className="hub-icon">📞</span>
                    <a href="tel:+96 653 485 1367">+96 653 485 1367</a>
                  </div>
                </div>
              </div>

              {/* Dammam Hub Card */}
              <div className={`hub-card ${formData.location === 'Dammam' ? 'active-hub' : ''}`}>
                <div className="hub-card-header">
                  <span className="hub-flag">📍</span>
                  <div>
                    <h4 className="hub-name">Dammam Hub</h4>
                    <span className="hub-region">Eastern Province</span>
                  </div>
                </div>
                <div className="hub-details">
                  <div className="hub-detail-item">
                    <span>Dammam, Saudi Arabia</span>
                  </div>
                  <div className="hub-detail-item">
                    <span className="hub-icon">📞</span>
                    <a href="tel:+96 653 485 1367">+96 653 485 1367</a>
                  </div>
                </div>
              </div>

              {/* Jeddah Hub Card */}
              <div className={`hub-card ${formData.location === 'Jeddah' ? 'active-hub' : ''}`}>
                <div className="hub-card-header">
                  <span className="hub-flag">📍</span>
                  <div>
                    <h4 className="hub-name">Jeddah Hub</h4>
                    <span className="hub-region">Western Region</span>
                  </div>
                </div>
                <div className="hub-details">
                  <div className="hub-detail-item">
                    <span>Jeddah, Saudi Arabia</span>
                  </div>
                  <div className="hub-detail-item">
                    <span className="hub-icon">📞</span>
                    <a href="tel:+96 653 485 1367">+96 653 485 1367</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-direct-mail">
            <span className="mail-icon">✉️</span>
            <div>
              <span className="mail-label">Direct Email Inquiries</span>
              <a href="mailto:hello@sheinwithlizz.com" className="mail-link">hello@yadove.com</a>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="contact-form-wrapper">
          {status.submitted ? (
            <div className="form-success-state">
              <div className="success-icon">✓</div>
              <h3 className="success-title">Request Received</h3>
              <p className="success-message">
                Thank you, <strong>{formData.fullName}</strong>. Your placement request for <strong>{formData.serviceType}</strong> in <strong>{formData.location}</strong> has been logged.
              </p>
              <p className="success-subtext">
                Our team will contact you at <strong>{formData.phone}</strong> within 24 business hours.
              </p>
              <button onClick={handleReset} className="btn-reset-form">
                Submit Another Request
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header-bar">
                <h3 className="form-heading">Placement Request Form</h3>
                <span className="form-subheading">All fields marked with * are required</span>
              </div>

              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your official full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+966 5X XXX XXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="location">Primary Location *</label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  >
                    <option value="Riyadh">📍 Riyadh</option>
                    <option value="Dammam">📍 Dammam</option>
                    <option value="Jeddah">📍 Jeddah</option>
                    <option value="Other">Other Region</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="serviceType">Required Domestic Role *</label>
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
                  <option value="Full-Time Live-In Maid">Full-Time Live-In Maid</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Household Specifications & Schedule</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Specify working hours, family size, dietary preferences, or specific start date requirements..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-submit"
                disabled={status.submitting}
              >
                {status.submitting ? 'Processing Request...' : 'Submit Placement Request'}
              </button>

              <div className="form-footer-guarantee">
                <span className="shield-icon">🛡️</span>
                <span>Your information is strictly confidential and protected by agency privacy protocols.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;