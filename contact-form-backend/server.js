// filepath: contact-form-backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.get('/', (req, res) => {
  activeStatus = true;
  errorStatus = false;
  res.send('Server is running');
});
app.use(bodyParser.json());
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://portfolio-mohitwagh.vercel.app',
    'https://your-vercel-domain.vercel.app'
  ]
}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// Routes
const contactRoute = require('./routes/contact');
app.use('/api/contact', contactRoute);

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Setup transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS  // your app password
    }
  });

  // Email to yourself
  const mailToSelf = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Contact: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };

  // Confirmation email to user
  const mailToUser = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank you for contacting Mohit Wagh',
    text: `Hi ${name},\n\nThank you for reaching out! I have received your message and will get back to you soon.\n\nYour message:\n${message}\n\nPhone: ${phone}\n\nBest regards,\nMohit Wagh`
  };

  try {
    console.log('Sending email to self and user...');
    await transporter.sendMail(mailToSelf);
    await transporter.sendMail(mailToUser);
    console.log('Emails sent!');
    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ message: 'Failed to send emails', error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));