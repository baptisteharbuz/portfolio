import React, { useState } from 'react';
// STYLES
import "../Styles/Projets.css";
import "../Styles/Texte.css";
// VIDEOS
import EnigmesEvadees from "../Assets/Videos/Enigmes-Evadees.mp4"
import Garçonne from "../Assets/Videos/Garçonne-Accueil.mp4"

const Projets = () => {
    const [enigmeEvadeesHovered, setEnigmeEvadeesHovered] = useState(false);
    const [cafeCremeHovered, setCafeCremeHovered] = useState(false);
    const [garçonneHovered, setGarçonneHovered] = useState(false);

    return (
        <div className='mesprojets-container'>
            {/* <div className='cards-projets'> */}
                <div className='bloc-projets'>
                    {enigmeEvadeesHovered ?
                        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0 2vw 2vw 0' }}>
                            <source src={EnigmesEvadees} type="video/mp4" />
                        </video>
                        : cafeCremeHovered ?
                            <h1 className='h1-wait'>En développemenent</h1>
                            : garçonneHovered ?
                                <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: '3', borderRadius: '0 2vw 2vw 0' }}>
                                    <source src={Garçonne} type="video/mp4" />
                                </video>
                                : ''}
                </div>
                <div className='bloc-txt-projets-container'>
                    <div className='bloc-txt-projets'>
                        <h1 className='h1-project'>PROJETS</h1>
                        <div className='line'></div>
                        <div
                            className='enigme-evadees'
                            onMouseEnter={() => setEnigmeEvadeesHovered(true)}
                            onMouseLeave={() => setEnigmeEvadeesHovered(false)}
                        >
                            <h2 className='h2-project'>ENIGMEs EVADÉES</h2>
                            <h6 className='h6-project'>Escape Game</h6>
                        </div>
                        <div
                            className='cafe-creme'
                            onMouseEnter={() => setCafeCremeHovered(true)}
                            onMouseLeave={() => setCafeCremeHovered(false)}
                        >
                            <h2 className='h2-project'>CAFÉ CRÈME</h2>
                            <h6 className='h6-project'>Cofee Shop</h6>
                        </div>
                        <div
                            className='garçonne'
                            onMouseEnter={() => setGarçonneHovered(true)}
                            onMouseLeave={() => setGarçonneHovered(false)}
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