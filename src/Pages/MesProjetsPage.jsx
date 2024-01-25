import React, { useRef, useState } from 'react';
// STYLES
import "../Styles/Projets.css";
import "../Styles/Texte.css";
// VIDEOS
import EnigmesEvadees from "../Assets/Videos/Enigmes-Evadees.mp4"
import Garçonne from "../Assets/Videos/Garçonne-Accueil.mp4"

const Projets = () => {
    // const [enigmeEvadeesHovered, setEnigmeEvadeesHovered] = useState(false);
    // const [cafeCremeHovered, setCafeCremeHovered] = useState(false);
    // const [garçonneHovered, setGarçonneHovered] = useState(false);
    const [activeProject, setActiveProject] = useState(null);

    const videoref1 = useRef();


    return (
        <div className='mesprojets-container'>
            {/* <div className='cards-projets'> */}
            <div className='bloc-projets'>
                {activeProject === 'enigmeEvadees' && (
                    <div className='videos-hovered1'>
                        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2vw' }} key='video1'>
                            <source ref={videoref1} src={EnigmesEvadees} type="video/mp4" key={"video3"} />
                        </video>
                        <button onClick={() => window.open("https://github.com/baptisteharbuz/portfolio", "_blank", "noopener,noreferrer")}>En voir plus</button>
                    </div>
                )} {activeProject === 'cafeCreme' && (
                    <div className='videos-hovered2'>
                        <div className='CafeCreme-Projet'>
                            <h1 className='h1-wait'>En développemenent</h1>
                        </div>
                        <button>En voir plus</button>
                    </div>
                )} {activeProject === 'garçonne' && (
                    <div className='videos-hovered3'>
                        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: '3', borderRadius: '2vw' }} key='video2'>
                            <source ref={videoref1} src={Garçonne} type="video/mp4" key={"video4"} />
                        </video>
                        <button onClick={() => window.open("https://garçonne.fr/", "_blank", "noopener,noreferrer")}>En voir plus</button>
                    </div>
                )}
            </div>
            <div className='bloc-txt-projets-container'>
                <div className='bloc-txt-projets'>
                    <h1 className='h1-project'>PROJETS</h1>
                    <div className='line'></div>
                    <div
                        className='enigme-evadees'
                        onClick={() => setActiveProject('enigmeEvadees')}
                    >
                        <h2 className='h2-project'>ENIGMEs EVADÉES</h2>
                        <h6 className='h6-project'>Escape Game</h6>
                    </div>
                    <div
                        className='cafe-creme'
                        onClick={() => setActiveProject('cafeCreme')}
                    >
                        <h2 className='h2-project'>CAFÉ CRÈME</h2>
                        <h6 className='h6-project'>Cofee Shop</h6>
                    </div>
                    <div
                        className='garçonne'
                        onClick={() => setActiveProject('garçonne')}
                    >
                        <h2 className='h2-project'>GARÇONNE</h2>
                        <h6 className='h6-project'>Music Band</h6>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Projets;