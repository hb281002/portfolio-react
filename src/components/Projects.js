import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import project1 from '../assets/w1.jpg';
import project2 from '../assets/w2.jpg';
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
  const images = [project1, project2, project3];
  const [current, setCurrent] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Check if it's a touch device
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  // Fade-in effect on scroll
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
    return () => {
      if (sectionEl) observer.unobserve(sectionEl);
    };
  }, []);

  // Swipe gesture for touch devices
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
        // Swipe left
        setCurrent(prev => (prev + 1) % images.length);
      } else if (diff < -50) {
        // Swipe right
        setCurrent(prev => (prev - 1 + images.length) % images.length);
      }
    };

    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchend', handleTouchEnd);

    return () => {
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchend', handleTouchEnd);
    };
  }, [images.length, isTouchDevice]);

  const videoUrl = "https://www.youtube.com/embed/2qCpY38ompo";

  return (
    <section
      id="projects"
      className={`projects-section ${isVisible ? 'fade-in' : ''}`}
      ref={sectionRef}
    >
      <h2>{translations[language] || "My Projects"}</h2>

      <div className="slider">
        {!isTouchDevice && (
          <button className="arrow left" onClick={() => setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1))}>
            &#10094;
          </button>
        )}

        <img
          src={images[current]}
          alt={`Project ${current + 1}`}
          className="project-image"
          onClick={() => setShowVideo(true)}
        />

        {!isTouchDevice && (
          <button className="arrow right" onClick={() => setCurrent(prev => (prev + 1) % images.length)}>
            &#10095;
          </button>
        )}

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
