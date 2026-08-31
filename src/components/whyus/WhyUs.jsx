import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
  const benefits = [
    {
      id: 1,
      title: 'Rigorous Background Screening',
      text: 'Every domestic worker undergoes strict identity verification, police clearance checks, and reference validations.',
      category: 'Verification • Clearance • Background Checks',
    },
    {
      id: 2,
      title: 'Professionally Trained Staff',
      text: 'Our maids receive specialized training in modern housekeeping standard practices, hygiene, and safe child supervision.',
      category: 'Housekeeping • Hygiene • Child Safety',
    },
    {
      id: 3,
      title: 'Quick Replacement Guarantee',
      text: 'If a staff placement does not meet your expectations, Yadove Agency provides seamless and fast replacements.',
      category: '100% Placement Assurance • Fast Turnover',
    },
    {
      id: 4,
      title: 'International Operations',
      text: 'Dedicated regional offices in Nairobi and Riyadh ensuring local support and seamless placement coordination.',
      category: 'Nairobi Hub • Riyadh Hub • Global Coordination',
    },
  ];

  const stats = [
    { number: '500+', label: 'Verified Staff', detail: 'Kenya & Uganda Personnel' },
    { number: '98%', label: 'Client Satisfaction', detail: 'Verified Home Reviews' },
    { number: '2', label: 'Global Hubs', detail: 'Nairobi & Riyadh Offices' },
    { number: '24/7', label: 'Client Support', detail: 'Dedicated Support Desk' },
  ];

  return (
    <section id="why-us" className="why-us-section">
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
                <div className="why-us-item-body">
                  <h4 className="why-us-item-title">{item.title}</h4>
                  <p className="why-us-item-text">{item.text}</p>
                  <span className="why-us-item-category">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="why-us-visual">
          <div className="stats-card-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-detail">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;