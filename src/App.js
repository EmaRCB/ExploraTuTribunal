import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Dialog from './dialog';

function App() {
  const [showFirst, setShowFirst] = useState(true);

  const toggleDialog = () => {
    setShowFirst(!showFirst);
  };

  return (
    <div className="App">
      <header className="game_container">
        {showFirst ? (
          <div className='First'>
            <div className="Character"></div>
            <div className="Dialog_box">
              <Dialog className="Dialog" title="Bienvenidos al tribunal de la justicia!" content="En este lugar, en este lugar, en este lugar, en este lugar, en este lugar, en este lugar, en este lugar, en este lugar" onToggle={toggleDialog} />
            </div>
          </div>
        ) : (
          <div className='Second'>
            <p>Second Div Content</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
