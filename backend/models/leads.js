import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  phone: {
    type: String,
    trim: true
  },
  purpose: {
    type: String,
    required: [true, 'Purpose is required'],
    enum: {
      values: ['job', 'service', 'quotation', 'enquiry', 'support', 'demo', 'partnership'],
      message: 'Purpose must be one of: job, service, quotation, enquiry, support, demo, partnership'
    }
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true
  }
}, {
  timestamps: true
});

const Lead = mongoose.model('Lead', leadSchema);

export default Lead;

