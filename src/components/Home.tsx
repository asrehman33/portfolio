import React, { useEffect } from 'react';
import Background from './BackgroundDarkd';
import ContactLogo from './ContactLogo';
import './css/Home.css';
import MyNavbar from './Navbar';

// npm install gh-pages --save-dev
// npm run build

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className='presentation'>
                <img src={process.env.PUBLIC_URL + "/picture/photo.png"} alt="photo de profil" className='picture'/>
                <div className='information'>
                    <h1>Asad-ur Rehman</h1>
                    <h2>Master's Student in Networks & Computer Science</h2>
                    <h3>Enseirb-Matmeca / AeroDIODE</h3>
                </div>
            </div>
            <div className="containerHome">
                <div className="quiSuisJe">
                    <h1>Who am I?</h1>
                    <p>
                        Hi! I'm <strong>Asad-ur Rehman</strong>. I'm enrolled in a three-year Master’s degree apprenticeship, alternating study periods at Enseirb-Matmeca Networks & Computer Science and work periods at AeroDIODE.
                        Passionate about development, I'm always looking for new projects to work on.
                        On this site, you'll find some of my personal and academic projects, as well as my contact information if you'd like to reach out to me.
                    </p>
                </div>
                <div className="mesObjectifs">
                    <h1>My goals</h1>
                    <p>
                        My goal is to build strong skills in computer networks and software development so I can grow as an engineer and contribute to innovative technical projects.
                        To achieve this, I keep learning new technologies and work on different projects to improve my programming and problem-solving skills.
                        I’m currently looking for a 12-week internship starting on June 27th, 2026, in either network engineering or software development.
                    </p>
                </div>
            </div>

            <ContactLogo />
            <Background />
        </div>
    );
};

export default Home;
