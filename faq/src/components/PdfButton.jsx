// PdfButton.js
import React from 'react';
import "../css/faq.css"

const PdfButton = ({ url, label }) => {
  const handleButtonClick = () => {
    window.location.href = url;
  };

  return (
    <button className="purple-button" onClick={handleButtonClick}>
      {label}
    </button>
  );
};

export default PdfButton;
