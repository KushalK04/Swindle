import React from 'react';
import styles from './popup1.module.css'

function Overlay({ imageSrc, onClose }) {
  return (
    <div className="overlay">
      <div className="overlay__content">
        <img src={imageSrc} alt="Overlay" />
      </div>
    </div>
  );
}

export default Overlay;