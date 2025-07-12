// src/components/Loader.js
import React from 'react';
import loadingGif from '../assets/load-.gif'; // Put your GIF inside /src/assets
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={loadingGif} alt="Loading..." className="loader-gif" />
    </div>
  );
};

export default Loader;
