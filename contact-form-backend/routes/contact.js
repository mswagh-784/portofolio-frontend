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
    
    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      console.log('Missing required fields:', { name, email, phone, subject, message });
      return res.status(400).json({ 
        message: 'All fields are required',
        missingFields: {
          name: !name,
          email: !email,
          phone: !phone,
          subject: !subject,
          message: !message
        }
      });
    }

    console.log('Creating new contact with data:', { name, email, phone, subject, message });
    
    const newContact = new Contact({
      name,
      email,
      phone,
      subject,
      message
    });

    console.log('Attempting to save contact...');
    const savedContact = await newContact.save();
    console.log('Contact saved successfully:', savedContact);
    
    res.status(201).json({ 
      message: 'Contact saved successfully',
      contact: savedContact
    });
  } catch (error) {
    console.error('Detailed error saving contact:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      code: error.code
    });
    
    // Handle specific MongoDB errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        message: 'Validation error',
        errors: Object.values(error.errors).map(err => err.message)
      });
    }
    
    if (error.code === 11000) {
      return res.status(400).json({ 
        message: 'Duplicate entry error',
        field: Object.keys(error.keyPattern)[0]
      });
    }

    res.status(500).json({ 
      message: 'Failed to save contact',
      error: error.message,
      details: error.errors || 'No additional details available'
    });
  }
});

module.exports = router;