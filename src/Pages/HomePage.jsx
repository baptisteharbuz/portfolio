import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Style.css'
import '../Styles/Texte.css'

const Accueil = () => {
  return (
    <div className='body-home'>
    <div className='txt-home'>
      <h1 className='harbuz'>HARBUZ</h1>
      <h1 className='baptiste'>BAPTISTE</h1>
      <div className='portfolio-justify'>
      <h3 className='portfolio'>PORTFOLIO</h3>
      </div>
      <h4 className='h4-homepage'><Link to='/mesprojets' data-text='MES PROJETS'>Mes projets</Link></h4>
    </div>
  </div>

  );
};

export default Accueil;