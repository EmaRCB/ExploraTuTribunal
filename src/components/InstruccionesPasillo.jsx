
import videoSrc from '../assets/videos/Pasillo-instrucciones.mp4'; 
import React from 'react';
import PropTypes from 'prop-types';
import styles from './InstruccionesPasillo.module.css';

const InstruccionesPasillo = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2>Recorre el pasillo deslizandolo y elige una sala dando clic en la puerta</h2>
        <div className={styles.videoContainer}>
          <video className={styles.video} autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <button className={styles.okButton} onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

InstruccionesPasillo.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default InstruccionesPasillo;
