import './styles/App.css';
import './styles/pagina_sala_juegos.css';
import './styles/paginas.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

import Dialogo from '../dialogos/Dialogo';
import Lupa from './lupa';
import Tito from '../../personajes/Tito.jsx';
import Itzel from '../../personajes/Itzel.jsx';

import itzelVoice from '../../../assets/sounds/itzel_voice.mp3';
import titoVoice from '../../../assets/sounds/tito_voice.mp3';


function Pagina_Sala_Juegos({ { dialog, onNext, showDialog, onCloseDialog, isLastDialog, closeRoom } }) {
  Pagina_Sala_Juegos.propTypes = {
    closeRoom: PropTypes.func.isRequired,
  };

  const [viewIndex, setViewIndex] = useState(0);
  const [isTitoAnimating, setTitoAnimating] = useState(true);
  const [isItzelAnimating, setItzelAnimating] = useState(false);

  useEffect(() => {
    if (showDialog && dialog) {
      const audio = new Audio(dialogSound);
      audio.play();
    }
  }, [showDialog, dialog]);
  
  const dialogPages = [
    {
      title: "Tito:",
      content: "Esta es la sala de juegos. ¡Aquí hay muchos juguetes con los que puedes jugar mientras pasamos al siguiente lugar!",
      character: "Tito"
    },
    {
      title: "Itzel:",
      content: "¡Wow! Me gusta mucho cómo se ve",
      character: "Itzel"
    }
    ,
    {
      title: "Tito:",
      content: "Tenemos muchos juguetes y actividades para que tu amigo se divierta mientras espera",
      character: "Tito"
    },
    {
      title: "Itzel:",
      content: "¡Wow! Pero, ¿con quién va a jugar?",
      character: "Itzel"
    },
    {
      title: "Tito:",
      content: "¡En este lugar hay muchos mas niñas y niños como tú! Así que no estará solo",
      character: "Tito"
    },
    {
      title: "Itzel:",
      content: "¡Qué divertido!",
      character: "Itzel"
    },
    {
      title: "Tito:",
      content: "Así es. Este lugar esta hecho para hacer tu visita más cómoda.",
      character: "Tito"
    },
    {
      title: "Tito:",
      content: "¡Pasemos a la siguiente sala!",
      character: "Tito"
    }
  ];

  

  return (
    <div className='pagina_sala_juegos_container'>
      <div className="object" id='pelota'></div>
      <div className="object" id='oso'></div>
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

export default Pagina_Sala_Juegos;