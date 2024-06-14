
import PropTypes from 'prop-types';
import './dialog.css';
import '../paginas.css';
import ItzelImage from '../assets/tito/Itzel_Head.png';
import TitoImage from '../assets/tito/Tito_Head.png';
import OtroPersonajeImage from '../assets/tito/Other_Head.png';

const Dialog = ({ title, content, character }) => {
  Dialog.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired,
  };



  const characterColors = {
    Itzel: '#F7A9A8', // Color de fondo para Itzel
    Tito: '#F3FCB1', // Color de fondo para Tito
    OtroPersonaje: '#ccccff' // Color de fondo para OtroPersonaje
    // Añade más personajes y colores si es necesario
  };

  const dialogStyle = {
    backgroundColor: characterColors[character] || '#fff', // Color de fondo por defecto
    backgroundSize: 'cover'
  };

 const characterImage = {
    Itzel: `url(${ItzelImage})`, // Image URL for Itzel
    Tito: `url(${TitoImage})`, // Image URL for Tito
    OtroPersonaje: `url(${OtroPersonajeImage})` // Image URL for OtroPersonaje
    // Add more characters and images if necessary
  };

  const bubbleStyle = {
    backgroundImage: characterImage[character] || 'none', // Default to 'none' if character image is not found
  };

  return (
    <div>
        <div className='dialog_box'>
        
          <div className="dialog" style={dialogStyle}>
            <div className="dialog-content">
              <div className='dialog-title'>
                <span className='icon-bubble' style={bubbleStyle}>

                </span>
                <span id='title'>{title}</span>
              </div>
              
              <p id='content'>{content}</p>
            </div>
          </div>
          <div className='arrow' id='left'></div>
          
        </div>
    </div>
  );
};

export default Dialog;

