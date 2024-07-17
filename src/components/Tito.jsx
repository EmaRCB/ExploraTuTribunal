import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tito.module.css';
import tito01 from '../assets/tito/Tito_01.png';

function Tito({ isAnimating, isClickable, onClick }) {
  return (
    <div 
      className={`${styles.character} ${isAnimating ? styles.pulsing : ''}`} 
      onClick={isClickable ? onClick : null}
    >
      <img src={tito01} alt="Tito" />
    </div>
  );
}

Tito.propTypes = {
  isAnimating: PropTypes.bool.isRequired,
  isClickable: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tito;

