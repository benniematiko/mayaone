import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Services from '../../components/services/Services';
import WhyUs from '../../components/whyus/WhyUs';
import HowItWorks from '../../components/howitworks/HowItWorks';
import Testimonials from '../../components/testimonials/Testimonials';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import MaidCatalog from '../../components/maidCatalog/MaidCatalog';
import './Home.css';
import WorkersForHire from '../../components/workersforhire/WorkersForHire';

const Home = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  const handleSelectCandidate = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const verificationItems = [
    { label: 'Vetted', status: 'Yes' },
    { label: 'Verified', status: 'Yes' },
    { label: 'Speak English', status: 'Yes' },
    { label: 'Live in', status: 'Yes' },
    { label: 'Live out', status: 'Yes' },
    { label: 'Hourly', status: 'Yes' },
    { label: 'Monthly', status: 'Yes' }
  ];

  return (
    <div className="home-page">
      <Navbar />

      <section className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">Trusted Domestic Staffing Agency</span>
          <h1 className="hero-title">
            Reliable House Help & Maids for <span>Your Home</span>
          </h1>
          <p className="hero-description">
            Yadove Agency provides professional, English-fluent housekeepers, nannies, and cleaners from Kenya and Uganda. Our team is skilled in cleaning, laundry, ironing, meal preparation, childcare, and full-time elderly care.
          </p>

          <div className="hero-services-tags">
            <span className="service-tag">
              <i className="tag-icon">🏠</i> Live-in Maid
            </span>
            <span className="service-tag">
              <i className="tag-icon">🚗</i> Live-out Maid
            </span>
          </div>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => setIsCatalogOpen(true)}>
              Find a Maid
            </button>
            <button className="btn-secondary" onClick={() => setIsCatalogOpen(true)}>
              Explore Available Roster
            </button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-card-preview">
            <h3>Vetted & Trained Staff</h3>
            <p className="card-subtitle">100% Background Checked & Ready to Assist</p>
            
            <div className="qualifications-grid">
              {verificationItems.map((item, index) => (
                <div className="qualification-item" key={index}>
                  <div className="checkbox-square" aria-label="Verified">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="qualification-text">
                    <span className="qual-label">{item.label}</span>
                    <span className="qual-status">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Services />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <WorkersForHire />
      <Contact />
      <Footer />

      <MaidCatalog 
        isOpen={isCatalogOpen} 
        onClose={() => setIsCatalogOpen(false)} 
        onSelectMaid={handleSelectCandidate} 
      />
    </div>
  );
};

export default Home;