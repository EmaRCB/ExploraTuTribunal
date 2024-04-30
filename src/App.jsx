import './App.css';
import { useState } from 'react';
import Dialog from './components/dialog';
import Pagina_Prueba from './pagina_prueba';
import Pagina_Bienvenida from './pagina_bienvenida';
import Pasillo from './pasillo';


function App() {
  const [viewIndex, setViewIndex] = useState(1);
  const [currentPage, setCurrentPage] = useState('xd soy el 1');
  const dialogPages = ['xd soy el 1', 'JAJA Soy 2', 'Dialogo 3'];

  const toggleView = () => {
    setViewIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const toggleDialog = () => {
    const currentIndex = dialogPages.indexOf(currentPage);
    const nextIndex = (currentIndex + 1) % dialogPages.length;
    if (nextIndex === dialogPages.length - 1) {
      toggleView();
    } else {
      setCurrentPage(dialogPages[nextIndex]);
    }
  };

  return (
    <div className="App">
      <header className="game_container">
        {viewIndex === 0 && (
          <div className='element_container'>
            <Pagina_Bienvenida/>
          </div>
        )}
        {viewIndex === 1 && 
          (
            <div className='element_container'>
              <Pasillo/>
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
                  character={'Itzel'}
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
                  character={'Itzel'}
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