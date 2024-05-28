import './App.css';
import './pagina_sala_psic.css';
import './paginas.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import Dialog from './components/dialog';
import itzelVoice from './assets/sounds/itzel_voice.mp3';
import titoVoice from './assets/sounds/tito_voice.mp3';


function Pagina_Sala_Psicologia({ closeRoom }) {
  Pagina_Sala_Psicologia.propTypes = {
    closeRoom: PropTypes.func.isRequired,
  };

  const [viewIndex, setViewIndex] = useState(0);
  const dialogPages = [
    {
      title: "Tito:",
      content: "¡Bienvenida a la sala de psicología!",
      character: "Tito"
    },
    {
      title: "Itzel:",
      content: "¿Qué es eso?",
      character: "Itzel"
    },
    {
      title: "Tito:",
      content: "¡Aquí puedes platicar con una psicóloga! Las psicólogas y psicólogos son personas que platican con niñas y niños como tú, para poder entender qué sienten y cómo ayudarles. ",
      character: "Tito"
    },
    {
      title: "Tito:",
      content: "Tu amigo va a poder hablar de cómo se siente y de lo que piensa",
      character: "Tito"
    },
    {
      title: "Itzel:",
      content: "¡Oh! Eso es importante",
      character: "Itzel"
    },
    {
      title: "Tito:",
      content: "Sí, este es un lugar de confianza. Aquí pueden ayudarte a entender tus emociones.",
      character: "Tito"
    },
    {
      title: "Itzel:",
      content: "¡Wow!  espero que puedan ayudar a todas las niñas y niños que vengan a este lugar.",
      character: "Itzel"
    },
    {
      title: "Tito:",
      content: "¡Claro! Bueno, sigamos",
      character: "Tito"
    }
  ];

  const toggleDialog = () => {
    let beat = new Audio('https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav');
    beat.play();
    setViewIndex((prevIndex) => (prevIndex + 1) % dialogPages.length);
  };

  const toggleView = () => {
    alert("Fin.");
    // Reset the dialog index to the first page
    Cookies.set('changeCookie', '1');
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
    <div className='pagina_sala_psic_container'>
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
          <button className='next_button' onClick={toggleView}>Finish</button>
        ): <button className='next_button' onClick={toggleDialog}>Next</button>}
      </div>
      <button onClick={closeRoom} className='back_to_pasillo'>Back to Pasillo</button>
    </div>
  );
}

export default Pagina_Sala_Psicologia;