import React from 'react';
import '../Styles/resumebutton.css'; // make sure your CSS path is correct

function ResumeButton() {
  return (
    <div data-aos="fade-up" className="resume-section">
      <a
        className="resume-btn"
        href="/Adebayo_Oladayo_CV.pdf" // ✅ use your exact PDF name
        download="Adebayo_Oladayo_CV.pdf" // optional: renames file on download
      >
        Download Resume
      </a>
    </div>
  );
}

export default ResumeButton;
