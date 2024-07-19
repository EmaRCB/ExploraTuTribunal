import './App.css';
import './pagina_sala_psic.css';
import './paginas.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

import Dialog from './components/dialog';
import Tito from './components/Tito';
import Itzel from './components/Itzel';
import Lupa from './components/lupa';
import PsicologaImg from './assets/tito/personajes/TA_Psicóloga.png';
import blank from './assets/bg/blank.png';
import itzelVoice from './assets/sounds/itzel_voice.mp3';
import titoVoice from './assets/sounds/tito_voice.mp3';


function Pagina_Sala_Psicologia({ closeRoom }) {
  Pagina_Sala_Psicologia.propTypes = {
    closeRoom: PropTypes.func.isRequired,
  };

  const [viewIndex, setViewIndex] = useState(0);
  const [viewPage, setPageIndex] = useState(0);
  const [isTitoAnimating, setTitoAnimating] = useState(false);
  const [isItzelAnimating, setItzelAnimating] = useState(false);

  const dialogPages1 = [
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
      content: "¡Aquí puedes platicar con una psicóloga! Las psicólogas y psicólogos son personas que platican con niñas y niños como tú, para poder entender qué sienten y cómo ayudarles.",
      character: "Tito"
    }
  ];

  const dialogPages2 = [
    {
      title: "Tito:",
      content: "¡Muy bien! Tu amigo va a poder hablar de cómo se siente y de lo que piensa.",
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
      content: "¡Uay!  espero que puedan ayudar a todas las niñas y niños que vengan a este lugar.",
      character: "Itzel"
    },
    {
      title: "Tito:",
      content: "¡Claro! Bueno, sigamos",
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
    <div className='pagina_sala_psic_container'>
      
      <div className="object" id='cojin1'></div>
      <div className="object" id='cojin2'></div>
      {viewIndex === 0 && (
      <div className='story_container' id='psic_story_view1'>
        <div className="character" id='tito' onMouseOver={() => handleTitoClick('Tito')}>
          <Tito isAnimating={isTitoAnimating} isClickable={true} onClick={() => nextToTalk1('Tito')}/>
        </div>
        <div className="character" id='itzel' onMouseOver={() => handleItzelClick('Itzel')}>
          <Itzel isAnimating={isItzelAnimating} isClickable={true} onClick={() => nextToTalk1('Itzel')}/>
        </div>
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
      <div className='story_container' id='psic_story_view2'>
        <div className="character" id='tito' onClick={handleTitoClick}></div>
        <div className='character' id='psicologa' style={{ display: "block" }}>
            <DragDropContainer
              targetKey="psic_target"
              style={{ display: state.draggableVisibility }}
              dropData={{ type: "Psicologa" }}
                        
            >
              <img
                src={PsicologaImg}
                width="150px"
                height="270px"
                alt=""
              />
              </DragDropContainer>
        </div>

        <div className="psic-drop-target" id='psic-container'>
                <DropTarget
                    id="my_target"
                    targetKey="psic_target"
                    onHit={function () {
                      itemEnters();
                        
                    }}
                    >
                    <img
                        src={blank}
                        height="250px"
                        width="150px"
                        alt=""
                    />
                </DropTarget>
          </div>
      </div>
    )}
    {viewIndex === 2 && (
      <div className='story_container' id='psic_story_view3'>
        <div className="character" id='tito' onMouseOver={() => handleTitoClick('Tito')}>
          <Tito isAnimating={isTitoAnimating} isClickable={true} onClick={() => nextToTalk2('Tito')}/>
        </div>
        <div className="character" id='itzel' onMouseOver={() => handleItzelClick('Itzel')}>
          <Itzel isAnimating={isItzelAnimating} isClickable={true} onClick={() => nextToTalk2('Itzel')}/>
        </div>
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
    <Lupa sala="Psicologia"></Lupa>
    </div>
  );
}

export default Pagina_Sala_Psicologia;