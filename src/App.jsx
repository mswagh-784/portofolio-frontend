import Navigation from './components/navigation_bar';
import HeroSection from './components/hero_section';
import Skills from './components/skills';
import Experience from './components/experience';
import Certificates from './components/certificates';
import Achievements from './components/achievements';
import ContactForm from './components/contact_form';
import Footer from './components/footer';
import Education from './components/education';
import './App.css';
import Projects from './components/projects';
import ScrollAnimation from './components/ScrollAnimation';

function App() {

  return (
    <div className="App">
      <Navigation />

      <section id="home" className="hero-section">
        <ScrollAnimation animation="fade-up">
          <HeroSection />
        </ScrollAnimation>
      </section>

      <section id="certificates" className="certificates-section">
        <ScrollAnimation animation="fade-up">
          <Certificates />
        </ScrollAnimation>
      </section>

      <section id="skills" className="skills-section">
        <ScrollAnimation animation="fade-left">
          <Skills />
        </ScrollAnimation>
      </section>

      <section id="experience" className="experience-section">
        <ScrollAnimation animation="fade-right">
          <Experience />
        </ScrollAnimation>
      </section>

      <section id="projects" className="projects-section">
        <ScrollAnimation animation="fade-up">
          <Projects />
        </ScrollAnimation>
      </section>

      <section id="achievements" className="achievements-section">
        <div className="blog-achievements">
          <ScrollAnimation animation="fade-up">
            <Education />
          </ScrollAnimation>
        </div>
      </section>

      <section id="education" className="education-section">
        <ScrollAnimation animation="fade-up">
          <Achievements />
        </ScrollAnimation>
      </section>

      <section id="contact" className="contact-section">
        <ScrollAnimation animation="fade-up">
          <ContactForm />
        </ScrollAnimation>
      </section>

      <Footer />
    </div>
  );
}

export default App;