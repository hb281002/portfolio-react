import React, { useEffect, useState, useContext } from 'react';
import './Home.css';
import profileImage from '../assets/pi.png';
import { LanguageContext } from '../contexts/LanguageContext';

const homeTranslations = {
  English: {
    greeting: "Hello",
    description: "— It's Haribabu, a Full-Stack Developer",
    projects: "Projects Completed",
    startups: "Startups Raised",
    scroll: "Scroll down ↓",
  },
  தமிழ்: {
    greeting: "வணக்கம்",
    description: "— ஹரிபாபு, ஒரு புல்-ஸ்டாக் டெவலப்பர்",
    projects: "முடிந்த திட்டங்கள்",
    startups: "தொடக்கங்கள் எழுப்பப்பட்டது",
    scroll: "கீழே ஸ்க்ரோல் செய்யவும் ↓",
  },
  മലയാളം: {
    greeting: "ഹലോ",
    description: "— ഹരിബാബു, ഒരു ഫുൾ-സ്റ്റാക്ക് ഡെവലപ്പർ",
    projects: "പൂരിപ്പിച്ച പ്രോജക്ടുകൾ",
    startups: "സ്റ്റാർട്ടപ്പുകൾ ഉയർത്തി",
    scroll: "താഴേക്ക് സ്ക്രോൾ ചെയ്യുക ↓",
  },
  తెలుగు: {
    greeting: "హలో",
    description: "— హరిబాబు, ఫుల్-స్టాక్ డెవలపర్",
    projects: "పూర్తయిన ప్రాజెక్ట్స్",
    startups: "ప్రారంభాలు పెంచారు",
    scroll: "కిందకు స్క్రోల్ చేయండి ↓",
  },
  हिंदी: {
    greeting: "हैलो",
    description: "— हरिबाबु, एक फुल-स्टैक डेवलपर",
    projects: "पूर्ण की गई परियोजनाएँ",
    startups: "स्टार्टअप्स उठाए",
    scroll: "नीचे स्क्रॉल करें ↓",
  },
};

function Home() {
  const [projects, setProjects] = useState(0);
  const [startups, setStartups] = useState(0);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    let projectTarget = 200;
    let startupTarget = 50;

    const projectInterval = setInterval(() => {
      setProjects(prev => {
        if (prev < projectTarget) {
          return prev + 1;
        } else {
          clearInterval(projectInterval);
          return projectTarget;
        }
      });
    }, 10);

    const startupInterval = setInterval(() => {
      setStartups(prev => {
        if (prev < startupTarget) {
          return prev + 1;
        } else {
          clearInterval(startupInterval);
          return startupTarget;
        }
      });
    }, 30);

    return () => {
      clearInterval(projectInterval);
      clearInterval(startupInterval);
    };
  }, []);

  const t = homeTranslations[language];

  return (
    <section id="home" className="home-section">
      <div className="content">
        <div className="text fade-up">
          <div className="stats">
            <div>
              <h3>+{projects}</h3>
              <p>{t.projects}</p>
            </div>
            <div>
              <h3>+{startups}</h3>
              <p>{t.startups}</p>
            </div>
          </div>

          <div className="intro">
            <h1>{t.greeting}</h1>
            <p>{t.description}</p>
          </div>

          <div className="scroll-down">
            <p>{t.scroll}</p>
          </div>
        </div>

        <div className="image fade-up">
          <img src={profileImage} alt="Haribabu B" />
        </div>
      </div>
    </section>
  );
}

export default Home;
