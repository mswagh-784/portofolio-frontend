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
// Apply CORS middleware before routes
app.use(cors({
  origin: '*',  // Allow all origins for testing
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
  socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
})
.then(() => {
  console.log('MongoDB connected successfully');
  // Only start the server after successful database connection
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => {
  console.error('MongoDB connection error:', {
    message: err.message,
    name: err.name,
    code: err.code,
    stack: err.stack
  });
  process.exit(1); // Exit if cannot connect to database
});

// Add connection error handler
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

// Add disconnection handler
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Add reconnection handler
mongoose.connection.on('reconnected', () => {
  console.log('MongoDB reconnected');
});

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