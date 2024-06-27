import './App.css';
import './pagina_bienvenida.css';
import './paginas.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from './components/dialog';
import Lupa from './components/lupa';
import itzelVoice from './assets/sounds/itzel_voice.mp3';
import titoVoice from './assets/sounds/tito_voice.mp3';

function Pagina_Bienvenida({nextRoom}) {
  Pagina_Bienvenida.propTypes = {
    nextRoom: PropTypes.func.isRequired,
  };
  const [viewIndex, setViewIndex] = useState(0);

  const dialogPages = [
    {
      title: "Tito:",
      content: "¡Hola Itzel! ¡Bienvenida a la Fiscalía General del Estado de Yucatán! ¿Qué haces acá?",
      character: "Tito"
    },
    {
      title: "Itzel:",
      content: "¡Hola Tito! Un amigo está en un proceso legal y quiero saber cómo es, ¡para poder entender lo que pasa y ayudarlo!",
      character: "Itzel"
    },
    {
      title: "Tito:",
      content: "¡Yo te puedo acompañar! ¡Vamos! Aquí es donde se hacen cumplir las leyes.",
      character: "Tito"
    },
    {
      title: "Tito:",
      content: "Hoy vamos a tener una visita especial para que puedas aprender más sobre cómo funciona nuestro Sistema Legal.",
      character: "Tito"
    },
    {
      title: "Tito:",
      content: "Las leyes, son reglas que las personas tenemos que obedecer, sirven para cuidarnos. Y el Sistema Legal, son todos estos lugares en donde cumplimos las leyes, en donde están todas las personas que nos van a ayudar.",
      character: "Tito"
    },
    {
      title: "Tito:",
      content: "Un delito es cuando una persona lastima a una niña o un niño y le hace daño. Este lugar se llama Fiscalía, aquí se investigan los delitos para poder cuidar a las niñas y los niños y que se haga justicia.",
      character: "Tito"
    },
    {
      title: "Itzel:",
      content: "¡Uay! La Fiscalía muy grande.",
      character: "Itzel"
    },
    {
      title: "Tito:",
      content: "No te preocupes, no estarás sola. Juntos vamos a ver los diferentes lugares que puedes encontrar aquí y vamos a conocer a las personas que le ayudarán a tu amigo , también vamos a aprender la importancia de la justicia y los derechos que tenemos.",
      character: "Tito"
    },
    {
      title: "Tito:",
      content: "¡Vamos a comenzar esta emocionante aventura!",
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
    <div className='pagina_1_container'>
        
        <div className="character" id='tito' onClick={toggleDialog}></div>
        <div className="character" id='itzel' onClick={toggleDialog}></div>
        <div className="dialog_box">
          <Dialog
            className="dialog"
            title={dialogPages[viewIndex].title}
            content={dialogPages[viewIndex].content}
            character={dialogPages[viewIndex].character}
            onToggle={toggleView}
          />
          
          {(viewIndex === dialogPages.length - 1) ? (
            <button className='next_button' onClick={nextRoom}>Finish</button>
          ): <button className='next_button' onClick={toggleDialog}><img src="../imagenes/flecha-verde.png" height={25} alt="flecha" /></button>}
      
      </div>
      <Lupa sala="Entrada"></Lupa>
    </div>
  );
}

export default Pagina_Bienvenida;
