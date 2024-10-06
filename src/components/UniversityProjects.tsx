import react from "react";
import ContactLogo from './ContactLogo';
import Background from "./BackgroundDarkd";
import "./css/UniversityProjects.css";

const UniversityProjects: React.FC = () => {
  return (
    <div className="UniversityProjects">
      <div className="Projects">
        <div className="project symfony">
          <h1>Symfony</h1>
          <div className="containerProjects">
            <div className="picturePlus">
              <img src={process.env.PUBLIC_URL + "/picture/serieTracker.png"} alt="seriesTracker" className="pictureProject"/>
              <a href={process.env.PUBLIC_URL + "/pdf/serieTracker.pdf"} target="_blank" rel="noopener noreferrer">En savoir plus</a>
            </div>
            <p>Ce projet a constitué une étape cruciale de mon apprentissage, 
              mettant en avant mes compétences en développement avec Symfony et ma capacité à intégrer des API externes comme l'OMDB API. 
              À travers la manipulation de données JSON, j'ai perfectionné ma compréhension des entités Doctrine, en particulier dans la gestion détaillée des saisons, épisodes, acteurs, années, genres et pays de production.
              La mise en œuvre de fonctionnalités telles que l'importation, la mise à jour des données et l'affichage détaillé des séries a renforcé mes compétences Symfony, 
              tout en m'immergeant dans un contexte professionnel réaliste. 
              Ce projet a été une opportunité inestimable pour une progression significative dans le développement web.
            </p>
          </div>
        </div>
        <div className="project BasedeDonnée">
          <h1>Création d'une application</h1>
          <div className="containerProjects">
            <div className="picturePlus">
              <img src={process.env.PUBLIC_URL + "/picture/comput-R.png"} alt="BasedeDonnée" className="pictureProject"/>
              <a href={process.env.PUBLIC_URL + "/pdf/comput-R.pdf"} target="_blank">En savoir plus</a>
            </div>
            <p>La réalisation de ce projet nous a permis de nous familiariser avec le C# et les concepts mathématiques nécessaires pour obtenir un affichage graphique réactif,
               ainsi que pour générer des graphiques dynamiques. De plus, l'intégration avec la base de données a renforcé nos compétences en SQL. 
               Nous avons également utilisé Python pour créer des visualisations graphiques à partir des données présentes dans la base de données. 
               Ces données ont été remplies à partir de fichiers CSV contenant des informations comme les émissions de CO2, 
               les déchets recyclés, etc., dans différents pays. Les graphiques générés avec Python nous ont permis d'analyser l'évolution de ces indicateurs environnementaux.
            </p>
          </div>
        </div>
        <div className="project Odomo">
          <h1>Odomo</h1>
          <div className="containerProjects">
            <div className="picturePlus">
              <img src={process.env.PUBLIC_URL + "/picture/odomo.png"} alt="Odomo" className="pictureProject"/>
              <a href={process.env.PUBLIC_URL + "/pdf/Odomo.pdf"} target="_blank">En savoir plus</a>
            </div>
            <p>La réalisation de ce projet m'a offert une opportunité précieuse de mettre en pratique les compétences que je vais continuer à développer tout au long de ma carrière. 
              J'ai pu identifier les solutions techniques pour répondre aux besoins d'un client à l'aide d'un langage de programmation (Java).
              Ce projet m'a également permis de travailler avec des matrices à deux dimensions, 
              notamment pour effectuer un affichage inversé, ce qui a renforcé ma compréhension de ce concept.
              <br /><br />
              En parallèle, j'ai appris à établir un planning optimisé pour une collaboration efficace en équipe, 
              tout en développant un sens des responsabilités face à l'importance de livrer un code fonctionnel et conforme aux attentes du client. 
              Ce projet m'a donc plongé dans des conditions de travail réelles, favorisant un environnement propice à l'amélioration continue.
            </p>
          </div>
        </div>
        <div className="project Biosphere7">
          <h1>Biosphere7</h1>
          <div className="containerProjects">
            <div className="picturePlus">
              <img src={process.env.PUBLIC_URL + "/picture/Biosphere7.png"} alt="Biosphere7" className="pictureProject"/>
              <a href={process.env.PUBLIC_URL + "/pdf/Biosphere7.pdf"} target="_blank">En savoir plus</a>
            </div>
            <p>Ce projet a été une expérience d'apprentissage très enrichissante. 
              J'ai contribué à la création de deux stratégies pour une intelligence artificielle, 
              ce qui m'a permis de comprendre comment aborder une tâche, 
              de l'analyse du cahier des charges à l'adoption des bonnes méthodes de travail.
              Dans le projet Biosphère, nous avons codé un jeu en 2D, en participant à l'implémentation des règles et 
              en nous familiarisant avec les classes et tableaux en JAVA. 
              En deuxième phase, nous avons conceptualisé une IA capable de rivaliser avec d'autres IA dans un tournoi hebdomadaire.
              <br /><br />
              Ce projet a affiné mon esprit logique et renforcé mes compétences en résolution de problèmes 
              et en programmation stratégique.
            </p>
          </div>
        </div>
        <div className="project MachineVirtuelle">
          <h1>Machine Virtuelle</h1>
          <div className="containerProjects">
            <div className="picturePlus">
              <img src={process.env.PUBLIC_URL + "/picture/MachineVirtuelle.png"} alt="MachineVirtuelle" className="pictureProject"/>
              <a href={process.env.PUBLIC_URL + "/pdf/MachineVirtuelle.pdf"} target="_blank">En savoir plus</a>
            </div>
            <p>
              Ce projet avait pour but d'installer une machine virtuelle dédiée à une équipe de développeurs pour la 
              création d'un jeu, ce qui impliquait l'installation du langage ainsi que d'un IDE 
              adapté à son utilisation.
              <br />
              Nous devions configurer une machine avec un matériel adéquat, 
              en créant un compte administrateur et un compte développeur avec des permissions distinctes selon leurs rôles. 
              En parallèle, nous avons configuré Git pour permettre le clonage de dépôts et 
              modifié le prompt Bash afin qu'il affiche l'état de Git à tout moment.
              <br /><br />
              Ce projet a été l'occasion pour mes camarades et moi d'acquérir une bonne maîtrise de l'installation et 
              de la configuration d'une machine en fonction de critères spécifiques, 
              ainsi que de mieux comprendre l'utilisation du terminal et 
              sa personnalisation pour inclure des informations pertinentes.
            </p>
          </div>
        </div>
        <div className="project CreationBaseDeDonnée">
          <h1>Creation d'une base de donnée</h1>
          <div className="containerProjects">
            <div className="picturePlus">
              <img src={process.env.PUBLIC_URL + "/picture/baseDeDonnée.png"} alt="CreationBaseDeDonnée" className="pictureProject"/>
              <a href={process.env.PUBLIC_URL + "/pdf/BaseDeDonnées.pdf"} target="_blank">En savoir plus</a>
            </div>
            <p>
              Ce projet avait pour but d'installer une machine virtuelle dédiée à une équipe de développeurs pour la 
              création d'un jeu, ce qui impliquait l'installation du langage ainsi que d'un IDE 
              adapté à son utilisation.
              <br />
              Nous devions configurer une machine avec un matériel adéquat, 
              en créant un compte administrateur et un compte développeur avec des permissions distinctes selon leurs rôles. 
              En parallèle, nous avons configuré Git pour permettre le clonage de dépôts et 
              modifié le prompt Bash afin qu'il affiche l'état de Git à tout moment.
              <br /><br />
              Ce projet a été l'occasion pour mes camarades et moi d'acquérir une bonne maîtrise de l'installation et 
              de la configuration d'une machine en fonction de critères spécifiques, 
              ainsi que de mieux comprendre l'utilisation du terminal et 
              sa personnalisation pour inclure des informations pertinentes.
            </p>
          </div>
        </div>
        <div className="project SiteWeb">
          <h1>Site web</h1>
          <div className="containerProjects">
            <div className="picturePlus">
              <img src={process.env.PUBLIC_URL + "/picture/siteWeb2.png"} alt="SiteWeb" className="pictureProject"/>
              <a href={process.env.PUBLIC_URL + "/pdf/SiteWeb.pdf"} target="_blank">En savoir plus</a>
            </div>
            <p>
              Ce projet avait pour but d'installer une machine virtuelle dédiée à une équipe de développeurs pour la 
              création d'un jeu, ce qui impliquait l'installation du langage ainsi que d'un IDE 
              adapté à son utilisation.
              <br />
              Nous devions configurer une machine avec un matériel adéquat, 
              en créant un compte administrateur et un compte développeur avec des permissions distinctes selon leurs rôles. 
              En parallèle, nous avons configuré Git pour permettre le clonage de dépôts et 
              modifié le prompt Bash afin qu'il affiche l'état de Git à tout moment.
              <br /><br />
              Ce projet a été l'occasion pour mes camarades et moi d'acquérir une bonne maîtrise de l'installation et 
              de la configuration d'une machine en fonction de critères spécifiques, 
              ainsi que de mieux comprendre l'utilisation du terminal et 
              sa personnalisation pour inclure des informations pertinentes.
            </p>
          </div>
        </div>
        <div className="project DiagnosticExterne">
          <h1>SWOT</h1>
          <div className="containerProjects">
            <div className="picturePlus">
              <img src={process.env.PUBLIC_URL + "/picture/DiagnosticExterne.png"} alt="DiagnosticExterne" className="pictureProject"/>
              <a href={process.env.PUBLIC_URL + "/pdf/DiagnosticExterne.pdf"} target="_blank">En savoir plus</a>
            </div>
            <p>
              Ce projet m'a offert une meilleure compréhension du fonctionnement d'une entreprise tout en renforçant mes 
              connaissances générales. Avec mes camarades, nous avons réalisé une analyse fonctionnelle approfondie, 
              identifiant les opportunités et menaces externes auxquelles l'entreprise fait face (diagnostic externe).
              <br /><br />
              Cette expérience m'a apporté de nombreux aspects positifs, 
              comme la mise en place d'un planning optimisé pour un travail d'équipe efficace et la maîtrise des outils de 
              recherche, essentiels pour fournir des informations vérifiées et pertinentes. 
              Travailler en groupe sur ces projets a également été l'occasion de développer mes compétences en collaboration 
              et en gestion de projets, ce qui est crucial pour comprendre l'environnement global de l'entreprise.
            </p>
          </div>
        </div>
      </div>
      <ContactLogo />
      <Background />
    </div>
  );
};

export default UniversityProjects;
