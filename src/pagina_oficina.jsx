import './App.css';
import './pagina_oficina.css';
import './paginas.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from './components/dialog';
import Lupa from './components/lupa';
import itzelVoice from './assets/sounds/itzel_voice.mp3';
import titoVoice from './assets/sounds/tito_voice.mp3';


function Pagina_Oficina({ closeRoom }) {
  Pagina_Oficina.propTypes = {
    closeRoom: PropTypes.func.isRequired,
  };

  const [viewIndex, setViewIndex] = useState(0);
  const dialogPages = [
    {
      title: "Itzel:",
      content: "¿Y esta oficina?, ¿Qué lugar es?",
      character: "Itzel"
    },
    {
      title: "Tito:",
      content: "¡Oh! Este lugar es para que las niñas y niños como tu amigo le cuenten al Fiscal qué es lo que les  pasó.",
      character: "Tito"
    },
    {
      title: "Itzel:",
      content: "¿Qué es un Fiscal?",
      character: "Itzel"
    }
    ,
    {
      title: "Tito:",
      content: "Un Fiscal es una persona que busca toda la información para investigar lo que le pasó a las niñas y niños que vienen a este lugar, para que así puedan cuidarles.",
      character: "Tito"
    },
    {
      title: "Itzel:",
      content: "¡Wow! ¿Y por qué tenemos que hablar con un Fiscal?",
      character: "Itzel"
    },
    {
      title: "Tito:",
      content: "Es muy importante que las niñas y niños le cuenten al Fiscal lo que les pasó, porque si el Fiscal no sabe lo que pasó, no va a poder investigar para ayudarles.",
      character: "Tito"
    },
    {
      title: "Itzel:",
      content: "¡Ya entiendo! Gracias por explicarme Tito",
      character: "Itzel"
    },
    {
      title: "Tito:",
      content: "Hora de ir a otra sala",
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
    <div className='pagina_oficina_container'>
    <Lupa sala="Oficina"></Lupa>
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

export default Pagina_Oficina;