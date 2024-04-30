import './App.css';
import './pagina_bienvenida.css';
import './paginas.css';
import { useState } from 'react';
import Dialog from './components/dialog';


function Pagina_Prueba() {

  const [viewIndex, setViewIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const dialogPages = [
    {
      title: "Tito:",
      content: "¡Hola Itzel! ¡Bienvenida a nuestro tribunal de justicia! ¿Qué haces acá?",
      character: "Tito"
    },
    {
      title: "Itzel:",
      content: "Hola, Tito!, Un amiguito sigue un proceso legal y quiero saber cómo es, para poder comprender lo que pasa y ayudarlo!",
      character: "Itzel"
    },
    {
      title: "Tito:",
      content: "Hoy vamos a tener una visita especial para que puedan aprender más sobre cómo funciona nuestro sistema legal. ¡Yo te puedo acompañar! ¡Vamos!",
      character: "Tito"
    },
    {
      title: "Tito:",
      content: "Aquí se investigan los hechos que se relacionan con delitos de muchos tipos, para garantizar que los ciudadanos, incluyendo niñas y niños, reciban justician cuando han sido victimas de algún delito.",
      character: "Itzel"
    }
  ];


  const toggleView = () => {
    setViewIndex((prevIndex) => (prevIndex + 1) % dialogPages.length);
    const nextIndex = viewIndex + 1;

    if (nextIndex === dialogPages.length) {
      alert("xd");
      toggleDialog();

    } else {
      setCurrentPage(0);
    }
  };

  const toggleDialog = () => {
    const nextIndex = (currentPage + 1) % dialogPages.length;
    setCurrentPage(nextIndex);
  };

  return (
    <div className='pagina_container'>
    <div className="character" id='tito'></div>
    <div className="character" id='itzel'></div>
    <div className="dialog_box">
      <Dialog
            className="dialog"
            title={dialogPages[viewIndex].title}
            content={dialogPages[viewIndex].content}
            character={dialogPages[viewIndex].character}
            onToggle={toggleView}
            currentPage={currentPage}
            pages={dialogPages}
          />
    </div>
    </div>
  );
}

export default Pagina_Prueba;