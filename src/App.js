import './App.css';
import React, { useState } from 'react';
import Project from './components/projects.js';
import Footer from './components/footer.js';
import Nav from './components/nav.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import ResumeSection from './components/resume.js';

function App() {
  const [selectedNavTitles, setSelectedNavTitles] = useState([{ title: 'About Me', sectionId: 'about' }]);

  const handleNavSelection = (selectedTitles) => {
    setSelectedNavTitles(selectedTitles);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Danial Choudhry</h1>
        <Nav selectedNavTitles={selectedNavTitles} handleNavSelection={handleNavSelection} />
      </header>
      {selectedNavTitles.some(title => title.sectionId === 'portfolio') && <Project />}
      {selectedNavTitles.some(title => title.sectionId === 'about') && <About selectedNavTitles={selectedNavTitles} />}
      {selectedNavTitles.some(title => title.sectionId === 'contact') && <Contact />}
      {selectedNavTitles.some(title => title.sectionId === 'resume') && <ResumeSection />} {/* Render the ResumeSection component */}
      <Footer />
    </div>
  );
}

export default App;