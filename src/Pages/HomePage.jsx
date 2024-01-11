import React from 'react';
import '../Styles/Style.css'
import '../Styles/Texte.css'

const Accueil = () => {
  return (
    <div className='body-home' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    {/* <video autoPlay loop muted className="fullscreen-video">
      <source src="/videos/Vidéo_bg2.mp4" type="video/mp4"></source>
    </video> */}
    <div className='txt-home'>
      <h1 className='harbuz'>HARBUZ</h1>
      <h1 className='baptiste'>BAPTISTE</h1>
      <div className='portfolio-justify'>
      <h3 className='portfolio'>P O R T F O L I O</h3>
      </div>
    </div>
  </div>

  );
};

export default Accueil;