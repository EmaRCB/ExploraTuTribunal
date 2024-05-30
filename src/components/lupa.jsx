import { useState } from 'react';
import PropTypes from 'prop-types';
import './lupa.css';
import Tribunal from '../assets/bg/sala_juegos.png';

const Lupa = ({sala}) => {
    Lupa.propTypes = {
        sala: PropTypes.string.isRequired
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openLupa = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
  

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
                <img src={Tribunal} alt='Modal Content' />
            </div>
        </div>
        )}
    </div>
    );
};

export default Lupa;