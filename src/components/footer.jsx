import 'react';
import './css/footer.css';
import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="about-section">
              <h6>About</h6>
              <p className="text-justify">This is a portfolio showcasing my skills and projects. Feel free to connect with me on LinkedIn, send me an email, or reach out via WhatsApp.</p>
            </div>
            <div className="contact-section">
              <h6>Contact</h6>
              <ul className="footer-links">
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=mswagh784@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Email
                  </a>
                </li>
                <li><a href="https://www.linkedin.com/in/mohit-wagh-22206525a" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://wa.me/7498799145" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="copyright-text">
            Copyright &copy; 2025 All Rights Reserved by <a href="#">Mohit Wagh</a>.
          </p>
          <div className="social-icons">
            <a
              className="social-icon email"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mswagh784@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            <a className="social-icon linkedin" href="https://www.linkedin.com/in/mohit-wagh-22206525a" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a className="social-icon whatsapp" href="https://wa.me/7498799145" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;