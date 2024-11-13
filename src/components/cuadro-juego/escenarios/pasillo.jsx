import './styles/App.css';
import './styles/paginas.css';

import styles from './styles/Pasillo.module.css';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import InstruccionesPasillo from '../../InstruccionesPasillo.jsx';
import Pagina_Sala_Juegos from './pagina_sala_juegos';
import Pagina_Sala_Medicina from './pagina_sala_med';
import Pagina_Sala_Psicologia from './pagina_sala_psic';
import Pagina_Oficina from './pagina_oficina';
import Tribunal from './tribunal';

import { useState } from 'react';

function Pasillo({nextRoom}) {
    const [showPopup, setShowPopup] = useState(true);


    function openRoom(sala) {
        check();
        var x = document.getElementById(sala);
        var y = document.getElementById("pasillo");
        var text = document.getElementById("box");

        x.style.display = "flex";
        y.style.display = "none";
        text.style.display = "none";
        
        
    }

    function closeRoom(sala) {
        var salas = document.getElementById(sala);
        var pasillo = document.getElementById('pasillo');
        /*for (var i = 0; i < salas.length; i++) {
            salas[i].style.display = 'none';
        }*/
        salas.style.display = 'none';
        pasillo.style.display = 'flex';
    }


    const handlePopupClose = () => {
        setShowPopup(false);
    };
      
    return (
        <div className={styles.image}>
            {showPopup && <InstruccionesPasillo onClose={handlePopupClose} />}
            <div className={styles.container} id='pasillo'>
                <Swiper className='mySwiper' id={styles.swiper}>
                    <SwiperSlide id={styles.room1}>
                        <button className={styles.buttonDoor} onClick={nextRoom}></button>
                    </SwiperSlide>
                    <SwiperSlide id={styles.room2}>
                        <button className={styles.buttonDoor} onClick={() => openRoom('salaOficina')}></button>
                    </SwiperSlide>
                    <SwiperSlide id={styles.room3}>
                        <button className={styles.buttonDoor} onClick={() => openRoom('salaMedicina')}></button>
                    </SwiperSlide>
                    <SwiperSlide id={styles.room4}>
                        <button className={styles.buttonDoor} onClick={() => openRoom('salaPsic')}></button>
                    </SwiperSlide>
                    <SwiperSlide id={styles.room5}>
                        <button className={styles.buttonDoor} onClick={() => openRoom('tribunalJusticia')}></button>
                    </SwiperSlide>
                    {/* <SwiperSlide id={styles.room6}>
                        <button className={styles.buttonDoor} onClick={() => openRoom('salaJuegos')}>Sala de juegos</button>
                    </SwiperSlide>  */}
                </Swiper>
            </div>
                <div className={styles.sala} id='salaOficina' style={{ display: "none" }}>
                    <Pagina_Oficina closeRoom={closeRoom} />
                </div>
                <div className={styles.sala} id='salaMedicina' style={{ display: "none" }}>
                    <Pagina_Sala_Medicina closeRoom={closeRoom} />
                </div>
                <div className={styles.sala} id='salaPsic' style={{ display: "none" }}>
                    <Pagina_Sala_Psicologia closeRoom={closeRoom} />
                </div>
                <div className={styles.sala} id='tribunalJusticia' style={{ display: "none" }}>
                    <Tribunal closeRoom={closeRoom} />
                </div>
                <div className={styles.sala} id='salaInicial' style={{ display: "none" }}>
                    <Pagina_Oficina closeRoom={closeRoom} />
                </div>
        </div>
    );
}

Pasillo.propTypes = {
    onNext: PropTypes.func.isRequired
  };

export default Pasillo;
