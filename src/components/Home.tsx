import React, { useEffect } from 'react';
import Background from './BackgroundDarkd';
import ContactLogo from './ContactLogo';
import './css/Home.css';
import MyNavbar from './Navbar';

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className='presentation'>
                <img src={process.env.PUBLIC_URL + "/picture/photo.png"} alt="photo de profil" className='picture'/>
                <div className='information'>
                    <h1>Asad-ur Rehman</h1>
                    <h2>Développeur Full-Stack</h2>
                </div>
            </div>
            <div className="containerHome">
                <div className="quiSuisJe">
                    <h1>Qui suis-je ?</h1>
                    <p>
                        Je m'appelle <strong>Rehman Asad-ur</strong> et je suis étudiant en 3ème année de BUT Informatique.
                        Passionné par le développement, je suis constamment à la recherche de nouveaux projets à réaliser.
                        Vous trouverez sur ce site quelques-uns de mes projets personnels et universitaires, ainsi que mes coordonnées si vous souhaitez me contacter.
                    </p>
                </div>
                <div className="mesObjectifs">
                    <h1>Mes objectifs</h1>
                    <p>
                        Mon objectif est de devenir un développeur full-stack, mobile, ou logiciel compétent, et de contribuer au sein d’une entreprise innovante. 
                        Pour y parvenir, je me forme continuellement aux nouvelles technologies et développe des projets personnels pour perfectionner mes compétences. 
                        Après l'obtention de mon BUT Informatique, je souhaite poursuivre en master ou intégrer l'ENSEIRB-MATMECA afin d’approfondir mes connaissances. 
                        Actuellement, je suis à la recherche d'une alternance pour accompagner mon parcours en master.
                    </p>
                </div>
            </div>

            <ContactLogo />
            <Background />
        </div>
    );
};

export default Home;
