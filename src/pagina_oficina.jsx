import './App.css';
import './pagina_oficina.css';
import './paginas.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

import Dialog from './components/dialog';
import Lupa from './components/lupa';
import Tito from './components/Tito';
import Itzel from './components/Itzel';
import FiscalImg from './assets/tito/personajes/TA_Fiscal.png';
import blank from './assets/bg/blank.png';
import itzelVoice from './assets/sounds/itzel_voice.mp3';
import titoVoice from './assets/sounds/tito_voice.mp3';


function Pagina_Oficina({ closeRoom }) {
  Pagina_Oficina.propTypes = {
    closeRoom: PropTypes.func.isRequired,
  };

  const [viewIndex, setViewIndex] = useState(0);
  const [viewPage, setPageIndex] = useState(0);
  const [isTitoAnimating, setTitoAnimating] = useState(false);
  const [isItzelAnimating, setItzelAnimating] = useState(false);

  const dialogPages1 = [
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
      title: "Tito:",
      content: "¿En qué lugar podemos poner al fiscal?",
      character: "Tito"
    }
  ];

  const dialogPages2 = [
    {
      title: 'Tito:',
      content: "¡Muy bien! Ahí va el Fiscal",
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

  const toggleDialog1 = () => {
    let beat = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a');
    beat.play();
    console.log(viewPage);
    setPageIndex((prevDialog) => (prevDialog + 1) % dialogPages1.length);
  };

  const toggleDialog2 = () => {
    let beat = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a');
    beat.play();
    console.log(viewPage);
    setPageIndex((prevDialog) => (prevDialog + 1) % dialogPages2.length);
  };


  const toggleView = () => {
    let beat = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a');
    beat.play();
    setViewIndex((prevIndex) => (prevIndex + 1) % 9);
  };

  const nextToTalk1 = (currentCharacter) => {
    let nextCharacter = dialogPages1[viewPage + 1]?.character;
    if (nextCharacter==currentCharacter){
      console.log("Itzel2")
      toggleDialog1();
    }
    if (nextCharacter=='Itzel'){
      setItzelAnimating(true);
      setTitoAnimating(false);
    }
    if (nextCharacter=='Tito'){
      setItzelAnimating(false);
      setTitoAnimating(true);
    }
  };

  const nextToTalk2 = (currentCharacter) => {
    let nextCharacter = dialogPages2[viewPage + 1]?.character;
    if (nextCharacter==currentCharacter){
      console.log("Itzel2")
      toggleDialog2();
    }
    if (nextCharacter=='Itzel'){
      setItzelAnimating(true);
      setTitoAnimating(false);
    }
    if (nextCharacter=='Tito'){
      setItzelAnimating(false);
      setTitoAnimating(true);
    }
  };

  const itemEnters = () => {
    console.log("Caja de pSICOLOGA");
    setPageIndex(0);
    let beat = new Audio('http://starmen.net/mother1/music/08%20-%20MOTHER%20-%20You%20Won.mp3');
    beat.play();
    console.log(viewPage);
    setViewIndex((prevIndex) => (prevIndex + 1) % 9);
  }

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

  const state = {
    draggableVisibility: "block"
  };

  return (
    <div className='pagina_oficina_container'>
    
    {viewIndex === 0 && (
      <div className='story_container' id='of_story_view1'>
        <div className="character" id='tito' onMouseOver={() => handleTitoClick('Tito')}>
          <Tito isAnimating={isTitoAnimating} isClickable={true} onClick={() => nextToTalk1('Tito')}/>
        </div>
        <div className="character" id='itzel' onMouseOver={() => handleItzelClick('Itzel')}>
          <Itzel isAnimating={isItzelAnimating} isClickable={true} onClick={() => nextToTalk1('Itzel')}/>
        </div>
        <div className="object" id='laptop'></div>
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
                ): <button className='next_button' onClick={toggleDialog1}><img src="../imagenes/flecha-verde.png" height={25} alt="flecha" /></button>}
          </div>
      </div>
    )}
    {viewIndex === 1 && (
      <div className='story_container' id='of_story_view2'>
        <div className="character" id='tito' onClick={handleTitoClick}></div>
        <div className="object" id='laptop'></div>
        <div className='character' id='fiscal' style={{ display: "block" }}>
            <DragDropContainer
              targetKey="fiscal_target"
              style={{ display: state.draggableVisibility }}
              dropData={{ type: "Fiscal" }}
                        
            >
              <img
                src={FiscalImg}
                width="130px"
                height="270px"
                alt=""
              />
              </DragDropContainer>
        </div>

        <div className="fiscal-drop-target" id='fiscal-container'>
                <DropTarget
                    id="my_target"
                    targetKey="fiscal_target"
                    onHit={function () {
                      itemEnters();
                        
                    }}
                    >
                    <img
                        src={blank}
                        height="350px"
                        width="150px"
                        alt=""
                    />
                </DropTarget>
          </div>
      </div>
    )}
    {viewIndex === 2 && (
      <div className='story_container' id='of_story_view3'>
        <div className="character" id='tito' onMouseOver={() => handleTitoClick('Tito')}>
          <Tito isAnimating={isTitoAnimating} isClickable={true} onClick={() => nextToTalk2('Tito')}/>
        </div>
        <div className="character" id='itzel' onMouseOver={() => handleItzelClick('Itzel')}>
          <Itzel isAnimating={isItzelAnimating} isClickable={true} onClick={() => nextToTalk2('Itzel')}/>
        </div>
        <div className="object" id='laptop'></div>
        <div className="dialog_box">
            <Dialog
              className="dialog"
              title={dialogPages2[viewPage].title}
              content={dialogPages2[viewPage].content}
              character={dialogPages2[viewPage].character}
              onToggle={toggleView}
            />
            
            {(viewPage === dialogPages2.length - 1) ? (
                <button className='next_button' onClick={closeRoom}>Finalizar</button>
                ): <button className='next_button' onClick={toggleDialog2}><img src="../imagenes/flecha-verde.png" height={25} alt="flecha" /></button>}
          </div>
      </div>
    )}
    <Lupa sala="Oficina"></Lupa>
    </div>
  );
}

export default Pagina_Oficina;