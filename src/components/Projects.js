import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import project1 from '../assets/w1.jpg';
import project2 from '../assets/w2.jpg';
import project3 from '../assets/w3.jpg';

// Translations for section title
const translations = {
  English: "My Projects",
  தமிழ்: "என் திட்டங்கள்",
  മലയാളം: "എന്റെ പ്രോജക്ടുകൾ",
  తెలుగు: "నా ప్రాజెక్టులు",
  हिंदी: "मेरे प्रोजेक्ट्स"
};

function Projects({ language }) {
  const images = [project1, project2, project3];
  const [current, setCurrent] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Auto change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent(prev => (prev + 1) % images.length);
  };

  // Intersection Observer for animation
  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // trigger only once
          }
        });
      },
      { threshold: 0.6 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // YouTube video embed URL
  const videoUrl = "https://www.youtube.com/embed/2qCpY38ompo";

  return (
    <section
      id="projects"
      className={`projects-section ${isVisible ? 'animate' : ''}`}
      ref={sectionRef}
    >
      <h2>{translations[language] || "My Projects"}</h2>

      <div className="slider">
        <button className="arrow left" onClick={prevSlide}>&#10094;</button>

        <img
          src={images[current]}
          alt={`Project ${current + 1}`}
          className="project-image"
          onClick={() => setShowVideo(true)}
        />

        <button className="arrow right" onClick={nextSlide}>&#10095;</button>

        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>

      {showVideo && (
        <div className="video-modal">
          <div className="video-container">
            <button className="close-btn" onClick={() => setShowVideo(false)}>X</button>
            <iframe
              src={videoUrl}
              title="Project Video"
              width="100%"
              height="400px"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
