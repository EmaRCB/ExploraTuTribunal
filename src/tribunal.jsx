import './App.css';
import './tribunal.css';
import './paginas.css';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import titoVoice from './assets/sounds/tito_voice.mp3';
import blank from './assets/bg/blank.png';
import Juez from './assets/tito/Juez.png';
import Abogado from './assets/tito/Abogado.png';
import Policia from './assets/tito/Policia.png';
import Testigo from './assets/tito/Testigo.png';


function Tribunal() {
    const state = {
        draggableVisibility: "block"
    };

    const itemEnters = (item) => {
        alert("Caja de " + item);
    }
  
    const handleTitoClick = () => {
        new Audio(titoVoice).play().catch(error => {
          console.error('Error playing audio:', error);
        });
      };

  return (
    <div className='pagina_1_container'>
        <div className="character" id='tito' onClick={handleTitoClick}></div>
        
        <div className='character' id='juez' style={{ display: "none" }}>
            <DragDropContainer
                targetKey="juez_target"
                style={{ display: state.draggableVisibility }}
                dropData={{ type: "Juez" }}
                
                >
            <img
                src={Juez}
                width="100px"
                alt=""
            />
            </DragDropContainer>
        </div>

        <div className='character' id='abogado' style={{ display: "none" }}>
            <DragDropContainer
                targetKey="abogado_target"
                style={{ display: state.draggableVisibility }}
                dropData={{ type: "Abogado" }}
                >
            <img
                src={Abogado}
                width="100px"
                alt=""
            />
            </DragDropContainer>
        </div>

        <div className='character' id='policia' style={{ display: "block" }}>
            <DragDropContainer
                targetKey="policia_target"
                style={{ display: state.draggableVisibility }}
                dropData={{ type: "Policia" }}
                >
            <img
                src={Policia}
                width="100px"
                alt=""
            />
            </DragDropContainer>
        </div>

        <div className='character' id='testigo' style={{ display: "none" }}>
            <DragDropContainer
                targetKey="testigo_target"
                style={{ display: state.draggableVisibility }}
                dropData={{ type: "Testigo" }}
                >
            <img
                src={Testigo}
                width="100px"
                alt=""
            />
            </DragDropContainer>
        </div>

        <div className="tribunal-container">
            <div className="tribu-item">
                <DropTarget
                    id="my_target"
                    targetKey="juez_target"
                    onHit={function () {
                        alert("Caja de juez");
                    }}
                    >
                    <img
                        src={blank}
                        height="150px"
                        width="150px"
                        alt=""
                    />
                </DropTarget>
            </div>
            <div className="tribu-item">
            <DropTarget
                    id="my_target"
                    targetKey="abogado_target"
                    onHit={function () {
                        alert("Caja abogado");
                    }}
                    >
                    <img
                        src={blank}
                        height="150px"
                        width="150px"
                        alt=""
                    />
                </DropTarget>
            </div>
            <div className="tribu-item">
            <DropTarget
                    id="my_target"
                    targetKey="testigo_target"
                    onHit={function () {
                        alert("Caja testigo");
                    }}
                    >
                    <img
                        src={blank}
                        height="150px"
                        width="150px"
                        alt=""
                    />
                </DropTarget></div>  
                <div className="tribu-item">
                <DropTarget
                    id="my_target"
                    targetKey="policia_target"
                    onHit={function () {
                        alert("Caja de policia");
                    }}
                    >
                    <img
                        src={blank}
                        height="150px"
                        width="150px"
                        alt=""
                    />
                </DropTarget>
            </div>
            <div className="tribu-item">
            <DropTarget
                    id="my_target"
                    targetKey="abogado_target"
                    onHit={function () {
                        alert("Caja de abogado");
                    }}
                    >
                    <img
                        src={blank}
                        height="150px"
                        width="150px"
                        alt=""
                    />
                </DropTarget>
            </div>
            <div className="tribu-item">
            <DropTarget
                    id="my_target"
                    targetKey="testigo_target"
                    onHit={function () {
                        alert("Caja testigo");
                    }}
                    >
                    <img
                        src={blank}
                        height="100px"
                        width="150px"
                        alt=""
                        
                    />
                </DropTarget></div>   
                <div className="tribu-item">
                <DropTarget
                    id="my_target"
                    targetKey="policia_target"
                    onHit={function () {
                        alert("Caja Policia");
                    }}
                    >
                    <img
                        src={blank}
                        height="100px"
                        width="150px"
                        alt=""
                    />
                </DropTarget>
            </div>
            <div className="tribu-item">
            <DropTarget
                    id="my_target"
                    targetKey="foo"
                    onHit={function () {
                        alert("Caja 8");
                    }}
                    >
                    <img
                        src={blank}
                        height="100px"
                        width="150px"
                        alt=""
                    />
                </DropTarget>
            </div>
            <div className="tribu-item">
            <DropTarget
                    id="my_target"
                    targetKey="foo"
                    onHit={function () {
                        alert("Caja 9");
                    }}
                    >
                    <img
                        src={blank}
                        height="100px"
                        width="150px"
                        alt=""
                    />
                </DropTarget></div>   
        </div>
    </div>
  );
}

export default Tribunal;