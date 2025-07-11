import React, { useContext } from 'react';
import { LanguageProvider, LanguageContext } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import './App.css';

function AppContent() {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects language={language} /> {/* pass language prop */}
      <Resume />
      <Blogs />
      <Contact language={language} />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
