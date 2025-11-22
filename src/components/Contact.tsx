import React, { useState, useEffect } from "react";
import ContactLogo from './ContactLogo';
import Background from "./BackgroundDarkd";
import "./css/Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
    securityAnswer: "" // Champ pour la réponse de sécurité
  });

  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);

  useEffect(() => {
    // Générer deux nombres aléatoires lorsque le composant est monté
    setNum1(Math.floor(Math.random() * 20));
    setNum2(Math.floor(Math.random() * 20));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Vérifier la réponse de sécurité
    if (parseInt(formData.securityAnswer) !== num1 + num2) {
      alert("Incorrect security answer. Please try again.");
      return;
    }

    // URL de Formspree (remplacez par votre URL Formspree)
    const formAction = 'https://formspree.io/f/xzbnpznz';

    // Envoyer les données du formulaire à Formspree en utilisant Fetch
    fetch(formAction, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Réponse de Formspree:', data);
      alert('Your message has been sent successfully!');
    })
    .catch(error => {
      console.error('Error sending form:', error);
      alert('There was an error sending your message. Please try again later.');
    });

    // Réinitialise le formulaire après l'envoi
    setFormData({
      nom: "",
      email: "",
      message: "",
      securityAnswer: ""
    });

    // Générer de nouveaux nombres aléatoires
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
  };

  return (
    <div className="Contact">
      <div className="containerContact">
        <main>
          <h1>Contact Me</h1>
          <p>Feel free to reach out to me for any questions or proposals. I am open to collaboration and professional opportunities.</p>
          <form id="contactForm" onSubmit={handleSubmit}>
            <label htmlFor="nom">Name :</label>
            <input type="text" id="nom" name="nom" required placeholder="Your name" value={formData.nom} onChange={handleChange} />

            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" required placeholder="Your email" value={formData.email} onChange={handleChange} />

            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message" required placeholder="Your message" value={formData.message} onChange={handleChange}></textarea>

            <label htmlFor="securityAnswer">What is {num1} + {num2} ?</label>
            <input type="text" id="securityAnswer" name="securityAnswer" required placeholder="Your answer" value={formData.securityAnswer} onChange={handleChange} />

            <button type="submit">Send</button>
          </form>
        </main>
      </div>

      <Background />
      <ContactLogo />
    </div>
  );
};

export default Contact;