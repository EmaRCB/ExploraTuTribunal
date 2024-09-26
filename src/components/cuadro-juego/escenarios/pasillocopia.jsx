import './styles/App.css';
import './styles/paginas.css';

import styles from './styles/Pasillo.module.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import InstruccionesPasillo from '../../InstruccionesPasillo.jsx';
import Pagina_Sala_Juegos from './pagina_sala_juegos';
import Pagina_Sala_Medicina from './pagina_sala_med';
import Pagina_Sala_Psicologia from './pagina_sala_psic';
import Pagina_Oficina from './pagina_oficina';
import Tito from '../../personajes/Tito.jsx';
import Itzel from '../../personajes/Itzel.jsx';

import itzelVoice from '../../../assets/sounds/itzel_voice.mp3';
import titoVoice from '../../../assets/sounds/tito_voice.mp3';
import Tribunal from './tribunal';

import { useState } from 'react';

function Pasillo() {
    const [showPopup, setShowPopup] = useState(true);

    function openRoom(sala) {
        var x = document.getElementById(sala);
        var y = document.getElementById("pasillo");
        var text = document.getElementById("box");

        x.style.display = "flex";
        y.style.display = "none";
        text.style.display = "none";
        
        
    }

    function closeRoom() {
        var salas = document.getElementsByClassName('sala');
        var pasillo = document.getElementById('pasillo');
        for (var i = 0; i < salas.length; i++) {
            salas[i].style.display = 'none';
        }
        pasillo.style.display = 'flex';
    }

    const handlePopupClose = () => {
        setShowPopup(false);
      };


    return (
        <div className={styles.image}>
            {showPopup && <InstruccionesPasillo onClose={handlePopupClose} />}
            <div>
                <div className='container' id='pasillo'>
            
                <Swiper className="mySwiper">
                    <SwiperSlide className='room_container'>
                        <button className='buttonDoor' onClick={() => openRoom('salaJuegos')}>Sala de juegos</button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className='buttonDoor' onClick={() => openRoom('salaOficina')}>Sala oficina</button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className='buttonDoor' onClick={() => openRoom('salaMedicina')}>Sala de medicina</button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className='buttonDoor' onClick={() => openRoom('salaPsic')}>Sala psicologia</button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className='buttonDoor' onClick={() => openRoom('tribunalJusticia')}>Tribunal de Justicia</button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className='buttonDoor' onClick={() => openRoom('salaInicial')}>Salir</button>
                    </SwiperSlide>
                </Swiper>
                </div>
                <div className="sala" id='salaJuegos' style={{ display: "none" }}>
                    <Pagina_Sala_Juegos closeRoom={closeRoom} />
                </div>
                <div className="sala" id='salaOficina' style={{ display: "none" }}>
                    <Pagina_Oficina closeRoom={closeRoom} />
                </div>
                <div className="sala" id='salaMedicina' style={{ display: "none" }}>
                    <Pagina_Sala_Medicina closeRoom={closeRoom} />
                </div>
                <div className="sala" id='salaPsic' style={{ display: "none" }}>
                    <Pagina_Sala_Psicologia closeRoom={closeRoom} />
                </div>
                <div className="sala" id='tribunalJusticia' style={{ display: "none" }}>
                    <Tribunal closeRoom={closeRoom} />
                </div>
                <div className="sala" id='salaInicial' style={{ display: "none" }}>
                    <Pagina_Oficina closeRoom={closeRoom} />
                </div>
            </div>
            
        </div>
    );
}

export default Pasillo;
