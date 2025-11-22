import React, { useState, useEffect } from "react";
import ContactLogo from './ContactLogo';
import Background from "./BackgroundDarkd";
import "./css/UniversityProjects.css";

const UniversityProjects: React.FC = () => {

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 200) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 200) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div className="UniversityProjects">
      <div className="Projects">
        <div className="project symfony">
          <h1>Symfony</h1>
          <div className="containerProjects">
            <div className="picturePlus">
              <img src={process.env.PUBLIC_URL + "/picture/serieTracker.png"} alt="seriesTracker" className="pictureProject"/>
              <a href={process.env.PUBLIC_URL + "/pdf/serieTracker.pdf"} target="_blank" rel="noopener noreferrer">Learn more</a>
            </div>
            <p>This project was a crucial step in my learning journey, highlighting my skills in Symfony development and my ability to integrate external APIs like the OMDB API.
              Through handling JSON data, I refined my understanding of Doctrine entities, particularly in managing detailed information about seasons, episodes, actors, years, genres, and production countries.
              Implementing features such as data import, updates, and detailed series display strengthened my Symfony skills while immersing me in a realistic professional context.
              This project was an invaluable opportunity for significant growth in web development.
            </p>
          </div>
        </div>
        <div className="project BasedeDonnée">
          <h1>Creating an application</h1>
          <div className="containerProjects">
            <div className="picturePlus">
              <img src={process.env.PUBLIC_URL + "/picture/comput-R.png"} alt="BasedeDonnée" className="pictureProject"/>
              <a href={process.env.PUBLIC_URL + "/pdf/comput-R.pdf"} target="_blank">Learn more</a>
            </div>
            <p>This project allowed us to become familiar with C# and the mathematical concepts needed for responsive graphical displays and dynamic chart generation.
               Additionally, integrating with the database enhanced our SQL skills. We also used Python to create graphical visualizations from the data in the database.
               This data was populated from CSV files containing information such as CO2 emissions, recycled waste, etc., across different countries.
               The charts generated with Python enabled us to analyze the evolution of these environmental indicators.
            </p>
          </div>
        </div>
        <div className="project Odomo">
          <h1>Odomo</h1>
          <div className="containerProjects">
            <div className="picturePlus">
              <img src={process.env.PUBLIC_URL + "/picture/odomo.png"} alt="Odomo" className="pictureProject"/>
              <a href={process.env.PUBLIC_URL + "/pdf/Odomo.pdf"} target="_blank">Learn more</a>
            </div>
            <p>The implementation of this project provided me with a valuable opportunity to apply the skills I will continue to develop throughout my career. 
              I was able to identify technical solutions to meet a client's needs using a programming language (Java).
              This project also allowed me to work with two-dimensional matrices, particularly for performing inverted displays, which enhanced my understanding of this concept.
              <br /><br />
              Simultaneously, I learned to establish an optimized schedule for effective team collaboration, 
              while developing a sense of responsibility regarding the importance of delivering functional code that meets client expectations. 
              Thus, this project immersed me in real working conditions, fostering an environment conducive to continuous improvement.
            </p>
          </div>
        </div>
        <div className="project Biosphere7">
          <h1>Biosphere7</h1>
          <div className="containerProjects">
            <div className="picturePlus">
              <img src={process.env.PUBLIC_URL + "/picture/Biosphere7.png"} alt="Biosphere7" className="pictureProject"/>
              <a href={process.env.PUBLIC_URL + "/pdf/Biosphere7.pdf"} target="_blank">Learn more</a>
            </div>
            <p>This project was a highly enriching learning experience. 
              I contributed to the creation of two strategies for an artificial intelligence, 
              which allowed me to understand how to approach a task,
              from analyzing the specifications to adopting effective working methods.
              In the Biosphere project, we coded a 2D game, participating in the implementation of the rules and 
              familiarizing ourselves with classes and arrays in JAVA.
              In the second phase, we conceptualized an AI capable of competing with other AIs in a weekly tournament.
              <br /><br />
              This project sharpened my logical thinking and strengthened my problem-solving 
              and strategic programming skills.
            </p>
          </div>
        </div>
        <div className="project MachineVirtuelle">
          <h1>Virtual Machine</h1>
          <div className="containerProjects">
            <div className="picturePlus">
              <img src={process.env.PUBLIC_URL + "/picture/MachineVirtuelle.png"} alt="MachineVirtuelle" className="pictureProject"/>
              <a href={process.env.PUBLIC_URL + "/pdf/MachineVirtuelle.pdf"} target="_blank">Learn more</a>
            </div>
            <p>This project aimed to set up a virtual machine dedicated to a team of developers for game creation,
              which involved installing the appropriate programming language and IDE.
              <br/>
              We had to configure a machine with suitable hardware, creating both an administrator account and a developer account with distinct permissions based on their roles.
              Simultaneously, we configured Git to enable repository cloning and modified the Bash prompt to display the Git status at all times.
              <br /><br />
              This project provided my teammates and me with a solid understanding of installing and configuring a machine according to specific criteria,
              as well as a deeper comprehension of terminal usage and its customization to include relevant information.
            </p>
          </div>
        </div>
        <div className="project CreationBaseDeDonnée">
          <h1>Data Base Creation</h1>
          <div className="containerProjects">
            <div className="picturePlus">
              <img src={process.env.PUBLIC_URL + "/picture/baseDeDonnée.png"} alt="CreationBaseDeDonnée" className="pictureProject"/>
              <a href={process.env.PUBLIC_URL + "/pdf/BaseDeDonnées.pdf"} target="_blank">Learn more</a>
            </div>
            <p>This group work as part of a university project allowed me to develop my knowledge and adequately master the SQL language.
              <br /><br />
              The main challenge of this project was to establish team cohesion with my partner, ensuring an effective distribution of tasks to optimize working time. Beyond this team spirit, the most crucial aspect of this activity was to guarantee data quality, ensuring they were consistent, complete, and accurate.
              <br /><br />
              Thus, my database skills have significantly improved, particularly regarding the creation and population of a database, as well as the development of an entity-relationship schema.
            </p>
          </div>
        </div>
        <div className="project SiteWeb">
          <h1>Website Setup</h1>
          <div className="containerProjects">
            <div className="picturePlus">
              <img src={process.env.PUBLIC_URL + "/picture/siteWeb2.png"} alt="SiteWeb" className="pictureProject"/>
              <a href={process.env.PUBLIC_URL + "/pdf/SiteWeb.pdf"} target="_blank">Learn more</a>
            </div>
            <p>This project allowed me to develop my creative thinking and thoroughly master HTML and CSS to create a website for a company.
              The site had to meet specific criteria and comply with current legislation, as it was for a company producing alcoholic beverages. 
              I learned to incorporate the necessary legal standards for a website while ensuring an ergonomic and user-friendly interface for the client.
              This experience was a significant lesson for me, teaching me not only HTML and CSS but also web ergonomics and the regulations to follow in this field.
            </p>
          </div>
        </div>
        <div className="project DiagnosticExterne">
          <h1>SWOT</h1>
          <div className="containerProjects">
            <div className="picturePlus">
              <img src={process.env.PUBLIC_URL + "/picture/DiagnosticExterne.png"} alt="DiagnosticExterne" className="pictureProject"/>
              <a href={process.env.PUBLIC_URL + "/pdf/DiagnosticExterne.pdf"} target="_blank">Learn more</a>
            </div>
            <p>This project provided me with a better understanding of how a company operates while strengthening my general knowledge.
              Together with my classmates, we conducted a thorough functional analysis, identifying the external opportunities and threats facing the company (external diagnosis).
              <br /><br />
              This experience brought me many positive aspects, such as establishing an optimized schedule for effective teamwork and mastering research tools, essential for providing verified and relevant information.
              Working in a group on these projects was also an opportunity to develop my collaboration and project management skills, which are crucial for understanding the overall business environment.
            </p>
          </div>
        </div>
      </div>
      <ContactLogo />
      <Background />
      <button className="scrollTop" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }}>
        &#8679;
      </button>
    </div>
  );
};

export default UniversityProjects;
