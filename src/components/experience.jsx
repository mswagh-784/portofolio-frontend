import React from 'react';
import './css/experience.css';

function Experience(){
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Digiwork Online Services & Consultancy LLP',
      duration: 'Present',
      description: 'Building full stack web applications using React & Java frameworks.'
    },
    {
      title: 'Building Modern Web Applications with MERN Stack',
      company: 'EY Edunet Foundation',
      duration: '1-month',
      description: 'MERN stack training & internship certificate by Edunet Foundation(AICTE approved).'
    },
    {
      title: 'Entrepreneurship Development', 
      company: 'Anvay',
      duration: '04/07/2024 - current',
      description: 'Anvay is a platform that helps mental health professionals to manage their practice and clients.'
    }
  ];
  return (
    <section className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          {experiences.map((experience, index) => (
            <div className="experience" key={index}>
              <h3>{experience.title}</h3>
              <h4>{experience.company}</h4>
              <p>{experience.duration}</p>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;