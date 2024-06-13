import React, { useState } from 'react';
//import './Pages.css'; // Import your CSS file here

const Pages = () => {
  return (
    <div className="pages-container">
      <div className="initial-text">
        <h1 style={{ margin: '0', padding: '0', fontFamily: 'Poppins, sans-serif' }}>Have questions?</h1>
        <h1 style={{ margin: '0', padding: '0' }}><p style={{ margin: '0', padding: '0', fontStyle: 'italic', fontFamily: 'Poppins, sans-serif' }}>We've got you covered.</p></h1>
      </div>
      <div className="sections-container">
        <div className="left-section">
          <LeftSection />
        </div>
        <div className="right-section">
          <RightSection />
        </div>
      </div>
    </div>
  );
};

const LeftSection = () => {
  const [showAdditionalTopics, setShowAdditionalTopics] = useState(false);

  const toggleAdditionalTopics = () => {
    setShowAdditionalTopics(!showAdditionalTopics);
  };

  return (
    <div className="p1">
      <h1 style={{ textAlign: 'justify', fontFamily: 'Poppins' }}>Topics</h1>
      <p>
        <button className= "Arrow" onClick={toggleAdditionalTopics}>   &#62;</button>
        Setting Up A Child’s Trust Fund
      </p>
      {showAdditionalTopics && (
        <>
          <p>Sending Gifts to Trust Funds</p>
          <p>Managing Personal Account</p>
          <p>Account Security</p>
          <p>Tax information</p>
        </>
      )}
    </div>
  );
};

const RightSection = () => {
  return (
    <div>
      <div className="p2">
        <div className="item">
          <div className="text"><p>What Exactly Is A 529 Savings Plan?</p></div>
          <div className="line"></div>
          <button className='b'>+</button>
        </div>
        <div className="item">
          <div className="text"><p>What Are The Benefits Associated With 529 Account?</p></div>
          <div className="line"></div>
          <button className='b'>+</button>
        </div>
        <div className="item">
          <div className="text"><p>What Can My Savings Be Spent On?</p></div>
          <div className="line"></div>
          <button className='b'>+</button>
        </div>
        <div className="item">
          <div className="text"><p>What Is The Difference Between 529 And UTMA?</p></div>
          <div className="line"></div>
          <button className='b'>+</button>
        </div>
        <div className="item">
          <div className="text"><p>How Much Can I Contribute?</p></div>
          <div className="line"></div>
          <button className='b'>+</button>
        </div>
        <div className="item">
          <div className="text"><p>How Do I Transfer A 529 Account To Trust Fund Registry?</p></div>
          <div className="line"></div>
          <button className='b'>+</button>
        </div>
      </div>
    </div>
  );
};

export default Pages;
