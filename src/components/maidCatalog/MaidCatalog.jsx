import React, { useState } from 'react';
import './MaidCatalog.css';

const candidates = [
  { id: 1, name: 'Mary W.', location: 'Nairobi', experience: '4 Years Exp', skills: ['Cleaning', 'Childcare', 'Cooking'] },
  { id: 2, name: 'Amina K.', location: 'Riyadh', experience: '6 Years Exp', skills: ['Elderly Care', 'Laundry', 'Cleaning'] },
  { id: 3, name: 'Grace N.', location: 'Nairobi', experience: '3 Years Exp', skills: ['Childcare', 'Meal Prep'] },
  { id: 4, name: 'Fatima H.', location: 'Riyadh', experience: '5 Years Exp', skills: ['House Cleaning', 'Ironing'] },
  { id: 5, name: 'Jane M.', location: 'Nairobi', experience: '2 Years Exp', skills: ['Full-Time Cleaning', 'Laundry'] },
  { id: 6, name: 'Zahra A.', location: 'Riyadh', experience: '7 Years Exp', skills: ['Cooking', 'Elderly Care', 'Nanny'] }
];

const MaidCatalog = ({ isOpen, onClose, onSelectMaid }) => {
  const [filter, setFilter] = useState('All');

  if (!isOpen) return null;

  const filteredCandidates = filter === 'All' 
    ? candidates 
    : candidates.filter(c => c.location === filter);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>✕</button>

        <div className="catalog-header">
          <h2>Available <span>Maid Candidates</span></h2>
          <p>Select a profile to pre-fill your inquiry request.</p>
        </div>

        <div className="catalog-filters">
          <button 
            className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
            onClick={() => setFilter('All')}
          >
            All Candidates
          </button>
          <button 
            className={`filter-btn ${filter === 'Nairobi' ? 'active' : ''}`}
            onClick={() => setFilter('Nairobi')}
          >
            Nairobi Hub
          </button>
          <button 
            className={`filter-btn ${filter === 'Riyadh' ? 'active' : ''}`}
            onClick={() => setFilter('Riyadh')}
          >
            Riyadh Hub
          </button>
        </div>

        <div className="catalog-grid">
          {filteredCandidates.map((candidate) => (
            <div key={candidate.id} className="candidate-card">
              <div className="candidate-header">
                <span className="candidate-name">{candidate.name}</span>
                <span className="candidate-location">{candidate.location}</span>
              </div>
              <div className="candidate-exp">{candidate.experience}</div>
              <div className="candidate-skills">
                {candidate.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
              <button 
                className="btn-select-candidate"
                onClick={() => {
                  onSelectMaid(candidate);
                  onClose();
                }}
              >
                Request Candidate
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaidCatalog;