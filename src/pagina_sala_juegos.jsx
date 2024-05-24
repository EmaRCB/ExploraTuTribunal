import './App.css';
import './pagina_sala_juegos.css';
import './paginas.css';
import { useState } from 'react';
import Cookies from 'js-cookie';
import Dialog from './components/dialog';
import itzelVoice from './assets/sounds/itzel_voice.mp3';
import titoVoice from './assets/sounds/tito_voice.mp3';


function Pagina_Sala_Juegos() {

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
    <div className='pagina_sala_juegos_container'>
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
    </div>
  );
}

export default Pagina_Sala_Juegos;