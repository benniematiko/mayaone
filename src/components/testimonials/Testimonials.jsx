import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Kimani',
    location: 'Nairobi, Kenya',
    initials: 'SK',
    rating: '★★★★★',
    quote: 'Yadove Agency helped us find an incredible nanny for our two toddlers. She is punctual, trustworthy, and fantastic with children. High recommendation!'
  },
  {
    id: 2,
    name: 'Fahad Al-Mansoor',
    location: 'Riyadh, Saudi Arabia',
    initials: 'FA',
    rating: '★★★★★',
    quote: 'Finding reliable house help in Riyadh used to be stressful. Yadove managed the whole placement process smoothly. Our housekeeper is very thorough.'
  },
  {
    id: 3,
    name: 'Brenda Omondi',
    location: 'Nairobi, Kenya',
    initials: 'BO',
    rating: '★★★★★',
    quote: 'The vetting process gives total peace of mind. We hired a live-in housekeeper and the transition was completely seamless. Excellent service!'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <span className="testimonials-badge">Client Reviews</span>
        <h2 className="testimonials-title">
          What Our Clients <span>Say About Us</span>
        </h2>
        <p className="testimonials-subtitle">
          Real feedback from families in Nairobi and Riyadh who rely on Yadove Agency for their home staffing needs.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonialsData.map((item) => (
          <div key={item.id} className="testimonial-card">
            <div>
              <div className="testimonial-rating">{item.rating}</div>
              <p className="testimonial-quote">"{item.quote}"</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">{item.initials}</div>
              <div className="author-info">
                <h4>{item.name}</h4>
                <p>{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;