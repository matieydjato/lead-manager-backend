const Lead = require('../models/Lead');

async function createLead(data) {
  const lead = new Lead(data);
  return lead.save();
}

async function getLeads() {
  return Lead.find().sort('createdAt');
}

module.exports = { createLead, getLeads };
