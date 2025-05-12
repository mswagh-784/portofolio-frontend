import React from 'react';
import './css/resume_download.css';

import resume from '../assets/Mohit resume.pdf';



const ResumeDownload = () => {
  return (
    <section className="resume-download-section">
      <div className="container">
        {/* <h2 className="section-title">Download My Resume</h2> */}
        <a href={resume} className="btn btn-primary" download>Download Resume</a>
      </div>
    </section>
  );
};

export default ResumeDownload;