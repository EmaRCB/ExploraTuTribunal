import { useState } from 'react';
import PropTypes from 'prop-types';
import './lupa.css';
import TribunalAfueraImg from '../assets/bg/salasReales/sala_tribunal.png';
import MedImage from '../assets/bg/salasReales/sala_medicina.png';
import JuegosImage from '../assets/bg/salasReales/sala_juegos.png';
import PsicImage from '../assets/bg/salasReales/sala_psicologia.png';
import OficinaImage from '../assets/bg/salasReales/sala_juntas.png';

const Lupa = ({sala}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openLupa = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const roomImage = {
        Entrada: `url(${TribunalAfueraImg})`, // Image URL for Itzel
        Juegos: `url(${JuegosImage})`, // Image URL for Tito
        Psicologia: `url(${PsicImage})`, // Image URL for Itzel
        Medicina: `url(${MedImage})`, // Image URL for Tito
        Oficina: `url(${OficinaImage})`, // Image URL for OtroPersonaje
        TribunalDentro: `url(${TribunalAfueraImg})`, // Image URL for Itzel
        // Add more characters and images if necessary
      };

    const imgStyle = {
        backgroundImage: roomImage[sala] || 'none', // Default to 'none' if character image is not found
        backgroundSize: 'cover'
    }
  

  return (
    <div className='lupa_container'>
        <div id='lupa' onClick={openLupa}>
            <h1 style={{ visibility: "hidden" }}>Space</h1>
        </div>
        {isModalOpen && (
        <div className='modal'>
            <div className='modal_content' >
                <span className='close_button' onClick={closeModal}>&times;</span>
                {sala}
                <div style={imgStyle} className='imgSpacer'></div>
            </div>
        </div>
        )}
    </div>
    );
};

Lupa.propTypes = {
    sala: PropTypes.string.isRequired
}

export default Lupa;