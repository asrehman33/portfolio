import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import UniversityProjects from './components/UniversityProjects';
import PersonalProjects from './components/PersonalProjects';
import Contact from './components/Contact';
import Background from './components/BackgroundDarkd';

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/PortfolioReact" element={<Home />} />
        <Route path="/PortfolioReact/university-projects" element={<UniversityProjects />} />
        <Route path="/PortfolioReact/personal-projects" element={<PersonalProjects />} />
        <Route path="/PortfolioReact/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;