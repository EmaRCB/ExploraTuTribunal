import './App.css';
import './pagina_sala_juegos.css';
import './paginas.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from './components/dialog';
import itzelVoice from './assets/sounds/itzel_voice.mp3';
import titoVoice from './assets/sounds/tito_voice.mp3';
import pelota from './assets/bg/objetos/pelota.png';
import osoPeluche from './assets/bg/objetos/oso.png';


function Pagina_Sala_Juegos({ closeRoom }) {
  Pagina_Sala_Juegos.propTypes = {
    closeRoom: PropTypes.func.isRequired,
  };

  const [viewIndex, setViewIndex] = useState(0);
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
      character: "Tito"
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
    <div className='pagina_sala_juegos_container'>
    <div className="character" id='tito' onClick={handleTitoClick}></div>
    <div className="character" id='itzel' onClick={handleItzelClick}></div>
    <div className="object" id='pelota'></div>
    <div className="object" id='oso'></div>
    <div className="dialog_box">
        <Dialog
          className="dialog"
          title={dialogPages[viewIndex].title}
          content={dialogPages[viewIndex].content}
          character={dialogPages[viewIndex].character}
          onToggle={toggleView}
        />
        
        {(viewIndex === dialogPages.length - 1) ? (
          <button className='next_button' onClick={closeRoom}>Finish</button>
        ): <button className='next_button' onClick={toggleDialog}>Next</button>}
      </div>
    </div>
  );
}

export default Pagina_Sala_Juegos;