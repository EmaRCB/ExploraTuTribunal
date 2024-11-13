import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Sala-Oficina.module.css';
import Dialogo from '../dialogos/Dialogo';
import smallImage from '../../../assets/photo_camera.svg'; // La imagen pequeña que servirá como botón
import realImage from '../../../assets/bg/salasReales/sala_tribunal.png'; // La imagen real del lugar
import closeIcon from '../../../assets/close-one.png'; // La imagen de la tache
import dialogSound from '../../../assets/sounds/dialog_sound.mp3'; // Importa el archivo de sonido
import FiscalImg from '../../../assets/tito/personajes/TA_Fiscal.png';
import blank from '../../../assets/bg/blank.png';

import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

function Pagina_Oficina({ dialogGroups, onNext, showDialog, onCloseDialog, isLastDialog, nextRoom }) {
  const [showPopup, setShowPopup] = useState(false);
  const [showStory, setStory] = useState(true);
  const [showGame, setGame] = useState(false);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0); // Para controlar qué grupo de diálogos se está mostrando
  const [currentDialogIndex, setCurrentDialogIndex] = useState(0); // Para controlar qué diálogo dentro del grupo se está mostrando

  // Obtener el diálogo actual
  const currentDialog = dialogGroups?.[currentGroupIndex]?.[currentDialogIndex] || null;

  useEffect(() => {
    
    console.log("dialogGroups:", dialogGroups);

    if (showDialog && currentDialog) {
      const audio = new Audio(dialogSound);
      audio.play();
    }
  }, [showDialog, currentDialog, dialogGroups]);

  const handleNextDialog = () => {
    console.log("Advancing dialog: currentDialogIndex:", currentDialogIndex, " currentGroupIndex:", currentGroupIndex);

    if (currentDialogIndex < dialogGroups[currentGroupIndex].length - 1) {
      setCurrentDialogIndex(currentDialogIndex + 1); // Avanza al siguiente diálogo en el mismo grupo
    } else if (currentGroupIndex < dialogGroups.length - 1) {
      setStory(false);
      setGame(true);
      
      //setCurrentGroupIndex(currentGroupIndex + 1); // Avanza al siguiente grupo de diálogos
      //setCurrentDialogIndex(0); // Reinicia el índice del diálogo
      //showDialog(false);
    } else {
      console.log('Todos los diálogos han terminado');
    }
  };


  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const itemEnters = () => {
    window.alert("xdd");
    console.log("Caja de doctora");
    let beat = new Audio('http://starmen.net/mother1/music/08%20-%20MOTHER%20-%20You%20Won.mp3');
    beat.play();
    setGame(false);
    setStory(true);
    setCurrentGroupIndex(currentGroupIndex + 1); // Avanza al siguiente grupo de diálogos
    setCurrentDialogIndex(0); // Reinicia el índice del diálogo
  }

  const state = {
    draggableVisibility: "block"
  };

  return (
    <div className={styles.image}>
      {currentDialog && showDialog && showStory && (
        <div className={styles.storyContainer}>
          <Dialogo
            character={currentDialog.character}
            text={currentDialog.content}
            OKbutton={false} // Puedes ajustar esto según sea necesario
            onClose={onCloseDialog}
          />
        </div>
        
      )}
      {showGame && (
        <div className={styles.gameContainer}>
          <div className={styles.character}>
            <DragDropContainer
              targetKey="doctora_target"
              style={{ display: state.draggableVisibility }}
              dropData={{ type: "Doctora" }}
                        
            >
              <img
                src={FiscalImg}
                width="150px"
                height="270px"
                alt=""
              />
              </DragDropContainer>
          </div>
          <div className={styles.dropArea}>
          <DropTarget
                    id="my_target"
                    targetKey="doctora_target"
                    onHit={function () {
                      itemEnters();
                      
                    }}
                    >
                    <img
                        src={blank}
                        height="350px"
                        width="150px"
                        alt=""
                    />
                </DropTarget>
          </div>
          <div>

          </div>
        </div>
      )}
      {isLastDialog && (
        <button className={styles.continueButton} onClick={nextRoom}>Comenzar</button>
      )}
      
      {false && currentDialog && (
        <button className={styles.nextButton} onClick={handleNextDialog}>Next</button>
      )}

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

Pagina_Oficina.propTypes = {
  dialogGroups: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        character: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      })
    )
  ).isRequired,
  onNext: PropTypes.func.isRequired,
  showDialog: PropTypes.bool.isRequired,
  onCloseDialog: PropTypes.func.isRequired,
  isLastDialog: PropTypes.bool.isRequired,
  nextRoom: PropTypes.func.isRequired
};

export default Pagina_Oficina;
