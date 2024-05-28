import './App.css';
import './paginas.css';
import './pasillo.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Pagina_Bienvenida from './pagina_bienvenida';
import Pagina_Sala_Juegos from './pagina_sala_juegos';
import Pagina_Sala_Medicina from './pagina_sala_med';
import Pagina_Sala_Psicologia from './pagina_sala_psic';
import Pagina_Oficina from './pagina_oficina';
import itzelVoice from './assets/sounds/itzel_voice.mp3';
import titoVoice from './assets/sounds/tito_voice.mp3';

function Pasillo() {

    function openRoom(sala) {
        var x = document.getElementById(sala); 
        var y = document.getElementById("pasillo");
        x.style.display = "flex";
        y.style.display = "none";
    }

    function closeRoom() {
        var salas = document.getElementsByClassName('sala');
        var pasillo = document.getElementById('pasillo');
        for (var i = 0; i < salas.length; i++) {
            salas[i].style.display = 'none';
        }
        pasillo.style.display = 'flex';
    }

    const handleTitoClick = () => {
        new Audio(titoVoice).play().catch(error => {
          console.error('Error playing audio:', error);
        });
      };
    
      const handleItzelClick = () => {
        new Audio(itzelVoice).play().catch(error => {
          console.error('Error playing audio:', error);
        });
      };

    return (
        <div className='container'>
            <div className="character" id='tito' onClick={handleTitoClick}></div>
            <div className="character" id='itzel' onClick={handleItzelClick}></div>
            <div className='pasillo_container' id='pasillo'>
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
                    <button className='buttonDoor' onClick={() => openRoom('salaInicial')}>Volver al inicio</button>
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
            <div className="sala" id='salaInicial' style={{ display: "none" }}>
                <Pagina_Bienvenida closeRoom={closeRoom} />
            </div>
        </div>
    );
}

export default Pasillo;
