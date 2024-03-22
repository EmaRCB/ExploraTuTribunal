import React, { useState } from 'react';
import './dialog.css';

const Dialog = ({ title, content, onToggle }) => {
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
            <button onClick={closeDialog}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dialog;
