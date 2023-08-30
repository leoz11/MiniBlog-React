import React from 'react';
import './LoadingSpinner.css'; // Certifique-se de criar esse arquivo CSS para estilização

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
