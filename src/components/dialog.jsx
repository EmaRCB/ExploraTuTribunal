import { useState } from 'react';
import PropTypes from 'prop-types';
import './dialog.css';

const Dialog = ({ title, content, onToggle, character, currentPage, pages}) => {
  Dialog.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired,
    currentPage: PropTypes.number,
    pages: PropTypes.arrayOf(PropTypes.object),
    character: PropTypes.string
  };

  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    onToggle();
  };


  const nextPage = () => {
    const currentIndex = pages.indexOf(currentPage);
    const nextIndex = (currentIndex + 1) % pages.length;
    onToggle(pages[nextIndex]);
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
      <button onClick={openDialog}>Iniciar</button>
      {isOpen && (
        <div className="dialog" style={dialogStyle}>
          <div className="dialog-content">
            <h2 id='title'>{title}</h2>
            <p id='content'>{content}</p>
            <button onClick={nextPage}>Siguiente página</button>
            <button onClick={closeDialog}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};



export default Dialog;

