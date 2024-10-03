import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import UniversityProjects from './components/UniversityProjects';
import PersonalProjects from './components/PersonalProjects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/university-projects" element={<UniversityProjects />} />
        <Route path="/personal-projects" element={<PersonalProjects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
