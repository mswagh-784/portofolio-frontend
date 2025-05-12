import React from 'react';
import './css/education.css';

function Education (){
  const education = [
    {
      title: 'B.Tech in Computer Engineering',
      institution: 'All India Shri Shivaji Memorial Society\'s Institue of Information Technology, Pune',
      duration: '2022 - 2026',
      description: 'CGPA: 8.89 (upto sem 5)'
    },
    {
      title: 'HSC 12th',
      institution: 'S.B.E.S College of Science, Ch.Sambhajinagar',
      duration: '2020 - 2022',
      description: 'Percentage: 80.00%'
    },
    {
      title: 'CBSE 10th',
      institution: 'Gaikwad Global School, Ch.Sambhajinagar',
      duration: '2016 - 2020',
      description: 'Percentage: 86.00%'
    }
  ];
  return (
    <section className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((item, index) => (
            <div className="education" key={index}>
              <h3>{item.title}</h3>
              <h4>{item.institution}</h4>
              <p>{item.duration}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;