import './styles/App.css';
import './styles/pagina_sala_med.css';
import './styles/paginas.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

import Dialog from '../dialogos/Dialogo.jsx';
import Lupa from './lupa';
import Tito from '../../personajes/Tito.jsx';
import Itzel from '../../personajes/Itzel.jsx';
import DraImg from '../../../assets/tito/personajes/TA_Doctora.png';
import blank from '../../../assets/bg/blank.png';
import itzelVoice from '../../../assets/sounds/itzel_voice.mp3';
import titoVoice from '../../../assets/sounds/tito_voice.mp3';


function Pagina_Sala_Medicina({ closeRoom }) {
  Pagina_Sala_Medicina.propTypes = {
    closeRoom: PropTypes.func.isRequired,
  };

  const [viewIndex, setViewIndex] = useState(0);
  const [viewPage, setPageIndex] = useState(0);
  const [isTitoAnimating, setTitoAnimating] = useState(false);
  const [isItzelAnimating, setItzelAnimating] = useState(false);

  const dialogPages1 = [
    {
      title: "Tito:",
      content: "Bienvenida a la sala de medicina. Aquí estarás con una doctora o un doctor que te van a ayudar.",
      character: "Tito"
    },
    {
      title: "Itzel:",
      content: "Pero me dan miedo venir al doctor. ¡No me gustan las inyecciones!",
      character: "Itzel"
    }
    ,
    {
      title: "Tito:",
      content: "No te preocupes Itzel, ¡aquí no ponen inyecciones!",
      character: "Tito"
    },
    {
      title: "Tito:",
      content: "Aqui, la doctora va a revisar a tu amigo para ver si hay algo que le duele y lo puedan curar.",
      character: "Tito"
    },
    {
      title: "Itzel:",
      content: "¡Ah! Es importante",
      character: "Itzel"
    },
    {
      title: "Tito:",
      content: "¿En donde va la doctora?",
      character: "Tito"
    }
  ];

  const dialogPages2 = [
    {
      title: "Tito:",
      content: "Así es. Igual es importante que le digas dónde te duele para saber cómo ayudarte.",
      character: "Tito"
    },
    {
      title: "Itzel:",
      content: "¡Entendido!",
      character: "Itzel"
    },
    {
      title: "Tito:",
      content: "¡Qué bien! Vamos a explorar otro lugar",
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
    console.log("Caja de doctora");
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
    <div className='pagina_sala_med_container'>
    
    {viewIndex === 0 && (
      <div className='story_container' id='med_story_view1'>
        <div className="character" id='tito' onMouseOver={() => handleTitoClick('Tito')}>
          <Tito isAnimating={isTitoAnimating} isClickable={true} onClick={() => nextToTalk1('Tito')}/>
        </div>
        <div className="character" id='itzel' onMouseOver={() => handleItzelClick('Itzel')}>
          <Itzel isAnimating={isItzelAnimating} isClickable={true} onClick={() => nextToTalk1('Itzel')}/>
        </div>
        <div className="object" id='reloj'></div>
        <div className="dialog_box">
            <Dialog
              className="dialog"
              title={dialogPages1[viewPage].title}
              content={dialogPages1[viewPage].content}
              character={dialogPages1[viewPage].character}
              onToggle={toggleView}
            />
            

            {(viewPage === dialogPages1.length - 1) ? (
                <button className='next_button' onClick={toggleView}>Continuar</button>
                ): <button className='next_button' onClick={toggleDialog1}><img src="../imagenes/flecha-verde.png" height={25} alt="flecha" /></button>}


          </div>
      </div>
    )}
    {viewIndex === 1 && (
      <div className='story_container' id='med_story_view2'>
        <div className="character" id='tito' onClick={handleTitoClick}></div>
        <div className="object" id='reloj'></div>
        <div className='character' id='doctora' style={{ display: "block" }}>
            <DragDropContainer
              targetKey="doctora_target"
              style={{ display: state.draggableVisibility }}
              dropData={{ type: "Doctora" }}
                        
            >
              <img
                src={DraImg}
                width="150px"
                height="270px"
                alt=""
              />
              </DragDropContainer>
        </div>

        <div className="doctora-drop-target" id='doctora-container'>
                <DropTarget
                    id="my_target"
                    targetKey="doctora_target"
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
      <div className='story_container' id='med_story_view3'>
        <div className="character" id='tito' onMouseOver={() => handleTitoClick('Tito')}>
          <Tito isAnimating={isTitoAnimating} isClickable={true} onClick={() => nextToTalk2('Tito')}/>
        </div>
        <div className="character" id='itzel' onMouseOver={() => handleItzelClick('Itzel')}>
          <Itzel isAnimating={isItzelAnimating} isClickable={true} onClick={() => nextToTalk2('Itzel')}/>
        </div>
        <div className="object" id='reloj'></div>
        <div className="dialog_box">
            <Dialog
              className="dialog"
              title={dialogPages2[viewPage].title}
              content={dialogPages2[viewPage].content}
              character={dialogPages2[viewPage].character}
              onToggle={toggleView}
            />
            
            {viewIndex === dialogPages2.length - 1 && (
              <button className='next_button' onClick={toggleView}>Continuar</button>
            )}
            
          </div>
      </div>
    )}
    {viewIndex === 3 && (
      <div className='story_container' id='med_story_view3'>
        <div className="character" id='tito' onMouseOver={() => handleTitoClick('Tito')}>
          <Tito isAnimating={isTitoAnimating} isClickable={true} onClick={() => nextToTalk2('Tito')}/>
        </div>
        <div className="character" id='itzel' onMouseOver={() => handleItzelClick('Itzel')}>
          <Itzel isAnimating={isItzelAnimating} isClickable={true} onClick={() => nextToTalk2('Itzel')}/>
        </div>
        <div className="object" id='reloj'></div>
        <button className='next_button' onClick={closeRoom}>Finalizar</button>
      </div>
    )}
    <Lupa sala="Medicina"></Lupa>
    </div>
    
  );
  
}

export default Pagina_Sala_Medicina;