import './App.css';
import './pagina_oficina.css';
import './paginas.css';
import { useState } from 'react';
import Cookies from 'js-cookie';
import Dialog from './components/dialog';


function Pagina_Oficina() {

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
    setViewIndex((prevIndex) => (prevIndex + 1) % dialogPages.length);
  };

  const toggleView = () => {
    alert("Fin.");
    // Reset the dialog index to the first page
    Cookies.set('changeCookie', '1');
    setViewIndex(0);
  };

  return (
    <div className='pagina_oficina_container'>
    <div className="character" id='tito'></div>
    <div className="character" id='itzel'></div>
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

export default Pagina_Oficina;