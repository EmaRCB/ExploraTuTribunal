import React from 'react';
import PropTypes from 'prop-types';
import styles from './FotoReal.module.css';

const FotoReal = ({ src, alt, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <img src={src} alt={alt} className={styles.image} />
      </div>
    </div>
  );
};

FotoReal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

FotoReal.defaultProps = {
  alt: 'Real Image',
};

export default FotoReal;
