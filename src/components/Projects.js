import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import project1 from '../assets/w1.png';
import project2 from '../assets/w2.png';
import project3 from '../assets/w3.jpg';

// Translations
const translations = {
  English: "My Projects",
  தமிழ்: "என் திட்டங்கள்",
  മലയാളം: "എന്റെ പ്രോജക്ടുകൾ",
  తెలుగు: "నా ప్రాజెక్టులు",
  हिंदी: "मेरे प्रोजेक्ट्स"
};

function Projects({ language }) {
  const projects = [
    { image: project1, link: 'https://hb281002.github.io/ALPHA' },
    { image: project2, link: 'https://online-ration.vercel.app/' },
    { image: project3, link: 'https://yourproject3.com' }
  ];

  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const sectionRef = useRef(null);

  // Auto slider (10 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % projects.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [projects.length]);

  // Detect touch device
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  // Fade-in on scroll
  useEffect(() => {
    const sectionEl = sectionRef.current;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    if (sectionEl) observer.observe(sectionEl);
    return () => sectionEl && observer.unobserve(sectionEl);
  }, []);

  // Swipe for touch devices
  useEffect(() => {
    if (!isTouchDevice) return;

    const slider = sectionRef.current;
    let startX = 0;

    const handleTouchStart = e => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = e => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (diff > 50) {
        setCurrent(prev => (prev + 1) % projects.length); // Left swipe
      } else if (diff < -50) {
        setCurrent(prev => (prev - 1 + projects.length) % projects.length); // Right swipe
      }
    };

    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchend', handleTouchEnd);

    return () => {
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isTouchDevice, projects.length]);

  return (
    <section
      id="projects"
      className={`projects-section ${isVisible ? 'fade-in' : ''}`}
      ref={sectionRef}
    >
      <h2>{translations[language] || "My Projects"}</h2>

      <div className="slider">
        {!isTouchDevice && (
          <button
            className="arrow left"
            onClick={() =>
              setCurrent(prev => (prev === 0 ? projects.length - 1 : prev - 1))
            }
          >
            &#10094;
          </button>
        )}

        <a
          href={projects[current].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={projects[current].image}
            alt={`Project ${current + 1}`}
            className="project-image"
          />
        </a>

        {!isTouchDevice && (
          <button
            className="arrow right"
            onClick={() =>
              setCurrent(prev => (prev + 1) % projects.length)
            }
          >
            &#10095;
          </button>
        )}

        <div className="dots">
          {projects.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
