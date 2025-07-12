// src/App.js
import React, { useContext, useEffect, useState } from 'react';
import { LanguageProvider, LanguageContext } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Loader from './components/Loader';
import './App.css';

function AppContent() {
  const { language } = useContext(LanguageContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // You can adjust the loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects language={language} /> {/* passing language prop */}
      <Resume />
      <Blogs />
      <Contact language={language} /> {/* passing language prop */}
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
