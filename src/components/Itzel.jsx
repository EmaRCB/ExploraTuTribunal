import React from 'react';
import PropTypes from 'prop-types';
import styles from './Itzel.module.css';
import itzel01 from '../assets/tito/Itzel_01.png';

function Itzel({ isAnimating, isClickable, onClick }) {
  return (
    <div 
      className={`${styles.character} ${isAnimating ? styles.pulsing : ''}`} 
      onClick={isClickable ? onClick : null}
    >
      <img src={itzel01} alt="Itzel" />
    </div>
  );
}

Itzel.propTypes = {
  isAnimating: PropTypes.bool.isRequired,
  isClickable: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Itzel;

