import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Bienvenida.module.css';
import Dialogo from '../dialogos/Dialogo';
import smallImage from '../../../assets/photo_camera.svg'; // La imagen pequeña que servirá como botón
import realImage from '../../../assets/bg/salasReales/sala_tribunal.png'; // La imagen real del lugar
import closeIcon from '../../../assets/close-one.png'; // La imagen de la tache
import dialogSound from '../../../assets/sounds/dialog_sound.mp3'; // Importa el archivo de sonido

function Bienvenida({ dialog, onNext, showDialog, onCloseDialog, isLastDialog, nextRoom }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showDialog && dialog) {
      const audio = new Audio(dialogSound);
      audio.play();
    }
  }, [showDialog, dialog]);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.image}>
      {dialog && showDialog && (
        <Dialogo
          character={dialog.character}
          text={dialog.content}
          OKbutton={false} // Puedes ajustar esto según sea necesario
          onClose={onCloseDialog}
        />
      )}
      {isLastDialog && (
        <button className={styles.continueButton} onClick={nextRoom}>Comenzar</button> //aqui!!
      )}
      {false && <button className={styles.nextButton} onClick={onNext}>Next</button>}

      <img src={smallImage} alt="Small Button" className={styles.smallButton} onClick={handleOpenPopup} />

      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <button className={styles.closeButton} onClick={handleClosePopup}>
              <img src={closeIcon} alt="Close" className={styles.closeIcon} />
            </button>
            <img src={realImage} alt="Real Place" className={styles.realImage} />
          </div>
        </div>
      )}
    </div>
  );
}

Bienvenida.propTypes = {
  dialog: PropTypes.object,
  onNext: PropTypes.func.isRequired,
  showDialog: PropTypes.bool.isRequired,
  onCloseDialog: PropTypes.func.isRequired,
  isLastDialog: PropTypes.bool.isRequired,
  nextRoom: PropTypes.func.isRequired
};

Bienvenida.defaultProps = {
  dialog: null,
};

export default Bienvenida;
