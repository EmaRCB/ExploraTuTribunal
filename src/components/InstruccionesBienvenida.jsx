import videoSrc from '../assets/videos/Bienvenida-instrucciones.mp4';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './InstruccionesBienvenida.module.css';
import forwardArrow from '../assets/right-arrow.png';

const InstruccionesBienvenida = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        
        <h2>Para avanzar en el juego, haz clic en los objetos o personajes que <span className={styles.pulseText}>pulsen</span></h2>
        <div className={styles.videoContainer}>
          <video className={`${styles.video} ${styles.exampleVideo}`} autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <img 
          src={forwardArrow} 
          alt="Forward Arrow" 
          className={styles.forwardArrow} 
          onClick={onClose}
        />
      </div>
    </div>
  );
};

InstruccionesBienvenida.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default InstruccionesBienvenida;
