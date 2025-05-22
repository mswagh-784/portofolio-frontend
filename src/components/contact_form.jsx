import React, { useState } from 'react';
import './css/contact_form.css';
import config from '../config';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Added phone
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log('Updated formData:', { ...formData, [e.target.name]: e.target.value }); // Debug log
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.phone) {
      alert('Phone number is required!');
      return;
    }
    console.log('Submitting form data to:', `${config.apiUrl}/api/contact`);
    console.log('Form data:', formData);
    
    try {
      const response = await fetch(`${config.apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'cors',
      });

      if (response.ok) {
        // Send emails after saving to DB
        await fetch(`${config.apiUrl}/api/send-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        alert('Message sent successfully!');
      } else {
        const errorData = await response.json().catch(() => ({}));
        alert(
          errorData.message
            ? `Failed to send message: ${errorData.message}`
            : 'Failed to send message. Please try again.'
        );
      }
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
  };

  return (
    <section className="contact-form-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10,15}"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
          <div className="freelancing-info">
            <h3>Freelancing Services</h3>
            <p>
              I am happy to annonce that, I will be starting my freelancing journey soon.I will offer range of IT services through new startup venture soon.
            </p>
            <p>
              I will notify about the services and their pricing soon on my linkedin profile.I hope you all will give me a chance to serve you.
            </p>
            <p>
              Thank you for your time and consideration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;