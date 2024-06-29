import React from 'react';
import '../Styles/Contact.scss'
import { BsFillTelephoneFill, BsEnvelope, BsLinkedin, BsGithub } from "react-icons/bs";

const contact = () => {

    return (
        <div className='contact-container'>
            <section>
                <h1 className='h1-contact'>contact</h1>
                <div className='line'></div>
                <div className="contact-container">
                    <a href="tel:0618125330" className="contact-item">
                        <BsFillTelephoneFill className='icons' />
                        <h2>06 18 12 53 30</h2>
                        <h6 className='contact-click'>Click !</h6>
                    </a>
                    <div className='contact-item' onClick={() => window.location.href = "mailto:contact@baptisteharbuz.fr"}>
                        <BsEnvelope className='icons' />
                        <h2 className='mail'>contact@baptisteharbuz.fr</h2>
                        <h6 className='contact-click'>Click !</h6>
                    </div>
                    <a href="https://www.linkedin.com/in/baptiste-harbuz/" target="_blank" rel="noopener noreferrer" className="contact-item">
                        <BsLinkedin className='icons' />
                        <h2 className='linkedin'>LinkedIn</h2>
                        <h6 className='contact-click'>Click !</h6>
                    </a>
                    <a href="https://github.com/baptisteharbuz" target="_blank" rel="noopener noreferrer" className="contact-item">
                        <BsGithub className='icons' />
                        <h2 className='github'>GitHub</h2>
                        <h6 className='contact-click'>Click !</h6>
                    </a>
                </div>
                <div className='txt-presentation'>
                    <span>🎨 Je suis passionné par l’art et le design graphique. La communication visuelle est pour moi essentielle. Logo pour restaurant, pochettes de singles, motion design pour présentation de marque, montage/cadrage de vidéo & clip.
                        <br />
                        <br />
                        🎸 Mon amour pour la musique m'a poussé dans un groupe qui me permet de déployer et d’accroître mes atouts tant sur l’aspect graphique et visuel que sur la production musicale et son interprétation scénique.
                        <br />
                        <br />
                        💻 Le développement web n’est qu’une suite logique dans la continuité de mon aventure professionnelle et artistique. Diplomé en Developpement Web & Web mobile (Bac + 2) et major de promotion à la ForEach Academy, je poursuis ma route en altenance depuis Juillet 2024 en Conception et Développement d'Application (Bac + 4).
                        <br />
                        <br />
                        🎨🎵💻 Je suis le créateur qui mélange les couleurs, compose les mélodies et écrit le code. Mon parcours est une quête pour unifier l'art, la musique et la technologie. Chaque jour est une nouvelle page blanche, une partition à interpréter et un site web à développer 🚀</span>
                </div>
            </section>
        </div>
    )
}

export default contact;