import './App.css';
import './pagina_sala_juegos.css';
import './paginas.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from './components/dialog';
import Lupa from './components/lupa';
import itzelVoice from './assets/sounds/itzel_voice.mp3';
import titoVoice from './assets/sounds/tito_voice.mp3';


function Pagina_Sala_Juegos({ closeRoom }) {
  Pagina_Sala_Juegos.propTypes = {
    closeRoom: PropTypes.func.isRequired,
  };

  const [viewIndex, setViewIndex] = useState(0);
  const [viewPage, setPageIndex] = useState(0);

  const dialogPages1 = [
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

  const toggleDialog1 = () => {
    let beat = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a');
    beat.play();
    console.log(viewPage);
    setPageIndex((prevDialog) => (prevDialog + 1) % dialogPages1.length);
    
  };

  const toggleView = () => {
    let beat = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a');
    beat.play();
    setViewIndex((prevIndex) => (prevIndex + 1) % 9);
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
    <Lupa sala="SalaJuegos"></Lupa>
    {viewIndex === 0 && (
      <div className='story_container' id='story_view1'>
        <div className="character" id='tito' onClick={handleTitoClick}></div>
        <div className="character" id='itzel' onClick={handleItzelClick}></div>
        <div className="dialog_box">
            <Dialog
              className="dialog"
              title={dialogPages1[viewPage].title}
              content={dialogPages1[viewPage].content}
              character={dialogPages1[viewPage].character}
              onToggle={toggleView}
            />
            
            {(viewPage === dialogPages1.length - 1) ? (
                <button className='next_button' onClick={toggleView}>Comenzar</button>
                ): <button className='next_button' onClick={toggleDialog1}>Siguiente</button>}
          </div>
      </div>
    )}
    {viewIndex === 1 && (
      <div className='story_container' id='story_view2'>
        <h1>ss</h1>
      </div>
    )}
    
    </div>
  );
}

export default Pagina_Sala_Juegos;