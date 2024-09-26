import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Itzel.module.css';
import itzel01 from '../../assets/tito/Itzel_001.png';
import itzel02 from '../../assets/tito/Itzel_002.png';
import hoverSound from '../../assets/sounds/itzel_voice.mp3'; // Importa el archivo de sonido

function Itzel({ isAnimating, isClickable, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    const audio = new Audio(hoverSound);
    audio.play();
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className={`${styles.character} ${isAnimating && !isHovered ? styles.pulsing : ''}`} 
      onClick={isClickable ? onClick : null}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={isHovered ? itzel02 : itzel01} alt="Itzel" />
    </div>
  );
}

Itzel.propTypes = {
  isAnimating: PropTypes.bool.isRequired,
  isClickable: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Itzel;
