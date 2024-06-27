import './App.css';
import './pagina_sala_psic.css';
import './paginas.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

import Dialog from './components/dialog';
import Lupa from './components/lupa';
import PsicologaImg from './assets/tito/personajes/TA_Psicóloga.png';
import blank from './assets/bg/blank.png';
import itzelVoice from './assets/sounds/itzel_voice.mp3';
import titoVoice from './assets/sounds/tito_voice.mp3';


function Character() {
  Pagina_Sala_Psicologia.propTypes = {
    closeRoom: PropTypes.func.isRequired,
  };

  

  return (
    <div className="character" id='tito' onClick={toggleDialog}></div>
  );
}

export default Pagina_Sala_Psicologia;