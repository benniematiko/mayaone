import React from 'react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    icon: '🧹',
    title: 'Full-Time House Cleaning',
    description: 'Comprehensive daily cleaning, sweeping, dusting, and organizing to keep your living spaces spotless.',
  },
  {
    id: 2,
    icon: '🧺',
    title: 'Laundry & Ironing',
    description: 'Professional washing, drying, fabric care, and precise ironing for your household garments.',
  },
  {
    id: 3,
    icon: '🍲',
    title: 'Meal Preparation & Cooking',
    description: 'Nutritious daily meal planning, grocery handling, and fresh home-cooked meals tailored to your diet.',
  },
  {
    id: 4,
    icon: '👶',
    title: 'Nanny & Childcare',
    description: 'Experienced, patient, and vetted nannies to provide attentive care and supervision for your children.',
  },
  {
    id: 5,
    icon: '👵',
    title: 'Elderly Care Assistance',
    description: 'Compassionate assistance for senior family members, including mobility support and daily activity help.',
  },
  {
    id: 6,
    icon: '🏡',
    title: 'Live-In & Live-Out Staffing',
    description: 'Flexible placements catered to your preferences, offering both full-time live-in and structured live-out house helps.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <span className="services-badge">What We Provide</span>
        <h2 className="services-title">
          Tailored Domestic Services for <span>Your Home</span>
        </h2>
        <p className="services-subtitle">
          Whether you need daily cleaning, childcare, or specialized support, Yadove Agency supplies fully vetted and trained personnel.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon-wrapper">{service.icon}</div>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-description">{service.description}</p>
            <a href="#contact" className="service-card-link">
              Request Service &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;