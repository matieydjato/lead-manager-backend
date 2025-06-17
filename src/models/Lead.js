const { Schema, model } = require('mongoose');

const leadSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  status: {
    type: String,
    enum: ['New', 'Engaged', 'Proposal Sent', 'Closed-Won', 'Closed-Lost'],
    default: 'New',
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = model('Lead', leadSchema);
