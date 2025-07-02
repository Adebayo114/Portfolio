import React from 'react';
import '../Styles/resumebutton.css'; // ✅ fix the import path and syntax

function ResumeButton() {
  return (
    <div data-aos="fade-up" className="resume-section">
      <a className="resume-btn" href="/Adebayo Oladayo Cv" download>
        Download Resume
      </a>
    </div>
  );
}

export default ResumeButton;
