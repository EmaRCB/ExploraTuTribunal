import { useState } from 'react';
import PropTypes from 'prop-types';
import './dialog.css';
import '../paginas.css';

const Dialog = ({ title, content, character }) => {
  Dialog.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired,
  };

  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    let beat = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a');
    beat.play();
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const characterColors = {
    Itzel: '#B996EC', // Color de fondo para Itzel
    Tito: '#F3FCB1', // Color de fondo para Tito
    OtroPersonaje: '#ccccff' // Color de fondo para OtroPersonaje
    // Añade más personajes y colores si es necesario
  };

  const dialogStyle = {
    backgroundColor: characterColors[character] || '#fff', // Color de fondo por defecto
  };

  return (
    <div>
      {isOpen && (
        <div className='dialog_box'>
          <div className="dialog" style={dialogStyle}>
            <div className="dialog-content">
              <h2 id='title'>{title}</h2>
              <p id='content'>{content}</p>
            </div>
          </div>
          <div className='arrow' id='left'></div>
          
        </div>
      )}
      {(!isOpen) ? (<button className='next_button' onClick={openDialog}>Iniciar</button>): <button className='next_button' onClick={closeDialog}>Cerrar</button>}
    </div>
  );
};

export default Dialog;

