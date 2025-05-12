import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/hero_section.css';
import profileImage from '../assets/mohit_image.jpg'; // Replace with your actual image path

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={profileImage} alt="Profile" className="images" />
      <div className="text-info">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hello, I'm Mohit Wagh, a passionate and dedicated software developer with extensive experience
          in building dynamic and responsive web applications and I'm currently pursuing my <b> Bachelor's degree in Computer Engineering at
          "All India Shri Shivaji Memorial Societys Institute of Information technology, Pune".</b> My expertise lies in creating visually
          appealing and highly functional websites and web-applications that provide an exceptional user experience. I am
          proficient in a variety of modern web technologies and frameworks, and I am always eager to
          learn and adapt to new challenges.
        </p>
        <p>
          Please take a moment to explore my projects and feel free to get in touch if
          you have any questions or if you would like to discuss potential collaboration
          opportunities. I look forward to connecting with you!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;