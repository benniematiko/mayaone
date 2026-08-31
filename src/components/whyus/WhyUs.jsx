import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
  const benefits = [
    {
      id: 1,
      title: ' Rigorous Background Screening',
      text: 'Every domestic worker undergoes strict identity verification, police clearance checks, and reference validations.',
    },
    {
      id: 2,
      title: ' Professionally Trained Staff',
      text: 'Our maids receive specialized training in modern housekeeping standard practices, hygiene, and safe child supervision.',
    },
    {
      id: 3,
      title: ' Quick Replacement Guarantee',
      text: 'If a staff placement does not meet your expectations, Yadove Agency provides seamless and fast replacements.',
    },
    {
      id: 4,
      title: ' International Operations',
      text: 'Dedicated regional offices in Nairobi and Riyadh ensuring local support and seamless placement coordination.',
    },
  ];

  return (
    <section className="why-us-section">
      <div className="why-us-container">
        <div className="why-us-content">
          <span className="why-us-badge">Why Yadove Agency</span>
          <h2 className="why-us-title">
            Your Trusted Partner for <span>Domestic Support</span>
          </h2>
          <p className="why-us-description">
            We simplify your home management by connecting you with dedicated, verified, and well-trained maids tailored to your family's exact routine.
          </p>

          <div className="why-us-list">
            {benefits.map((item) => (
              <div key={item.id} className="why-us-item">
                <div className="why-us-check-icon">✓</div>
                <div>
                  <h4 className="why-us-item-title">{item.title}</h4>
                  <p className="why-us-item-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="why-us-visual">
          <div className="stats-card-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Verified Staff</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2</div>
              <div className="stat-label">Global Hubs</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Client Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;