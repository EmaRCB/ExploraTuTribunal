import './App.css';
import './tribunal.css';
import './paginas.css';
import { useState } from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import Dialog from './components/dialog';
import titoVoice from './assets/sounds/tito_voice.mp3';
import itzelVoice from './assets/sounds/itzel_voice.mp3';
import blank from './assets/bg/blank.png';
import Juez from './assets/tito/Juez.png';
import Abogado from './assets/tito/Abogado.png';
import Policia from './assets/tito/Policia.png';
import Testigo from './assets/tito/Testigo.png';


function Tribunal() {
    const [viewIndex, setViewIndex] = useState(0);
    const [viewPage, setPageIndex] = useState(0);

    const dialogPages1 = [
        {
        title: "Tito:",
        content: "¡Bienvenida al Tribunal de Justicia! Aquí se hacen los juicios y se hace cumplir la Ley. En los juicios van a hablar de lo que pasó para decir cómo pueden ayudarte.",
        character: "Tito"
        },
        {
        title: "Tito:",
        content: "Aquí, hay  muchas personas que te ayudarán.",
        character: "Tito"
        },
        {
        title: "Itzel:",
        content: "¿Quiénes son esas personas?",
        character: "Itzel"
        },
        {
        title: "Tito:",
        content: "Ya conocimos a algunas personas de las otras salas, pero también hay personas que no hemos visto ¡pero todas son importantes!",
        character: "Tito"
        },
        {
        title: "Tito:",
        content: "Yo te ayudaré. Te voy a presentar a una persona y tú me vas a ayudar a buscar en donde la podemos poner.",
        character: "Tito"
        },
        {
        title: "Tito:",
        content: "¡Vamos a empezar!",
        character: "Tito"
        }
    ];

    const dialogPages2 = [
        {
        title: "Tito:",
        content: "¡Correcto! Ahí va el Juez. Continuemos.",
        character: "Tito"
        }
    ];

    const dialogPages3 = [
        {
        title: "Tito:",
        content: "¡Correcto! Ahí va el Abogado.",
        character: "Tito"
        },
        {
        title: "Itzel:",
        content: "¡Qué bien! ¿y sólo hay un abogado en el Juicio?",
        character: "Itzel"
        },
        {
        title: "Tito:",
        content: "¡Muy buena pregunta! Así como tu amigo tendrá un abogado que lo defienda, también va a haber un abogado que acompañe a la otra persona. Porque todas las personas tienen el derecho de recibir apoyo de una abogada o abogado.",
        character: "Tito"
        },
        {
            title: "Tito:",
            content: "Continuemos",
            character: "Tito"
        }
    ];

    const dialogPages4 = [
        {
        title: "Tito:",
        content: "Muy bien! Ahí va el policía",
        character: "Tito"
        }
    ];

    const dialogPages5 = [
        {
        title: "Tito:",
        content: "¡Felicidades! Ahí va el testigo.",
        character: "Tito"
        },
        {
        title: "Tito:",
        content: "Estas personas trabajan juntas para hacer que se cumpla la Ley y poder ayudar a tu amigo y a todas las niñas y niños que vienen al Tribunal.",
        character: "Tito"
        },
        {
        title: "Itzel:",
        content: "¡Wow! Qué bueno que hay muchas personas que van a ayudar a mi amigo y a todas las niñas y niños que estén aquí.",
        character: "Itzel"
        },
        {
        title: "Tito:",
        content: "Así es, es hora de terminar nuestro paseo por el Tribunal.",
        character: "Tito"
        }
    ];

    const toggleDialog1 = () => {
        let beat = new Audio('https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav');
        beat.play();
        console.log(viewPage);
        setPageIndex((prevDialog) => (prevDialog + 1) % dialogPages1.length);
      };

    const toggleDialog2 = () => {
        let beat = new Audio('https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav');
        beat.play();
        console.log(viewPage);
        setPageIndex((prevDialog) => (prevDialog + 1) % dialogPages2.length);
      };
    
      const toggleDialog3 = () => {
        let beat = new Audio('https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav');
        beat.play();
        console.log(viewPage);
        setPageIndex((prevDialog) => (prevDialog + 1) % dialogPages3.length);
      };
    
      const toggleDialog4 = () => {
        let beat = new Audio('https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav');
        beat.play();
        console.log(viewPage);
        setPageIndex((prevDialog) => (prevDialog + 1) % dialogPages4.length);
      };
    
      const toggleDialog5 = () => {
        let beat = new Audio('https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav');
        beat.play();
        console.log(viewPage);
        setPageIndex((prevDialog) => (prevDialog + 1) % dialogPages5.length);
      };
    
    const toggleView = () => {
        alert("Fin.");
        console.log(viewPage);
        setViewIndex((prevIndex) => (prevIndex + 1) % 8);
    };

    const state = {
        draggableVisibility: "block"
    };

    const itemEnters = (item) => {
        alert("Caja de " + item);
        setPageIndex(0);
        console.log(viewPage);
        setViewIndex((prevIndex) => (prevIndex + 1) % 8);
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
    <div className='pagina_1_container'>

        {viewIndex === 0 && (
          <div className='story_container'>
            <div className="character" id='tito' onClick={handleTitoClick}></div>
            <div className="character" id='itzel' onClick={handleItzelClick}></div>
            <div className="dialog_box">
                <Dialog
                className="dialog"
                title={dialogPages1[viewPage].title}
                content={dialogPages1[viewPage].content}
                character={dialogPages1[viewPage].character}
                onToggle={toggleDialog1}
                />
                
                {(viewPage === dialogPages1.length - 1) ? (
                <button className='next_button' onClick={toggleView}>Finish</button>
                ): <button className='next_button' onClick={toggleDialog1}>Next</button>}
            </div>
          </div>
          
        )}
        {viewIndex === 1 && 
          (
            <div className='story_container'>
                <div className="character" id='tito' onClick={handleTitoClick}></div>
                <div className='character' id='juez' style={{ display: "block" }}>
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
            </div>
          )    
        }
        {viewIndex === 2 && 
          (
            <div className='story_container'>
            <div className="character" id='tito' onClick={handleTitoClick}></div>
            <div className="character" id='itzel' onClick={handleItzelClick}></div>
            <div className="dialog_box">
                <Dialog
                className="dialog"
                title={dialogPages2[viewPage].title}
                content={dialogPages2[viewPage].content}
                character={dialogPages2[viewPage].character}
                onToggle={toggleDialog2}
                />
                
                {(viewPage === dialogPages2.length - 1) ? (
                <button className='next_button' onClick={toggleView}>Finish</button>
                ): <button className='next_button' onClick={toggleDialog2}>Next</button>}
            </div>
          </div>
          )    
        }
        {viewIndex === 3 && 
          (
            <div className='story_container'>
                <div className="character" id='tito' onClick={handleTitoClick}></div>
                <div className='character' id='abogado' style={{ display: "block" }}>
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
            </div>
          )    
        }
        {viewIndex === 4 && 
          (
            <div className='story_container'>
            <div className="character" id='tito' onClick={handleTitoClick}></div>
            <div className="character" id='itzel' onClick={handleItzelClick}></div>
            <div className="dialog_box">
                <Dialog
                className="dialog"
                title={dialogPages3[viewPage].title}
                content={dialogPages3[viewPage].content}
                character={dialogPages3[viewPage].character}
                onToggle={toggleDialog3}
                />
                
                {(viewPage === dialogPages3.length - 1) ? (
                <button className='next_button' onClick={toggleView}>Finish</button>
                ): <button className='next_button' onClick={toggleDialog3}>Next</button>}
            </div>
          </div>
          )    
        }
        {viewIndex === 5 && 
          (
            <div className='story_container'>
                <div className="character" id='tito' onClick={handleTitoClick}></div>
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
            </div>
          )    
        }
        {viewIndex === 6 && 
          (
            <div className='story_container'>
            <div className="character" id='tito' onClick={handleTitoClick}></div>
            <div className="character" id='itzel' onClick={handleItzelClick}></div>
            <div className="dialog_box">
                <Dialog
                className="dialog"
                title={dialogPages4[viewPage].title}
                content={dialogPages4[viewPage].content}
                character={dialogPages4[viewPage].character}
                onToggle={toggleDialog4}
                />
                
                {(viewPage === dialogPages4.length - 1) ? (
                <button className='next_button' onClick={toggleView}>Finish</button>
                ): <button className='next_button' onClick={toggleDialog4}>Next</button>}
            </div>
          </div>
          )    
        }
        {viewIndex === 7 && 
          (
            <div className='story_container'>
                <div className="character" id='tito' onClick={handleTitoClick}></div>
                <div className='character' id='testigo' style={{ display: "block" }}>
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
            </div>
          )    
        }
        {viewIndex === 8 && 
          (
            <div className='story_container'>
            <div className="character" id='tito' onClick={handleTitoClick}></div>
            <div className="character" id='itzel' onClick={handleItzelClick}></div>
            <div className="dialog_box">
                <Dialog
                className="dialog"
                title={dialogPages5[viewPage].title}
                content={dialogPages5[viewPage].content}
                character={dialogPages5[viewPage].character}
                onToggle={toggleDialog5}
                />
                
                {(viewPage === dialogPages5.length - 1) ? (
                <button className='next_button' onClick={toggleView}>Finish</button>
                ): <button className='next_button' onClick={toggleDialog5}>Next</button>}
            </div>
          </div>
          )    
        }
        
        
        

        <div className='character' id='policia' style={{ display: "none" }}>
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
                        itemEnters('juez');
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
                        itemEnters('abogado');
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
                        itemEnters('testigo');
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
                        itemEnters('policia');
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
                        itemEnters('abogado');
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
                        itemEnters('testigo');
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
                        itemEnters('policia');
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