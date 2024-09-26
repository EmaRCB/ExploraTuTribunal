import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Tito from './components/personajes/Tito.jsx';
import Itzel from './components/personajes/Itzel.jsx';
import Bienvenida from './components/cuadro-juego/escenarios/Bienvenida.jsx';
import Pasillo from './components/cuadro-juego/escenarios/pasillo.jsx';
import dialogos from './components/cuadro-juego/dialogos/dialogos.json';
import InstruccionesPasillo from './components/InstruccionesPasillo.jsx';
import InstruccionesBienvenida from './components/InstruccionesBienvenida.jsx'

function App() {
  const [dialogs, setDialogs] = useState([]);
  const [currentDialogIndex, setCurrentDialogIndex] = useState(-1);
  const [showDialog, setShowDialog] = useState(false);
  const [viewIndex, setViewIndex] = useState(0);
  const [titoAnimating, setTitoAnimating] = useState(false);
  const [itzelAnimating, setItzelAnimating] = useState(false);
  const [titoClickable, setTitoClickable] = useState(false);
  const [itzelClickable, setItzelClickable] = useState(false);
  const [isTitoVisible, setIsTitoVisible] = useState(true); 
  const [isItzelVisible, setIsItzelVisible] = useState(true); 
  const [showPopup, setShowPopup] = useState(true); // ESTA LÍNEA SE AGREGÓ

  useEffect(() => {
    const id = 1; // Asume que siempre quieres los diálogos con id 1
    const foundDialogs = dialogos.find(dialogo => dialogo.id === id);
    if (foundDialogs) {
      setDialogs(foundDialogs.dialogs);
      setCurrentDialogIndex(-1);
      setInitialCharacterState(foundDialogs.dialogs);
    } else {
      setDialogs([]);
      setCurrentDialogIndex(-1);
    }
  }, []);


  const setInitialCharacterState = (dialogs) => {
    if (dialogs.length > 0) {
      const firstCharacter = dialogs[0].character;
      if (firstCharacter === 'Tito') {
        setTitoAnimating(true);
        setItzelAnimating(false);
        setTitoClickable(true);
        setItzelClickable(false);
      } else {
        setTitoAnimating(false);
        setItzelAnimating(true);
        setTitoClickable(false);
        setItzelClickable(true);
      }
    }
  };

  function nextRoom() {
    setViewIndex((prevIndex) => (prevIndex + 1) % 4);
  }


  const handleNext = () => {
    if (currentDialogIndex < dialogs.length - 1) {
      const nextIndex = currentDialogIndex + 1;
      setCurrentDialogIndex(nextIndex);
      setShowDialog(true); // Mostrar el cuadro de diálogo
      updateCharacterState(nextIndex);
    } else {
      // Al llegar al último diálogo, detener ambas animaciones y desactivar clics
      setTitoAnimating(false);
      setItzelAnimating(false);
      setTitoClickable(false);
      setItzelClickable(false);
    }
  };

  const handleCloseDialog = () => {
    setShowDialog(false); // Cerrar el cuadro de diálogo
  };

  const updateCharacterState = (index) => {
    if (index + 1 < dialogs.length) {
      const nextCharacter = dialogs[index + 1].character;
      if (nextCharacter === 'Tito') {
        setTitoAnimating(true);
        setItzelAnimating(false);
        setTitoClickable(true);
        setItzelClickable(false);
      } else {
        setTitoAnimating(false);
        setItzelAnimating(true);
        setTitoClickable(false);
        setItzelClickable(true);
      }
    } else {
      // Al llegar al último diálogo, detener ambas animaciones y desactivar clics
      setTitoAnimating(false);
      setItzelAnimating(false);
      setTitoClickable(false);
      setItzelClickable(false);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false); //ESTA LÍNEA SE AGREGÓ
  };

  const currentDialog = dialogs[currentDialogIndex];
  const isLastDialog = currentDialogIndex === dialogs.length - 1;

  return (
    <div className={styles.wrapper}>
      {showPopup && <InstruccionesBienvenida onClose={handlePopupClose} />} {/* ESTA LÍNEA SE AGREGÓ */}
      {isTitoVisible && (
      <div>
        <Tito isAnimating={titoAnimating} isClickable={titoClickable} onClick={handleNext} />
      </div>
      )}
      <div className={`${styles.gameContainer} ${styles.centerContent}`}>
          {viewIndex === 0 && (
              <Bienvenida
                dialog={currentDialog}
                onNext={handleNext}
                showDialog={showDialog}
                onCloseDialog={handleCloseDialog}
                isLastDialog={isLastDialog}
                nextRoom={nextRoom}
              />
              
            )}
            {viewIndex === 1 && 
              (
                <Pasillo/>
              )    
            }
      </div>
      {isItzelVisible && (
      <div>
        <Itzel isAnimating={itzelAnimating} isClickable={itzelClickable} onClick={handleNext} />
      </div>
      )}
    </div>
  );
}

export default App;
