import './App.css';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Pagina_Bienvenida from './pagina_bienvenida';
import Pagina_Sala_Juegos from './pagina_sala_juegos';
import Pagina_Sala_Medicina from './pagina_sala_med';
import Pagina_Sala_Psicologia from './pagina_sala_psic';
import Pagina_Oficina from './pagina_oficina';


function App() {
  const [viewIndex, setViewIndex] = useState(3);

  useEffect(() => {
    toggleView();
  }, []);

  

  const toggleView = () => {
    const cookieValue = Cookies.get('changeCookie');
    if (cookieValue === '1') {
      setViewIndex((prevIndex) => (prevIndex + 1) % 7);
      Cookies.set('changeCookie', '0');

    } else {
      console.log("x");
      Cookies.set('changeCookie', '0');
    }
  };


  return (
    <div className="App">
      <header className="game_container">
        {viewIndex === 0 && (
          <div className='element_container'>
            <Pagina_Bienvenida  /        
            >
          </div>
          
        )}
        {viewIndex === 1 && 
          (
            <div className='element_container'>
              <Pagina_Sala_Juegos/>
            </div>
          )    
        }
        {viewIndex === 2 && 
          (
            <div className='element_container'>
              <Pagina_Sala_Medicina/>
            </div>
          )    
        }
        {viewIndex === 3 && 
          (
            <div className='element_container'>
              <Pagina_Sala_Psicologia/>
            </div>
          )    
        }
        {viewIndex === 4 && 
          (
            <div className='element_container'>
              <Pagina_Oficina/>
            </div>
          )    
        }
        {viewIndex === 5 && 
          (
            <div className='element_container'>
              <Pagina_Sala_Psicologia/>
            </div>
          )    
        }
      </header>
    </div>
  );
}


export default App;