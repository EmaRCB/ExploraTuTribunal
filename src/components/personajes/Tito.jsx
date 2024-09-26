import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Tito.module.css';
import tito01 from '../../assets/tito/Tito_001.png';
import tito02 from '../../assets/tito/Tito_002.png';
import hoverSound from '../../assets/sounds/tito_voice.mp3'; // Importa el archivo de sonido

function Tito({ isAnimating, isClickable, onClick }) {
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
      <img src={isHovered ? tito02 : tito01} alt="Tito" />
    </div>
  );
}

Tito.propTypes = {
  isAnimating: PropTypes.bool.isRequired,
  isClickable: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tito;
