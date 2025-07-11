import React from 'react';
import './Resume.css'; // import your CSS

function Resume() {
  return (
    <section id="resume" className="resume-section fade-up">
      <h2>Resume / CV</h2>

      {/* Side by side images */}
      <div className="resume-images">
        <img src="/1.jpg" alt="Resume Page 1" />
        <img src="/2.jpg" alt="Resume Page 2" />
      </div>

      {/* Download button */}
      <a href="/pdf/R_N.pdf" download="R_N.pdf" className="download-button">
        Download Full Resume PDF
      </a>
    </section>
  );
}

export default Resume;
