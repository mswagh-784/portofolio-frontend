import React, { lazy, Suspense } from 'react';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/projects.css';

// Import images with explicit width and height
const projectImages = {
  movieList: {
    src: new URL('../assets/projects/movie.jpg', import.meta.url).href,
    alt: 'Movie List SHowcase',
    width: 800,
    height: 600
  },
  raindetection: {
    src: new URL('../assets/projects/raindetection.webp', import.meta.url).href,
    alt: 'Rain detection System',
    width: 800,
    height: 600
  },
  todolist: {
    src: new URL('../assets/projects/todo-list.webp', import.meta.url).href,
    alt: 'Project To-do List',
    width: 800,
    height: 600
  },
  anvay: {
    src: new URL('../assets/projects/ANVAY.png', import.meta.url).href,
    alt: 'Project Anvay',
    width: 800,
    height: 600
  },
  aomd: {
    src: new URL('../assets/projects/aomd.jpg', import.meta.url).href,
    alt: 'Project AOMD',
    width: 800,
    height: 600
  },
  ecommerce: {
    src: new URL('../assets/projects/ecommerce.webp', import.meta.url).href,
    alt: 'Project GK',
    width: 800,
    height: 600
  }
};

// Lazy load project card component
const ProjectCard = lazy(() => import('./ProjectCard'));

// Loading placeholder
const LoadingPlaceholder = () => (
  <div className="project-placeholder">
    <div className="placeholder-shimmer"></div>
  </div>
);

function Projects() {
  const projects = [
    {
      title: 'Project AOMD',
      description: 'Automatic Oil Maintenace Device',
      image: projectImages.aomd,
      link: 'https://rjwave.org/ijedr/papers/IJEDR2502024.pdf'
    },
    {
      title: 'Ecoshop',
      description: 'Prototype of E-commerce website, demostrating my frontend developement skills.',
      image: projectImages.ecommerce,
      link: 'https://ecoshop-ten.vercel.app/'
    },
    {
      title: 'To-do List Android App',
      description: 'Application to manage daily tasks.', 
      image: projectImages.todolist,
      link: 'https://github.com/mswagh-784/JetNoteApp'
    },
    {
      title: 'Rain Detection System',
      description: 'IoT based rain detection system, with realtime rain tracking using Node.js',
      image: projectImages.raindetection,
      link: '#'
    },
    {
      title: 'Movie List Android App',
      description: 'Application to view movie list using JetPack Compose', 
      image: projectImages.movieList,
      link: 'https://github.com/mswagh-784/JetMovies'
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <Slider {...sliderSettings} className="projects-slider">
        {projects.map((project, index) => (
          <div className="px-2" key={index}>
            <Suspense fallback={<LoadingPlaceholder />}>
              <ProjectCard project={project} />
            </Suspense>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Projects;
