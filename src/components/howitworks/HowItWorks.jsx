import React from 'react';
import './HowItWorks.css';

const stepsData = [
  {
    step: '1',
    title: 'Submit Your Request',
    description: 'Fill out our short online form detailing your household needs, location, schedule, and preferences.',
  },
  {
    step: '2',
    title: 'Profile Matching',
    description: 'We match your requirements with pre-screened, fully verified candidate profiles from our active roster.',
  },
  {
    step: '3',
    title: 'Interview Candidates',
    description: 'Conduct quick virtual or in-person interviews with selected candidates to find the perfect fit.',
  },
  {
    step: '4',
    title: 'Placement & Support',
    description: 'Finalize contracts smoothly. We provide onboarding guidance and continuous ongoing agency support.',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="how-it-works-header">
        <span className="how-it-works-badge">Simple Process</span>
        <h2 className="how-it-works-title">
          How to Hire with <span>Yadove Agency</span>
        </h2>
        <p className="how-it-works-subtitle">
          Getting reliable domestic help shouldn't be complicated. Follow four simple steps to match with your ideal maid.
        </p>
      </div>

      <div className="steps-grid">
        {stepsData.map((item) => (
          <div className="step-card" key={item.step}>
            <div className="step-number-badge">{item.step}</div>
            <h3 className="step-card-title">{item.title}</h3>
            <p className="step-card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;