import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './css/Navbar.css';

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='navbar'>
      <Navbar.Brand href="/PortfolioReact" className="brand-text">Asad-ur Rehman</Navbar.Brand>
      <Navbar.Toggle 
        aria-controls="basic-navbar-nav" 
        className={`toggle-button ${isOpen ? 'active' : ''}`} 
        onClick={handleToggle} 
      />
      <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-center ${isOpen ? 'show' : ''}`}>
        <Nav className={`navbar-links ${isOpen ? 'show' : ''}`}>
          <Nav.Link href="/PortfolioReact">Accueil</Nav.Link>
          <Nav.Link href="/PortfolioReact/university-projects">Projets universitaires</Nav.Link>
          {/* <Nav.Link href="/personal-projects">Projets personnels</Nav.Link> */}
          <Nav.Link href="/PortfolioReact/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;