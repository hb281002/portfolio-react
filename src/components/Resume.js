import React, { useEffect, useRef, useState, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import './Resume.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';

// Translation strings for all supported languages
const translations = {
  English: {
    title: 'Resume / CV',
    download: 'Download Full Resume PDF',
    alt1: 'Resume Page 1',
    alt2: 'Resume Page 2',
  },
  தமிழ்: {
    title: 'சுயவிவரம் / வாழ்க்கை வரலாறு',
    download: 'முழு சுயவிவர PDF ஐ பதிவிறக்கவும்',
    alt1: 'சுயவிவரப் பக்கம் 1',
    alt2: 'சுயவிவரப் பக்கம் 2',
  },
  മലയാളം: {
    title: 'രിസ്യൂം / ജീവിതവിവരണം',
    download: 'പൂർണ്ണ റിസ്യൂം PDF ഡൗൺലോഡ് ചെയ്യുക',
    alt1: 'റിസ്യൂം പേജ് 1',
    alt2: 'റിസ്യൂം പേജ് 2',
  },
  తెలుగు: {
    title: 'రిజ్యూమ్ / జీవిత చరిత్ర',
    download: 'పూర్తి రిజ్యూమ్ PDF డౌన్‌లోడ్ చేయండి',
    alt1: 'రిజ్యూమ్ పేజీ 1',
    alt2: 'రిజ్యూమ్ పేజీ 2',
  },
  हिंदी: {
    title: 'रिज़्यूमे / सीवी',
    download: 'पूरा रिज़्यूमे PDF डाउनलोड करें',
    alt1: 'रिज़्यूमे पेज 1',
    alt2: 'रिज़्यूमे पेज 2',
  },
};

function Resume() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useContext(LanguageContext); // 🌐 pulls current language
  const t = translations[language] || translations.English;

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // animate only once
        }
      },
      { threshold: 0.6 }
    );

    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="resume"
      className={`resume-section ${isVisible ? 'fade-in' : ''}`}
      ref={sectionRef}
    >
      <h2>{t.title}</h2>

      <div className="resume-images">
        <img src={img1} alt={t.alt1} />
        <img src={img2} alt={t.alt2} />
      </div>

      <a href="/pdf/R_N.pdf" download="R_N.pdf" className="download-button">
        {t.download}
      </a>
    </section>
  );
}

export default Resume;
