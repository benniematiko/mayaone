import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Services from '../../components/services/Services';
import WhyUs from '../../components/whyus/WhyUs';
import HowItWorks from '../../components/howItWorks/HowItWorks';
import Testimonials from '../../components/testimonials/Testimonials';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import MaidCatalog from '../../components/maidCatalog/MaidCatalog';
import './Home.css';

const Home = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  const handleSelectCandidate = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            Yadove Agency connects you with professional, background-checked domestic staff across Nairobi and Riyadh. From house cleaning and laundry to meal prep and full-time care.
          </p>
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
            <p>100% Background Checked & Ready to Assist</p>
          </div>
        </div>
      </section>

      <Services />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
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