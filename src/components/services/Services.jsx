import React from 'react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    icon: '🧹',
    title: 'Full-Time House Cleaning',
    description: 'Comprehensive daily cleaning, sweeping, dusting, and organizing to keep your living spaces spotless.',
    category: 'Kitchen • Bathrooms • Bedrooms • Living Areas',
  },
  {
    id: 2,
    icon: '👶',
    title: 'Nanny & Childcare',
    description: 'Experienced, patient, and vetted nannies to provide attentive care and supervision for your children.',
    category: 'Infant Care • Toddlers • Homework Help • Supervision',
  },
  {
    id: 3,
    icon: '🧺',
    title: 'Laundry & Ironing',
    description: 'Professional washing, drying, fabric care, and precise ironing for your household garments.',
    category: 'Washing • Folding • Fabric Care • Steam Ironing',
  },
  {
    id: 4,
    icon: '🍲',
    title: 'Meal Preparation & Cooking',
    description: 'Nutritious daily meal planning, grocery handling, and fresh home-cooked meals tailored to your diet.',
    category: 'Meal Prep • Recipe Planning • Kitchen Hygiene',
  },
  {
    id: 5,
    icon: '👵',
    title: 'Elderly Care Assistance',
    description: 'Compassionate assistance for senior family members, including mobility support and daily activity help.',
    category: 'Mobility Support • Medication Reminders • Companionship',
  },
  {
    id: 6,
    icon: '🏡',
    title: 'Live-In & Live-Out Staffing',
    description: 'Flexible placements catered to your preferences, offering both full-time live-in and structured live-out house helps.',
    category: 'Full-Time Live-In • Daily Live-Out Placements',
  },
  {
    id: 7,
    icon: '🏢',
    title: 'Commercial Cleaning',
    description: 'Professional janitorial and maintenance services for corporate offices, retail spaces, and business premises.',
    category: 'Office Spaces • Facilities • Janitorial Services',
  },
  {
    id: 8,
    icon: '🌿',
    title: 'Eco-Friendly Cleaning',
    description: 'Safe and effective cleaning solutions utilizing non-toxic, eco-friendly products for healthy living environments.',
    category: 'Non-Toxic • Biodegradable • Child-Safe',
  },
  {
    id: 9,
    icon: '🛋️',
    title: 'Carpet & Upholstery Cleaning',
    description: 'Deep extraction cleaning for sofas, carpets, and mattresses to eliminate deep-seated dirt, dust mites, and odors.',
    category: 'Steam Clean • Stain Removal • Deodorize',
  },
  {
    id: 10,
    icon: '🪟',
    title: 'Window Cleaning',
    description: 'Crystal-clear glass cleaning for indoor and outdoor windows, glass partitions, and balcony railings.',
    category: 'Interior • Exterior • High-Rise • Squeegee',
  },
  {
    id: 11,
    icon: '🏗️',
    title: 'Post-Construction Cleaning',
    description: 'Thorough site cleanup after building or renovation work to remove debris, fine dust, and paint splatters.',
    category: 'Dust Removal • Paint Cleanup • Final Finish',
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
            
            <div className="service-card-footer">
              <span className="service-category-bottom">{service.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;