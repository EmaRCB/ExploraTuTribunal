import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Dialog from './dialog';

function App() {
  return (
    <div className="App">
      <header className="game_container">
        <div className='First'>
          <div className="Character" ></div>
          <div className="Dialog_box">
            <Dialog className="Dialog" title="Bienvenidos al tribunal de la justicia!" content="En este lugar, en este lugar, en este lugar, en este lugar, en este lugar, en este lugar, en este lugar, en este lugar" />
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
