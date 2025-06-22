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
    const apiUrl = config.apiUrl;
    console.log('Submitting form data to:', `${apiUrl}/api/contact`);
    console.log('Form data:', formData);
    
    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'cors',
      });

      if (response.ok) {
        try {
          // Send emails after saving to DB
          const emailResponse = await fetch(`${apiUrl}/api/send-email`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          const emailData = await emailResponse.json();
          console.log('Email response:', emailData); // Debug log

          if (!emailResponse.ok) {
            throw new Error(emailData.message || 'Failed to send email');
          }

          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
          alert('Message sent successfully!');
        } catch (emailError) {
          console.error('Email sending error:', emailError);
          alert(`Message saved but email failed: ${emailError.message}`);
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        alert(
          errorData.message
            ? `Failed to send message: ${errorData.message}`
            : 'Failed to send message. Please try again.'
        );
      }
    } catch (error) {
      console.error('Error submitting form:', error);
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