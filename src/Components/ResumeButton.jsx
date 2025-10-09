  import React from 'react';
  import '../Styles/resumebutton.css'; // make sure your CSS path is correct

  function ResumeButton() {
    return (
      <div data-aos="fade-up" className="resume-section">
  <a
    className="resume-btn"
    href="/Adebayo_Oladayo_CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    download="Adebayo_Oladayo_CV.pdf" // optional, keeps download feature
  >
    Download Resume
  </a>

      </div>
    );
  }

  export default ResumeButton;
