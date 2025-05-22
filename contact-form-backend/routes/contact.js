// filepath: contact-form-backend/routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST route to handle form submission
router.post('/', async (req, res) => {
  // Log the received data for debugging
  console.log('Received data:', req.body);

  try {
    // Make sure to extract phone from req.body
    const { name, email, phone, subject, message } = req.body;
    if (!phone) {
      // Explicitly check and return a clear error if phone is missing
      return res.status(400).json({ message: 'Phone number is required in request body.' });
    }
    const newContact = new Contact({
      name,
      email,
      phone, // include phone here
      subject,
      message
    });
    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Failed to save contact', error: error.message, details: error.errors });
  }
});

module.exports = router;