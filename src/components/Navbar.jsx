import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/logo1.png";
import themeOn from "../assets/theme-on.gif";
import themeOff from "../assets/theme-off.png";
import { LanguageContext } from "../contexts/LanguageContext";

const languages = ["English", "தமிழ்", "മലയാളം", "తెలుగు", "हिंदी"];

const translations = {
  English: ["Home", "About", "Projects", "Resume", "Blogs", "Contact"],
  தமிழ்: ["முகப்பு", "பற்றி", "திட்டங்கள்", "ரெசுமே", "பதிவுகள்", "தொடர்பு"],
  മലയാളം: ["ഹോം", "അബൗട്ട്", "പ്രോജക്ട്സ്", "റെസൂം", "ബ്ലോഗുകൾ", "കോൺടാക്റ്റ്"],
  తెలుగు: ["హోం", "గురించి", "ప్రాజెక్ట్స్", "రిస్యూమ్", "బ్లాగ్స్", "కాంటాక్ట్"],
  हिंदी: ["होम", "अबाउट", "प्रोजेक्ट्स", "रिज़्यूमे", "ब्लॉग्स", "संपर्क"],
};


const nameTranslations = {
  English: "𝐻𝑎𝑟𝑖𝑏𝑎𝑏𝑢 𝑏",
  தமிழ்: "ஹரிபாபு பி",
  മലയാളം: "ഹരിബാബു ബി",
  తెలుగు: "హరిబాబు బి",
  हिंदी: "हरिबाबु बी",
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="navbar-left">
          <img src={logo} alt="logo" className="logo" />
          <h1>{nameTranslations[language]}</h1>
        </div>

        <div className="navbar-right">
          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            {["home", "about", "projects", "resume", "blogs", "contact"].map((section, index) => (
              <Link
                key={section}
                to={section}
                smooth
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                <i className={`fas fa-${
  section === "home" ? "home" :
  section === "about" ? "user" :
  section === "projects" ? "code" :
  section === "resume" ? "file-alt" :
  section === "blogs" ? "blog" : // blogs here
  "envelope" // contact last
}`}></i>

                {translations[language][index]}
              </Link>
            ))}
          </div>

          <div className="nav-controls">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="language-select"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>

            <img
              src={darkMode ? themeOn : themeOff}
              alt="Toggle Theme"
              className="theme-toggle"
              onClick={toggleTheme}
            />
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
