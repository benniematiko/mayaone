import React from 'react';
import './WorkersForHire.css';

const workerPlans = [
  {
    id: 1,
    role: 'Day Househelp / Cleaner',
    description: 'Ideal for periodic cleaning, laundry, and daily maintenance without live-in obligations.',
    price: '1,500 SAR',
    period: '/ month',
    featured: false,
    category: 'Daily Shifts • Non-Live-In • Periodic Cleaning',
    shortTermRates: [
      { duration: 'Per Session', rate: '30 SAR' },
      { duration: 'Full Day (24 hrs, stay-in)', rate: '250 SAR' },
      { duration: '2 Days (stay-in)', rate: '300 SAR' },
      { duration: '5 Days (stay-in)', rate: '600 SAR' }
    ],
    features: [
      '8-Hour daily shifts',
      'Deep house cleaning & dusting',
      'Washing & ironing clothes',
      'Full background check & vetting',
      'Immediate replacement guarantee'
    ]
  },
  {
    id: 2,
    role: 'Full-Time Live-In Maid',
    description: 'Comprehensive 24/7 household management, cooking, cleaning, and assistance.',
    price: '2,200 SAR',
    period: '/ month',
    featured: true,
    category: '24/7 Management • Full Live-In • Cooking & Hygiene',
    shortTermRates: [
      { duration: 'Per Session', rate: '30 SAR' },
      { duration: 'Full Day (24 hrs, stay-in)', rate: '250 SAR' },
      { duration: '2 Days (stay-in)', rate: '300 SAR' },
      { duration: '5 Days (stay-in)', rate: '600 SAR' }
    ],
    features: [
      'Full live-in home care',
      'Daily cleaning & housekeeping',
      'Meal preparation & kitchen duties',
      'Medical & police clearance verified',
      'Free candidate replacement within 90 days'
    ]
  },
  {
    id: 3,
    role: 'Nanny & Professional Childcare',
    description: 'Experienced child caregivers trained in toddler routine management, hygiene, and feeding.',
    price: '2,500 SAR',
    period: '/ month',
    featured: false,
    category: 'Infant Care • School Setup • First-Aid Trained',
    shortTermRates: [
      { duration: 'Per Session', rate: '30 SAR' },
      { duration: 'Full Day (24 hrs, stay-in)', rate: '250 SAR' },
      { duration: '2 Days (stay-in)', rate: '300 SAR' },
      { duration: '5 Days (stay-in)', rate: '600 SAR' }
    ],
    features: [
      'Infant & toddler specialized care',
      'School routine & meal setup',
      'Basic first-aid awareness',
      'Vetted character references',
      'Flexible live-in or day setups'
    ]
  },
  {
    id: 4,
    role: 'Elderly Care Assistant',
    description: 'Dedicated elderly care assistants providing physical help, companionship, and medication reminders.',
    price: '3,000 SAR',
    period: '/ month',
    featured: false,
    category: 'Mobility Support • Medication Tracking • Dietary Prep',
    shortTermRates: [
      { duration: 'Per Session', rate: '30 SAR' },
      { duration: 'Full Day (24 hrs, stay-in)', rate: '250 SAR' },
      { duration: '2 Days (stay-in)', rate: '300 SAR' },
      { duration: '5 Days (stay-in)', rate: '600 SAR' }
    ],
    features: [
      'Personal mobility & hygiene support',
      'Medication schedule tracking',
      'Meal prep tailored to dietary needs',
      'Compassionate companionship',
      'Direct agency supervision'
    ]
  }
];

const paymentHighlights = [
  {
    title: 'Pay After Completion',
    desc: 'Pay the full amount after the work is successfully completed.'
  },
  {
    title: 'Flexible Contract Terms',
    desc: 'Custom flexible payment structures for long-term household placements.'
  },
  {
    title: 'Transparent Rates',
    desc: 'No hidden agency charges or surprise administrative costs.'
  }
];

const WorkersForHire = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="workers-section">
      <div className="workers-header">
        <span className="workers-badge">Rates & Packages</span>
        <h2 className="workers-title">
          Professional Workers <span>For Hire</span>
        </h2>
        <p className="workers-subtitle">
          Transparent SAR pricing for daily shifts and long-term domestic placements across Riyadh and regional locations.
        </p>
      </div>

      <div className="workers-grid">
        {workerPlans.map((plan) => (
          <div 
            key={plan.id} 
            className={`worker-card ${plan.featured ? 'featured' : ''}`}
          >
            {plan.featured && <span className="featured-tag">Most Popular</span>}
            
            <div className="worker-card-content">
              <h3 className="worker-role-title">{plan.role}</h3>
              <p className="worker-role-desc">{plan.description}</p>
              
              <div className="worker-pricing">
                <span className="price-amount">{plan.price}</span>
                <span className="price-period">{plan.period}</span>
              </div>

              {/* Short-Term Rates Box */}
              <div className="short-term-box">
                <span className="short-term-title">Short-Term & Flexible Rates</span>
                <div className="short-term-grid">
                  {plan.shortTermRates.map((item, idx) => (
                    <div key={idx} className="short-term-item">
                      <span className="st-duration">{item.duration}</span>
                      <span className="st-rate">{item.rate}</span>
                    </div>
                  ))}
                </div>
              </div>

              <ul className="worker-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="worker-card-action">
              <a 
                href="#contact" 
                onClick={() => onSelectPlan && onSelectPlan(plan.role)}
                className={`btn-hire-worker ${!plan.featured ? 'outline' : ''}`}
              >
                Hire This Worker
              </a>
              <div className="worker-card-footer">
                <span className="worker-category-bottom">{plan.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delivery Notice Bar */}
      <div className="delivery-notice-bar">
        <span className="delivery-icon">🚚</span>
        <p>
          <strong>Delivery Notice:</strong> Listed prices do not include transport/delivery fees. Please <a href="#contact">contact us</a> for delivery arrangements.
        </p>
      </div>

      {/* Payment Options Section */}
      <div className="payment-options-container">
        <h3 className="payment-options-title">Payment Terms & Guarantees</h3>
        <div className="payment-grid">
          {paymentHighlights.map((opt, i) => (
            <div key={i} className="payment-card">
              <div className="payment-card-badge">0{i + 1}</div>
              <h4>{opt.title}</h4>
              <p>{opt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkersForHire;