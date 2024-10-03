import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './css/Navbar.css';

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const getLink = (path: string) => {
    return `${path}`;
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='navbar'>
      <Navbar.Brand as={Link} to={getLink("/")} className="brand-text">Asad-ur Rehman</Navbar.Brand>
      <Navbar.Toggle 
        aria-controls="basic-navbar-nav" 
        className={`toggle-button ${isOpen ? 'active' : ''}`} 
        onClick={handleToggle} 
      />
      <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-center ${isOpen ? 'show' : ''}`}>
        <Nav className={`navbar-links ${isOpen ? 'show' : ''}`}>
          <Nav.Link as={Link} to={getLink("/")}>Accueil</Nav.Link>
          <Nav.Link as={Link} to={getLink("/university-projects")}>Projets universitaires</Nav.Link>
          {/* <Nav.Link as={Link} to={getLink("/personal-projects")}>Projets personnels</Nav.Link> */}
          <Nav.Link as={Link} to={getLink("/contact")}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
