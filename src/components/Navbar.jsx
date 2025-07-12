import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/l.png";
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
  const navLinksRef = useRef(null);

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // Ripple effect
  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple-span");

    const ripple = button.getElementsByClassName("ripple-span")[0];
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
  };

  // 👇 Set transform origin dynamically
  const toggleMenu = (e) => {
    if (navLinksRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const navWidth = window.innerWidth;

      const originX = (x / navWidth) * 100;
      navLinksRef.current.style.transformOrigin = `${originX}% top`;
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={logo} alt="logo" className="logo" />
          <h1>{nameTranslations[language]}</h1>
        </div>

        <div className="navbar-right">
          <div
            className={`nav-links ${menuOpen ? "active" : ""}`}
            ref={navLinksRef}
          >
            {["home", "about", "projects", "resume", "blogs", "contact"].map(
              (section, index) => (
                <Link
                  key={section}
                  to={section}
                  smooth
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  className="ripple"
                >
                  <i
                    className={`fas fa-${
                      section === "home"
                        ? "home"
                        : section === "about"
                        ? "user"
                        : section === "projects"
                        ? "code"
                        : section === "resume"
                        ? "file-alt"
                        : section === "blogs"
                        ? "blog"
                        : "envelope"
                    }`}
                  ></i>
                  {translations[language][index]}
                </Link>
              )
            )}
          </div>

          <div className="nav-controls">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="language-select"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>

            <img
              src={darkMode ? themeOn : themeOff}
              alt="Toggle Theme"
              className="theme-toggle ripple"
              onClick={(e) => {
                createRipple(e);
                toggleTheme();
              }}
            />
          </div>

          <div
            className="hamburger ripple"
            onClick={(e) => {
              createRipple(e);
              toggleMenu(e);
            }}
          >
            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
