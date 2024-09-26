import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dialogo.module.css';
import titoHead from '../../../assets/Tito_Head.png';
import itzelHead from '../../../assets/Itzel_Head.png';

function Dialogo({ character, text, OKbutton, onClose }) {
  const getBackgroundColor = () => {
    switch (character) {
      case 'Tito':
        return '#F3FCB1';
      case 'Itzel':
        return '#F7A9A8';
      default:
        return 'white';
    }
  };

  const getCharacterImage = () => {
    switch (character) {
      case 'Tito':
        return titoHead;
      case 'Itzel':
        return itzelHead;
      default:
        return null;
    }
  };

  return (
    <div className={styles.dialog} style={{ backgroundColor: getBackgroundColor() }}>
      <button className={styles.closeButton} onClick={onClose}>×</button>
      <h2>
        {getCharacterImage() && <img src={getCharacterImage()} alt={character} className={styles.characterImage} />}
        {character}
      </h2>
      <p>{text}</p>
      {OKbutton && <button className={styles.okButton}>OK</button>}
    </div>
  );
}

Dialogo.propTypes = {
  character: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  OKbutton: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Dialogo;
