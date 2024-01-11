import React, { useState } from 'react';
// STYLES
import "../Styles/Projets.css";
import "../Styles/Texte.css";
// VIDEOS
import EnigmesEvadees from "../Assets/Videos/Enigmes-Evadees.mp4"
import Garçonne from "../Assets/Videos/Garçonne-Accueil.mp4"

const Projets = () => {
    const [enigmeEvadeesHovered, setEnigmeEvadeesHovered] = useState(false);
    // const [cafeCremeHovered, setCafeCremeHovered] = useState(false);
    const [garçonneHovered, setGarçonneHovered] = useState(false);

    return (
        <div className='mesprojets-container'>
            <div className='bloc-projets'>
                {enigmeEvadeesHovered ?
                    <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0 20vw 20vw 0' }}>
                        <source src={EnigmesEvadees} type="video/mp4" />
                    </video>
                    // : cafeCremeHovered ? 
                    //                     <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                    //     <source src={CafeCreme} type="" />
                    // </video>
                    : garçonneHovered ?
                        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: '3' }}>
                            <source src={Garçonne} type="video/mp4" />
                        </video>
                        : ''}
            </div>
            <div className='bloc-txt-projets-container'>
            <div className='bloc-txt-projets'>
                <h1 className='h1-project'>PROJECT</h1>
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
                // onMouseEnter={() => setCafeCremeHovered(true)}
                // onMouseLeave={() => setCafeCremeHovered(false)}
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
        </div>
    )
}

export default Projets;


// import React, { useEffect, useRef } from 'react';
// // STYLES
// // import "../Styles/Projets.css";
// import "../Styles/ProjetsNew.css";
// import "../Styles/Texte.css";
// // VIDEOS
// import EnigmesEvadees from "../Assets/Videos/Enigmes-Evadees.mp4"
// import Garçonne from "../Assets/Videos/Garçonne-Accueil.mp4"

// const Projets = () => {
//     const sliderRef = useRef(null);

//     useEffect(() => {
//         function activate(e) {
//             const slider = sliderRef.current;
//             const items = slider.querySelectorAll('.item');
//             e.target.matches('.next') && slider.append(items[0]);
//             e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
//         }

//         document.addEventListener('click', activate, false);

//         // Cleanup function to remove the event listener
//         return () => {
//             document.removeEventListener('click', activate, false);
//         };
//     }, []);

//     return (
//         <main>
//             <ul className='slider'>
//                 <li className='item'>
//                     <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
//                         <source src={EnigmesEvadees} type="video/mp4" />
//                     </video>
//                     <div className='content'>
//                             <h2 className='title'>ENIGMES EVADÉES</h2>
//                             <h6 className='description'>Escape Game</h6>
//                             <button>Visite bientôt disponible</button>
//                         </div>
//                 </li>
//                 <li className='item'>
//                     <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
//                         <source src={Garçonne} type="video/mp4" />
//                     </video>
//                     <div className='content'>
//                             <h2 className='title'>GARÇONNE</h2>
//                             <h6 className='description'>Music band</h6>
//                             <button>Visite bientôt disponible</button>
//                         </div>
//                 </li>
//             </ul>
//         </main>
//     )
// }

// export default Projets;
