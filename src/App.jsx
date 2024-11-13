import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Tito from './components/personajes/Tito.jsx';
import Itzel from './components/personajes/Itzel.jsx';
import Bienvenida from './components/cuadro-juego/escenarios/Bienvenida.jsx';
import Pasillo from './components/cuadro-juego/escenarios/pasillo.jsx';
import dialogos from './components/cuadro-juego/dialogos/dialogos.json';
import InstruccionesPasillo from './components/InstruccionesPasillo.jsx';
import InstruccionesBienvenida from './components/InstruccionesBienvenida.jsx'
import Pagina_Sala_Juegos from './components/cuadro-juego/escenarios/pagina_sala_juegos.jsx';
import Pagina_Oficina from './components/cuadro-juego/escenarios/pagina_oficina.jsx';

function App() {
  const [dialogs, setDialogs] = useState([]);
  const [currentDialogIndex, setCurrentDialogIndex] = useState(-1);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogGroups, setDialogGroups] = useState({ group1: [], group2: [] });
  const [viewIndex, setViewIndex] = useState(0);
  const [titoAnimating, setTitoAnimating] = useState(false);
  const [itzelAnimating, setItzelAnimating] = useState(false);
  const [titoClickable, setTitoClickable] = useState(false);
  const [itzelClickable, setItzelClickable] = useState(false);
  const [isTitoVisible, setIsTitoVisible] = useState(true); 
  const [isItzelVisible, setIsItzelVisible] = useState(true); 
  const [showPopup, setShowPopup] = useState(true); // ESTA LÍNEA SE AGREGÓ
  var dialog = 0;
  var groups = false;

  useEffect(() => {
    var id = 1; // Asume que siempre quieres los diálogos con id 1

    
    const bienvenidaElement = document.getElementById('Bienvenida');
    const juegosElement = document.getElementById('SalaJuegos');

    if (bienvenidaElement && window.getComputedStyle(bienvenidaElement).display === 'flex') {
      dialog = 0;
    }else if(juegosElement && window.getComputedStyle(juegosElement).display === 'flex') {
      dialog = 2;
    }else{
      groups = true;
    }


    const foundDialogs = dialogos.find(dialogo => dialogo.id === dialog);
    const foundDialogs1 = dialogos.find(dialogo => dialogo.id === 3);
    const foundDialogs2 = dialogos.find(dialogo => dialogo.id === 4);

    setDialogGroups({
      group1: foundDialogs1 ? foundDialogs1.dialogs : [],
      group2: foundDialogs2 ? foundDialogs2.dialogs : []
    });

    console.log(setDialogGroups);
    

    if (groups == true) {
      setDialogs(foundDialogs1.dialogs);
      setCurrentDialogIndex(-1);
      setInitialCharacterState(foundDialogs1.dialogs);
    } else if (foundDialogs) {
      setDialogs(foundDialogs.dialogs);
      setCurrentDialogIndex(-1);
      setInitialCharacterState(foundDialogs.dialogs);
    } else {
      setDialogs([]);
      setCurrentDialogIndex(-1);
    }
    
  
  }, [dialogos]);


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

  /*const nextRoom = () => {
    setViewIndex(dialog);
  }*/


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

  function nextRoom(sala) {
    var pasillo = document.getElementById('Pasillo');
    var salas = document.getElementById(sala);
    switch (sala) {
      case 'Pasillo':
        dialog = 1
        break;
      case 'SalaJuegos':
        dialog = 1
        break;
      default:
        dialog = 0
        break;
    }

    salas.style.display = 'flex';
    pasillo.style.display = 'none';
}

  return (
    <div className={styles.wrapper}>
      {showPopup && <InstruccionesBienvenida onClose={handlePopupClose} />} {/* ESTA LÍNEA SE AGREGÓ */}
      {isTitoVisible && (
      <div>
        <Tito isAnimating={titoAnimating} isClickable={titoClickable} onClick={handleNext} />
      </div>
      )}
      <div className={`${styles.gameContainer} ${styles.centerContent}`} style={{ display: "none" }} id='Bienvenida'>
            <Bienvenida
              dialog={currentDialog}
              onNext={handleNext}
              showDialog={showDialog}
              onCloseDialog={handleCloseDialog}
              isLastDialog={isLastDialog}
              nextRoom={() => nextRoom('SalaJuegos')}
            />
      </div>
      <div className={`${styles.gameContainer} ${styles.centerContent}`} style={{ display: "none" }} id='Pasillo'>
        <Pasillo
          nextRoom={() => nextRoom('SalaJuegos')}
        />
      </div>
      <div className={`${styles.gameContainer} ${styles.centerContent}`} style={{ display: "none" }} id='SalaJuegos'>
        <Pagina_Sala_Juegos
              dialog={currentDialog}
              onNext={handleNext}
              showDialog={showDialog}
              onCloseDialog={handleCloseDialog}
              isLastDialog={isLastDialog}
              nextRoom={nextRoom}
            />
      </div>
      <div className={`${styles.gameContainer} ${styles.centerContent}`} style={{ display: "flex" }} id='SalaOficina'>
        <Pagina_Oficina
              dialogGroups={Object.values(dialogGroups)}
              onNext={handleNext}
              showDialog={true}
              onCloseDialog={handleCloseDialog}
              isLastDialog={false}
              nextRoom={nextRoom}
            />
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
