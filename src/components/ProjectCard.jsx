import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-item">
      <img 
        src={project.image.src} 
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        loading="lazy"
        className="img-fluid"
      />
      <div className="overlay">
        <div className="overlay-content">
          <h5>{project.title}</h5>
          <p>{project.description}</p>
          <a 
            href={project.link} 
            className="btn btn-primary" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProjectCard;