import React, { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "./About.css";

const translations = {
  English: {
    title: "About Me",
    intro1:
      "Hello! I am Haribabu B, a passionate Full-Stack Developer currently pursuing my MCA at Pondicherry University. I specialize in Python, Django, React, and building REST APIs.",
    intro2:
      "I live in Puducherry, a beautiful city known for its rich culture and serene environment.",
    education: "My Education",
    columns: [
      "Degree / Level",
      "Institution",
      "Location",
      "Duration",
      "Result",
      "Percentage / CGPA",
    ],
  },
  தமிழ்: {
    title: "என்னை பற்றி",
    intro1:
      "வணக்கம்! நான் ஹரிபாபு பி, தற்போது பாண்டிச்சேரி பல்கலைக்கழகத்தில் MCA பயின்று வரும் ஒரு ஆர்வமுள்ள பூரண ஸ்டாக் டெவலப்பர். Python, Django, React மற்றும் REST API உருவாக்கத்தில் நான் நிபுணத்துவம் பெற்றவன்.",
    intro2:
      "நான் புதுச்சேரியில் வசிக்கிறேன், இது அதன் பண்பாட்டு சிறப்பும் அமைதியான சூழலுக்குப் பிரசித்தமான ஒரு நகரம்.",
    education: "என் கல்வி",
    columns: [
      "படிப்பு / நிலை",
      "கல்லூரி",
      "இடம்",
      "காலம்",
      "முடிவு",
      "சதவிகிதம் / CGPA",
    ],
  },
  മലയാളം: {
    title: "എന്നെ കുറിച്ച്",
    intro1:
      "നമസ്കാരം! ഞാൻ ഹരിബാബു ബി, ഇപ്പോൾ പൊണ്ടിച്ചേരി യൂണിവേഴ്സിറ്റിയിൽ MCA പഠിക്കുകയാണ്. Python, Django, React, REST API എന്നിവയിൽ പ്രാവിണ്യം ഉള്ള ഒരു ഫുൾ-സ്റ്റാക്ക് ഡവലപ്പറാണ് ഞാൻ.",
    intro2:
      "ഞാൻ പുതുച്ചേരിയിൽ താമസിക്കുന്നു. സമാധാനപരവും സാംസ്കാരികമായി സമൃദ്ധവുമായ നഗരമാണ് ഇത്.",
    education: "എൻ്റെ വിദ്യാഭ്യാസം",
    columns: [
      "ഡിഗ്രി / നില",
      "സ്ഥാപനം",
      "സ്ഥലം",
      "കാലാവധി",
      "ഫലങ്ങൾ",
      "ശതമാനം / CGPA",
    ],
  },
  తెలుగు: {
    title: "నా గురించి",
    intro1:
      "హలో! నేను హరిబాబు బి, ప్రస్తుతం పుదుచ్చేరి విశ్వవిద్యాలయంలో MCA చేస్తున్న ఫుల్-స్టాక్ డెవలపర్‌ను. నేను Python, Django, React మరియు REST APIs తయారీలో నిపుణుడిని.",
    intro2:
      "నేను పుదుచ్చేరి నగరంలో నివసిస్తున్నాను, ఇది సంపన్న సంస్కృతి మరియు శాంతియుత వాతావరణంతో ప్రసిద్ధి పొందింది.",
    education: "నా విద్య",
    columns: [
      "డిగ్రీ / స్థాయి",
      "సంస్థ",
      "ప్రాంతం",
      "వ్యవధి",
      "ఫలితము",
      "శాతం / CGPA",
    ],
  },
  हिंदी: {
    title: "मेरे बारे में",
    intro1:
      "नमस्ते! मैं हरीबाबू बी हूँ, वर्तमान में पांडिचेरी विश्वविद्यालय में MCA कर रहा हूँ। मैं Python, Django, React और REST APIs में विशेषज्ञता रखता हूँ।",
    intro2:
      "मैं पुदुचेरी में रहता हूँ, जो अपनी समृद्ध संस्कृति और शांत वातावरण के लिए जाना जाता है।",
    education: "मेरी शिक्षा",
    columns: [
      "डिग्री / स्तर",
      "संस्थान",
      "स्थान",
      "अवधि",
      "परिणाम",
      "प्रतिशत / CGPA",
    ],
  },
};

function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  useEffect(() => {
    const current = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`section about ${isVisible ? "fade-in" : ""}`}
    >
      <h2>{t.title}</h2>
      <p>{t.intro1}</p>
      <p>{t.intro2}</p>

      <h3>{t.education}</h3>
      <table>
        <thead>
          <tr>
            {t.columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MCA</td>
            <td>
              Pope John Paul II College of Education
              <br />
              (Pondicherry University)
            </td>
            <td>
              <a
                href="https://www.google.com/maps/dir//Reddiarpalayam,+Puducherry,+605009"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reddiarpalayam, Villianur Road, Puducherry - 605010
              </a>
            </td>
            <td>Oct 2023 – Jun 2025</td>
            <td>-</td>
            <td>7.70 / 10</td>
          </tr>

          <tr>
            <td>Bachelor of Computer Applications</td>
            <td>
              Sri Aravindar Arts and Science College
              <br />
              (Thiruvalluvar University)
            </td>
            <td>
              <a
                href="https://www.google.com/maps?daddr=GST+Road,+Sedarapet,+Puducherry+605109"
                target="_blank"
                rel="noopener noreferrer"
              >
                GST Road, Sedarapet, Puducherry - 605109
              </a>
            </td>
            <td>2020 - 2023</td>
            <td>7.67 / 10</td>
            <td>72.865%</td>
          </tr>

          <tr>
            <td>HSLC</td>
            <td>Seventh Day Adventist Higher Secondary School</td>
            <td>
              <a
                href="https://www.google.com/maps?daddr=Mothilal+Nagar,+Shanmugapuram,+Puducherry,+605009"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mothilal Nagar, Shanmugapuram, Puducherry - 605009
              </a>
            </td>
            <td>2019 - 2020</td>
            <td>455 / 600</td>
            <td>75.83%</td>
          </tr>

          <tr>
            <td>SSLC</td>
            <td>Seventh Day Adventist Higher Secondary School</td>
            <td>
              <a
                href="https://www.google.com/maps?daddr=Mothilal+Nagar,+Shanmugapuram,+Puducherry,+605009"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mothilal Nagar, Shanmugapuram, Puducherry - 605009
              </a>
            </td>
            <td>2017 - 2018</td>
            <td>362 / 500</td>
            <td>72.4%</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default About;
