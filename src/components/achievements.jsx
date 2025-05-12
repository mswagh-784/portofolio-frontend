import React from 'react';
import './css/achievements.css';

function Achievements(){
  const achievements = [
    {
      title: 'Skit Runner Up :2024-25',
      role: 'writer & Director',
      description: 'CESA departmental skit secured runner up position among 7 department,in the departmental skit competition of our college.'
    },
  ];
  return (
    <section className="achievements-section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div className="achievement" key={index}>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;