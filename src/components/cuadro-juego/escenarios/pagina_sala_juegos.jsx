import './styles/App.css';
import './styles/paginas.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Sala-Juegos.module.css';
import Dialogo from '../dialogos/Dialogo';
import smallImage from '../../../assets/photo_camera.svg'; // La imagen pequeña que servirá como botón
import realImage from '../../../assets/bg/salasReales/sala_juegos.png'; // La imagen real del lugar
import closeIcon from '../../../assets/close-one.png'; // La imagen de la tache
import dialogSound from '../../../assets/sounds/dialog_sound.mp3'; // Importa el archivo de sonido


function Pagina_Sala_Juegos({ dialog, onNext, showDialog, onCloseDialog, isLastDialog, nextRoom }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    console.log("dialog:", dialog);
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
      <div className={styles.pelota} ></div>
      <div className={styles.oso} ></div>
      {dialog && showDialog && (
        <Dialogo
          character={dialog.character}
          text={dialog.content}
          OKbutton={false} // Puedes ajustar esto según sea necesario
          onClose={onCloseDialog}
        />
      )}
      {isLastDialog && ( 
        <button className={styles.continueButton} onClick={nextRoom}>Continuar</button> //aqui!!
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

Pagina_Sala_Juegos.propTypes = {
  dialog: PropTypes.object,
  onNext: PropTypes.func.isRequired,
  showDialog: PropTypes.bool.isRequired,
  onCloseDialog: PropTypes.func.isRequired,
  isLastDialog: PropTypes.bool.isRequired,
  nextRoom: PropTypes.func.isRequired
};

Pagina_Sala_Juegos.defaultProps = {
  dialog: null,
};

export default Pagina_Sala_Juegos;