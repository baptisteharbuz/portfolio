import React from 'react';
import "../Styles/Cv.css"

const cv = () => {
    return (
        <div className='cv-container'>
            <div className='cv'>
                <div className='cv-title'>
                    <div className='txt-name'>
                        <h1 className='baptiste-cv'>BAPTISTE</h1>
                        <h1 className='harbuz-cv'>HARBUZ</h1>
                    </div>
                    <h3 className='h3-cv'>DÉVELOPPEUR WEB & WEB MOBILE</h3>
                </div>
                {/* <div className='div-container'> */}
                <div className='cv-left'>
                    <div className='orange-up'>
                        <div className='red'></div>
                        <div className='yellow'></div>
                        <div className='green'></div>
                        <div className='picture-container'>
                            <div className='picture-cv'>
                            </div>
                        </div>
                    </div>

                    <div className='yellow-down'>
                        <div className='beside-picture'></div>
                        <div className='profil'>
                            <h2 className='h2-cv'>PROFIL</h2>
                            <p className='p-cv'>31 ans</p>
                            <p className='p-cv'><b>Permis B</b></p>
                            <p className='p-cv'>Véhicule</p>
                            <p className='p-cv'><b>06 18 12 53 30</b></p>
                            <p className='p-cv'>contact@baptisteharbuz.fr</p>
                            <p className='p-cv'><b>baptiste-harbuz</b></p>
                        </div>
                        <div className='formation'>
                            <h2 className='h2-cv'>FORMATIONS</h2>
                            <p className='p-cv'><b>Développeur Web & Web Mobile</b></p>
                            <p className='p-cv'>Bac +2</p>
                            <p className='p-cv'>ForEach Academy</p>
                            <p className='p-cv'>2023 - 2024 <b>EN COURS</b></p>
                            <div className='logo-formations'>
                                <div className='logo'>
                                    <div className='logo-html'></div>
                                    <h6 className='h6-cv'>HTML</h6>
                                </div>
                                <div className='logo'>
                                    <div className='logo-css'></div>
                                    <h6 className='h6-cv'>CSS</h6>
                                </div>
                                <div className='logo'>
                                    <div className='logo-js'></div>
                                    <h6 className='h6-cv'>JAVASCRIPT</h6>
                                </div>
                                <div className='logo'>
                                    <div className='logo-react'></div>
                                    <h6 className='h6-cv'>REACT</h6>
                                </div>
                                <div className='logo'>
                                    <div className='logo-node'></div>
                                    <h6 className='h6-cv'>NODE</h6>
                                </div>
                            </div>
                            <p className='p-cv'><b>Accueil Relation Client Usager</b></p>
                            <p className='p-cv'>Baccalauréat Professionnel</p>
                            <p className='p-cv'>Lycée Deforest de Lewarde</p>
                            <p className='p-cv'>2012</p>
                        </div>
                        <div className='centres dinteret'>
                            <h2 className='h2-cv'>CENTRES D'INTERÊT</h2>
                            <div className='txt-centre-dinteret'>
                                <p className='p-cv'><b>MUSIQUE :</b> Production musicale professionnelle depuis 2017
                                    Compositeur, arrangeur
                                    "Guitare, Basse, Clavier, M.A.O"</p>
                            </div>
                            <div className='txt-centre-dinteret'>
                                <p className='p-cv'><b>GRAPHISME :</b> Image & Vidéo (Monteur, Cadreur, Graphiste, Web designer, Motion designer)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='cv-right'>
                    <div className='up-cv'>
                        <p className='p-cv'>En tant qu'aspirant <b>développeur web</b>, Je suis convaincu que ma créativité, mon esprit d'analyse et ma capacité à communiquer sont des atouts précieux pour réussir dans ce domaine.
                            En cours de validation pour mon diplôme <b>bac +2 Développeur Web & Web Mobile</b>, je suis déterminé à apprendre et à me perfectionner d’avantage dans ce domaine. Ma passion pour l'IT et ma curiosité insatiable me permettrons d'acquérir les connaissances nécessaires en matière de programmation et de développement web afin de devenir opérationnel</p>
                    </div>
                    <div className='competences-container'>
                        <div className='competences'>
                            <h2 className='h2-cv'>COMPÉTENCES</h2>
                        </div>
                        <div className='txt-competences'>
                            <p className='p-cv'><b>• FRONT-END :</b> Maîtrise des langages <b>HTML</b>, <b>CSS</b> et <b>JavaScript</b> pour la création et la personnalisation de l'interface utilisateur. Maîtrise du framework <b>React</b> pour le développement d'applications web interactives et réactives</p>
                            <p className='p-cv'><b>• BACK-END :</b> Gestion et conception de bases de données avec <b>MySQL</b>. Maîtrise du framework <b>Node.js</b> pour le développement côté serveur</p>
                            <p className='p-cv'><b>•</b> Coordination et conception de contenus visuels innovants en intégrant infographies, textes, images, illustrations, vidéos, GIF, etc. Planification et réalisation de divers contenus</p>
                            <p className='p-cv'><b>•</b> Maitrise des logiciels de la suite <b>Adobe</b> (Photoshop, Illustrator, Indesign, After Effect, Premiere Pro)</p>
                        </div>
                    </div>
                    <div className='experiences-container'>
                        <div className='experiences'>
                            <h2 className='h2-cv'>EXPÉRIENCE</h2>
                        </div>
                        <div className='exp-container'>
                            <div className='detail-txt-container'>
                                <div className='title-experience'>
                                    <h4 className='h4-cv'>LIVREUR</h4>
                                    <p className='p-cv'>Place du marché</p>
                                    <p className='p-cv'>2023-2021</p>
                                </div>
                                <div className='txt-experience'>
                                    <p className='p-cv'>Livraison de produits alimentaires dans les Hauts de France. Fidélisation client et ventes complémentaires </p>
                                </div>
                            </div>
                            <div className='detail-txt-container'>
                                <div className='title-experience'>
                                    <h4 className='h4-cv'>RÉGISSEUR SPECTACLE</h4>
                                    <p className='p-cv'>Ville de Roubaix</p>
                                    <p className='p-cv'>2019-2018</p>
                                </div>
                                <div className='txt-experience'>
                                    <p className='p-cv'>Régisseur son et lumière. Accueil des artistes, coordination technique, gestion des équipements, garant de la qualité sonore et visuelle</p>
                                </div>
                            </div>
                            <div className='detail-txt-container'>
                                <div className='title-experience'>
                                    <h4 className='h4-cv'>COMMERCIAL & CHARGÉE DE RELATION CLIENT</h4>
                                    <p className='p-cv'>TEMPO Service</p>
                                    <p className='p-cv'>2017-2016</p>
                                </div>
                                <div className='txt-experience'>
                                    <p className='p-cv'>Développement du portefeuille client par la prospection et la négociation. Gestion intégrale du cycle professionnel, de la sélection des collaborateurs par entretien au placement réussi des postes avec les clients partenaires</p>
                                </div>
                            </div>
                            <div className='detail-txt-container'>
                                <div className='title-experience'>
                                    <h4 className='h4-cv'>ÉLECTRICIEN</h4>
                                    <p className='p-cv'>GARDSEC LTD LONDRES</p>
                                    <p className='p-cv'>2016</p>
                                </div>
                                <div className='txt-experience'>
                                    <p className='p-cv'>Installation d’alarmes et de système de vidéo surveillance chez les professionnels et particuliers à Londres </p>
                                </div>
                            </div>
                            <div className='detail-txt-container'>
                                <div className='title-experience'>
                                    <h4 className='h4-cv'>VENDEUR</h4>
                                    <p className='p-cv'>Star Folies</p>
                                    <p className='p-cv'>Air Music</p>
                                    <p className='p-cv'>Chauss Expo</p>
                                    <p className='p-cv'>2016-2013</p>
                                </div>
                                <div className='txt-experience'>
                                    <p className='p-cv'>Accueil et gestion de la relation client, techniques de merchandising, découverte des besoins et des motivations d’achat, proposition commerciale et argumentation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default cv;