import React from 'react';
import './css/skills.css';
import './resume_download'
import ResumeDownload from './resume_download';

function Skills () {
  const skills = [
    {
      name: 'JavaScript',
      description: 'Proficient in MERN Stack'
    },
    {
      name: 'Kotlin',
      description: 'Android Development using Kotlin (Jetpack-Compose)'
    },
    {
      name: 'Java',
      description: 'Spring & Spring Boot'
    },
    {
      name: 'SQL',
      description: 'SQL & PL/SQL'
    }
  ]
  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title">Specialization</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <i className="fab fa-js-square"></i>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
          
        </div>
        <ResumeDownload />
      </div>
    </section>
  );
};

export default Skills;