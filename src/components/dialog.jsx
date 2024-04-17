import { useState } from 'react';
import PropTypes from 'prop-types';
import './dialog.css';


const Dialog = ({ title, content, onToggle }) => {
  Dialog.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onToggle: PropTypes.string.isRequired
  };
  
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    onToggle();

  }
  return (
    <div>
      <button onClick={openDialog}>Iniciar</button>
      {isOpen && (
        <div className="dialog">
          <div className="dialog-content">
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={closeDialog}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dialog;
