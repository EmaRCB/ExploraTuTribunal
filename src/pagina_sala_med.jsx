import './App.css';
import './pagina_sala_med.css';
import './paginas.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from './components/dialog';
import Lupa from './components/lupa';
import itzelVoice from './assets/sounds/itzel_voice.mp3';
import titoVoice from './assets/sounds/tito_voice.mp3';


function Pagina_Sala_Medicina({ closeRoom }) {
  Pagina_Sala_Medicina.propTypes = {
    closeRoom: PropTypes.func.isRequired,
  };

  const [viewIndex, setViewIndex] = useState(0);
  const dialogPages = [
    {
      title: "Tito:",
      content: "Bienvenida a la sala de medicina. Aquí estarás con una doctora o un doctor que te van a ayudar.",
      character: "Tito"
    },
    {
      title: "Itzel:",
      content: "Pero me dan miedo venir al doctor. ¡No me gustan las inyecciones!",
      character: "Itzel"
    }
    ,
    {
      title: "Tito:",
      content: "No te preocupes Itzel, ¡aquí no ponen inyecciones!",
      character: "Tito"
    },
    {
      title: "Tito:",
      content: "La doctora va a revisar a tu amigo para ver si hay algo que le duele y lo puedan curar.",
      character: "Tito"
    },
    {
      title: "Itzel:",
      content: "¡Ah! Es importante",
      character: "Itzel"
    },
    {
      title: "Tito:",
      content: "Así es. Igual es importante que le digas dónde te duele para saber cómo ayudarte.",
      character: "Tito"
    },
    {
      title: "Itzel:",
      content: "¡Entendido!",
      character: "Itzel"
    },
    {
      title: "Tito:",
      content: "¡Qué bien! Vamos a explorar otro lugar",
      character: "Tito"
    }
  ];

  const toggleDialog = () => {
    let beat = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a');
    beat.play();
    setViewIndex((prevIndex) => (prevIndex + 1) % dialogPages.length);
  };

  const toggleView = () => {
    let beat = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a');
    beat.play();
    setViewIndex(0);
  };

  const handleTitoClick = () => {
    new Audio(titoVoice).play().catch(error => {
      console.error('Error playing audio:', error);
    });
  };

  const handleItzelClick = () => {
    new Audio(itzelVoice).play().catch(error => {
      console.error('Error playing audio:', error);
    });
  };

  return (
    <div className='pagina_sala_med_container'>
    <Lupa sala="Medicina"></Lupa>
    <div className="character" id='tito' onClick={handleTitoClick}></div>
    <div className="character" id='itzel' onClick={handleItzelClick}></div>
    <div className="dialog_box">
        <Dialog
          className="dialog"
          title={dialogPages[viewIndex].title}
          content={dialogPages[viewIndex].content}
          character={dialogPages[viewIndex].character}
          onToggle={toggleView}
        />
        
        {(viewIndex === dialogPages.length - 1) ? (
          <button onClick={closeRoom} className='next_button'>Volver</button>
        ): <button className='next_button' onClick={toggleDialog}>Next</button>}
      </div>
    </div>
  );
}

export default Pagina_Sala_Medicina;