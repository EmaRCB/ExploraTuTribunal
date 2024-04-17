import './App.css';
import { useState } from 'react';
import Dialog from './components/dialog';


function App() {
  const [viewIndex, setViewIndex] = useState(0);

  const toggleView = () => {
    setViewIndex((prevIndex) => (prevIndex + 1) % 4);
  };

  return (
    <div className="App">
      <header className="game_container">
        {viewIndex === 0 && (
          <div className="first">
            <div className="character"></div>
            <div className="dialog_box">
              <Dialog
                className="dialog"
                title="Bienvenidos al tribunal de la justicia!"
                content="En este lugar, en este lugar, en este lugar, en este lugar, en este lugar, e lugar, en este lugar, en este lugar, en este lugar, e lugar, en este lugar, en este lugar, en este lugar, e lugar, en este lugar, en este lugar, en este lugar, en este lugar, en este lugar, en este lugar"
                onToggle={toggleView}
              />
            </div>
          </div>
        )}
        {viewIndex === 1 && 
          (
            <div>
              <div>Segunda vista</div>
              <div className="dialog_box">
                <Dialog
                  className="dialog"
                  title="Diálogo de la segunda vista"
                  content="Contenido de la segunda vista"
                  onToggle={toggleView}
                />
              </div>
            </div>
          )    
        }
        {viewIndex === 2 && 
          (
            <div>
              <div>Tercera vista</div>
              <div className="dialog_box">
                <Dialog
                  className="dialog"
                  title="Diálogo de la tercera vista"
                  content="Contenido de la tercera vista"
                  onToggle={toggleView}
                />
              </div>
            </div>
          )    
        }
        {viewIndex === 3 && 
          (
            <div>
              <div>Ultima vista</div>
              <div className="dialog_box">
                <Dialog
                  className="dialog"
                  title="Diálogo de la 4 vista"
                  content="Contenido de la 4 vista"
                />
              </div>
            </div>
          )    
        }
      </header>
    </div>
  );
}


export default App;