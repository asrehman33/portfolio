import React from 'react';
import './css/ContactLogo.css';

const ContactLogo: React.FC = () => {
    return (
        <div className="LogoContact">
            <div className="logo">
                <a href="https://www.linkedin.com/in/asad-rehman-6a4393279/" className="icon" target="_blank" rel="noopener noreferrer">
                    <div className="circle"></div>
                    <img src={process.env.PUBLIC_URL + "/picture/linkedin.png"} alt="logo"/>
                </a>
                <a href="https://github.com/asrehman33" className="icon" target="_blank" rel="noopener noreferrer">
                    <div className="circle"></div>
                    <img src={process.env.PUBLIC_URL + "/picture/github.png"} alt="logo"/>
                </a>
                <a href="mailto:formulaire" className="icon" target="_blank" rel="noopener noreferrer">
                    <div className="circle"></div>
                    <img src={process.env.PUBLIC_URL + "/picture/email.png"} alt="logo email"/>
                </a>
            </div>
        </div>
    );
}

export default ContactLogo;