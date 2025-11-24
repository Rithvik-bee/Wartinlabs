import Lead from '../models/leads.js';
import { sendLeadNotificationEmail } from '../utils/emailService.js';

export const createLead = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, purpose, message } = req.body;

    if (!firstName || !lastName || !email || !purpose || !message) {
      return res.status(400).json({
        success: false,
        message: 'All required fields must be provided'
      });
    }

    const validPurposes = ['job', 'service', 'quotation', 'enquiry', 'support', 'demo', 'partnership'];
    if (!validPurposes.includes(purpose)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid purpose value'
      });
    }

    const newLead = new Lead({
      firstName,
      lastName,
      email,
      phone: phone || '',
      purpose,
      message
    });

    await newLead.save();

    // Send email notification asynchronously (non-blocking)
    // Don't wait for email to complete before sending response
    sendLeadNotificationEmail({
      firstName: newLead.firstName,
      lastName: newLead.lastName,
      email: newLead.email,
      phone: newLead.phone,
      purpose: newLead.purpose,
      message: newLead.message,
      createdAt: newLead.createdAt
    }).then(() => {
      console.log('Email notification sent successfully');
    }).catch((emailError) => {
      console.error('Failed to send email notification:', emailError);
    });

    // Send response immediately after saving to database
    res.status(201).json({
      success: true,
      message: 'Lead created successfully',
      data: {
        id: newLead._id,
        firstName: newLead.firstName,
        lastName: newLead.lastName,
        email: newLead.email,
        purpose: newLead.purpose
      }
    });
  } catch (error) {
    console.error('Error creating lead:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to create lead',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: leads.length,
      data: leads
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch leads',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

