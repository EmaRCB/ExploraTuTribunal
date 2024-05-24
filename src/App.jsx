import './App.css';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Pagina_Bienvenida from './pagina_bienvenida';
import Pasillo from './pasillo';


function App() {
  const [viewIndex, setViewIndex] = useState(0);
  

  useEffect(() => {
    toggleView();
  }, []);

  

  const toggleView = () => {
    const cookieValue = Cookies.get('changeCookie');
    if (cookieValue === '1') {
      setViewIndex(6);
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
      </header>
    </div>
  );
}




export default App;