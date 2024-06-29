import React from 'react';
import "../Styles/Cv.scss"
import picture from "../Assets/Images/Baptiste Harbuz Photo.jpg"

const cv = () => {
    return (
        <div className='container'>
            <div className='resume-container'>
                <div className='resume-part-1'>
                    <img className='profil' src={picture} alt="Baptiste Harbuz" />

                    <section className='profil-container'>
                        <h2>PROFIL</h2>
                        <div>
                            <p><b>Permis B</b></p>
                            <p>Véhiculé</p>
                            <p><b>06 18 12 53 30</b></p>
                            <p><b>contact@baptisteharbuz.fr</b></p>
                            <section>
                                <div className='link-logo'>
                                    <div class="logo linkedin"></div>
                                    <p><b>Linkedin : baptiste-harbuz</b></p>
                                </div>
                                <div className='link-logo'>
                                    <div class="logo github"></div>
                                    <p><b>GitHub : baptisteharbuz</b></p>
                                </div>
                                <div className='link-logo'>
                                    <div class="logo portfolio"></div>
                                    <p><b>Portfolio : baptisteharbuz.fr</b></p>
                                </div>
                            </section>
                        </div>
                    </section>

                    <section className='training-container'>
                        <h2>FORMATION</h2>
                        <div>
                            <p><b>Concepteur Développeur d'Application Bac + 4</b></p>
                            <p>2024 - 2026 / ForEach Academy</p>
                            <ul>
                                <li>Java / Spring, Dart / Flutter</li>
                                <li>Vue.js / Vite / Nuxt, Typescript</li>
                                <li>API REST</li>
                                <li>Docker, Google Cloud Platform, pratiques Devops</li>
                            </ul>
                        </div>
                        <div>
                            <p><b>Développeur Web & Web Mobile Bac + 2</b></p>
                            <p>2023 - 2024 / ForEach Academy</p>
                        </div>
                        <div>
                            <p><b>Baccalauréat Professionnel</b></p>
                            <p>Spécialité Acceuil Relation Client Usager</p>
                            <p>2012 / Lycée Deforest de Lewarde</p>
                        </div>
                    </section>
                    <section className='interest-container'>
                        <h2>CENTRE D'INTÉRÊT</h2>
                        <p><b>MUSIQUE : </b> Production, composition, arrangements (Guitare, Basse, Clavier, M.A.O)</p>
                        <p><b>GRAPHISME : </b>Image & Vidéo (Monteur, Cadreur, Graphiste, Web design, Motion design)</p>
                    </section>
                </div>

                <div className='resume-part-2'>
                    <section className='intro'>
                        <h1>BAPTISTE HARBUZ</h1>
                        <h2>Concepteur développeur d'application</h2>
                        <p>Passionné par les technologies de l’information et disposant de compétences solides en full stack, je souhaite mettre à profit ma créativité et mon esprit d'analyse pour la réalisation de vos projets</p>
                    </section>

                    <section className='skills-container'>
                        <div>
                            <h2>Hard Skills</h2>
                            <ul>
                                <li>Gestion de base de donées</li>
                                <li>Développement back end</li>
                                <li>Développement front end</li>
                                <li>Gestion de projet</li>
                                <li>Méthodes agiles</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Soft Skills</h2>
                            <ul>
                                <li>Communication</li>
                                <li>Travail en équipe</li>
                                <li>Autonomie</li>
                                <li>Adaptabilité</li>
                                <li>Curiosité</li>
                            </ul>
                        </div>
                    </section>

                    <section className='skills-and-projects'>
                        <h2>Compétences & Projets</h2>
                        <section>
                            <div>
                                <ul>
                                    <li>Front-end :</li>
                                </ul>
                                <ul>
                                    <li>- Javascript</li>
                                    <li>- React, React Native</li>
                                    <li>- HTML, CSS, SCSS, SASS</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Back-end</li>
                                </ul>
                                <ul>
                                    <li>- Node.js</li>
                                    <li>- Express.js</li>
                                    <li>- PHP</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Base de données :</li>
                                </ul>
                                <ul>
                                    <li>- SQL (MYSQL, PostgreSQL)</li>
                                    <li>- Workbench, DBeaver</li>
                                    <li>- Dbdiagram.io</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Gestion de projet :</li>
                                </ul>
                                <ul>
                                    <li>- Git & GitHub</li>
                                    <li>- Agile</li>
                                    <li>- Kanban</li>
                                    <li>- Notion / Slack</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><b>Café Crème -&gt; </b>Projet from scratch, vente de café en ligne (Projet d'étude).</li>
                                    <li><b>Énigme Évadés -&gt; </b>Site de réservation pour un Escape Game (Projet d’étude).</li>
                                    <li><b>L’infiltré -&gt; </b>Jeux de société mobile développé avec React Native.</li>
                                    <li><b>Portfolio -&gt; </b>Développé en React / HTML / CSS / SCSS.</li>
                                </ul>
                            </div>
                        </section>
                    </section>

                    <section className='experience-container'>
                        <h2>Expériences</h2>
                        <section>
                            <div>
                                <h3>Développeur</h3>
                                <h3>Full Stack</h3>
                                <p>Dealinka</p>
                                <p>2024 - Actuel</p>
                            </div>
                            <div>
                                <ul>
                                    <li>Développement de la base de données.</li>
                                    <li>Développement back end.</li>
                                    <li>Développement front end.</li>
                                    <li>Mise en production.</li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <div>
                                <h3>Développeur</h3>
                                <h3>back end</h3>
                                <p>Elise</p>
                                <p>2024</p>
                            </div>
                            <div>
                                <ul>
                                    <li>Gestion des tickets de maintenance.</li>
                                    <li>Développement de nouvelles fonctionnalités.</li>
                                    <li>Méthodes agiles (<b>Kanban</b>).</li>
                                    <li>Initiation au langage <b>Ruby</b> et <b>Ruby on Rails</b>.</li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <div>
                                <h3>Livreur</h3>
                                <p>Place du marché</p>
                                <p>2021 - 2023</p>
                            </div>
                            <div>
                                <ul>
                                    <li>Livraison de produits alimentaires.</li>
                                    <li>Fidélisation des clients.</li>
                                    <li>Vente de produits complémentaire.</li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <div>
                                <h3>Régisseur Spéctacle</h3>
                                <p>Ville de Roubaix</p>
                                <p>2018 - 2017</p>
                            </div>
                            <div>
                                <ul>
                                    <li>Accueil des artistes.</li>
                                    <li>Coordination technique, gestion des équipements.</li>
                                    <li>Garant de la qualité sonore et visuelle.</li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <div>
                                <h3>Commercial & Chargé </h3>
                                <h3>de relation client</h3>
                                <p>TEMPO Service</p>
                                <p>2016 - 2017</p>
                            </div>
                            <div>
                                <ul>
                                    <li>Développement du portefeuille client.</li>
                                    <li>BtoB / BtoC.</li>
                                    <li>Recrutement des collaborateurs</li>
                                    <li>Gestion clients / collaborateurs</li>
                                </ul>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default cv;