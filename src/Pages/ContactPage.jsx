import React from 'react';
import '../Styles/Contact.css'

const contact = () => {

    return (
        <div className='contact-container'>
            <div className='txt-contact'>
                <h1 className='h1-contact'>contact</h1>
                <div className='line'></div>
                <div className='number-container'>
                    <a className='number' href="tel:0618125330">06 18 12 53 30</a>
                </div>
                <div className='mail-container' onClick={() => window.location.href = "mailto:contact@baptisteharbuz.fr"}>
                    <h3 className='mail'>contact@baptisteharbuz.fr</h3>
                    <h6 className='contact-click'>Click !</h6>
                </div>
                <a className='linkedin-container' href="https://www.linkedin.com/in/baptiste-harbuz/" target="_blank" rel="noopener noreferrer">
                    <div className='container-details'>
                        <div className='logo-linkedin'></div>
                        <h3 className='linkedin'>LinkedIn</h3>
                        <h6 className='contact-click'>Click !</h6>
                    </div>
                </a>
                <a className='github-container' href="https://github.com/baptisteharbuz" target="_blank" rel="noopener noreferrer">
                    <div className='container-details'>
                        <div className='logo-github'></div>
                        <h3 className='github'>GitHub</h3>
                        <h6 className='contact-click'>Click !</h6>
                    </div>
                </a>
                <div className='txt-presentation'>
                    <p>🎨 Je suis passionné par l’art et le design graphique. La communication visuelle est pour moi essentielle. Logo pour restaurant, pochettes de singles, motion design pour présentation de marque, montage/cadrage de vidéo & clip.</p>

                    <p>🎸 Mon amour pour la musique ma poussé dans un groupe qui me permet de déployer et d’accroître mes atouts tant sur l’aspect graphique et visuel que sur la production musicale et son interprétation scénique.</p>

                    <p>💻 Le développement web n’est qu’une suite logique dans la continuité de mon aventure professionnelle et artistique. Je suis actuellement en formation Développeur Web & Web Mobile diplômante Bac + 2 à la ForEach Academy.</p>

                    <p>🎨🎵💻 Je suis le créateur qui mélange les couleurs, compose les mélodies et écrit le code. Mon parcours est une quête pour unifier l'art, la musique et la technologie. Chaque jour est une nouvelle page blanche, une partition à interpréter et un site web à développer. Si vous partagez ma passion pour cette aventure multidimensionnelle, je serais ravi de vous rencontrer pour discuter de nos prochains chefs-d'œuvre en perspective 🚀</p>
                </div>
            </div>
        </div>
    )
}

export default contact;