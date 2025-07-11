import React from 'react';
import './Contact.css';
import { FaInstagram, FaYoutube, FaGithub, FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const translations = {
  English: {
    title: "Contact Me",
    email: "Email",
    location: "Location",
    number: "Number",
    place: "Puducherry, Puducherry"
  },
  தமிழ்: {
    title: "என்னை தொடர்பு கொள்ளுங்கள்",
    email: "மின்னஞ்சல்",
    location: "இடம்",
    number: "எண்",
    place: "புதுச்சேரி, புதுச்சேரி"
  },
  മലയാളം: {
    title: "എനോട് ബന്ധപ്പെടുക",
    email: "ഇമെയിൽ",
    location: "സ്ഥലം",
    number: "ഫോൺ നമ്പർ",
    place: "പുടുച്ചേരി, പുടുച്ചേരി"
  },
  తెలుగు: {
    title: "నాతో సంప్రదించండి",
    email: "ఇమెయిల్",
    location: "ప్రాంతం",
    number: "ఫోన్ నంబర్",
    place: "పుడుచ్చేరి, పుడుచ్చేరి"
  },
  हिंदी: {
    title: "मुझसे संपर्क करें",
    email: "ईमेल",
    location: "स्थान",
    number: "नंबर",
    place: "पुडुचेरी, पुडुचेरी"
  }
};

function Contact({ language }) {
  const t = translations[language] || translations.English;

  return (
    <section id="contact" className="contact-section">
      <h2>{t.title}</h2>

      <div className="contact-icons">
        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon-circle instagram">
          <FaInstagram />
        </a>

        <a href="https://www.youtube.com/channel/yourchannelid" target="_blank" rel="noopener noreferrer" className="icon-circle youtube">
          <FaYoutube />
        </a>

        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon-circle github">
          <FaGithub />
        </a>

        <a href="mailto:hb.2810002@example.com" className="icon-circle email">
          <FaEnvelope />
        </a>

        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="icon-circle linkedin">
          <FaLinkedin />
        </a>

        <a href="https://wa.me/916382789552" target="_blank" rel="noopener noreferrer" className="icon-circle whatsapp">
          <FaWhatsapp />
        </a>
      </div>

      <div className="contact-details">
        <p>{t.email}: hb.2810002@example.com</p>
        <p>{t.location}: {t.place}</p>  {/* Use translated place */}
        <p>{t.number}: +91 6382789552</p>
      </div>
    </section>
  );
}

export default Contact;
