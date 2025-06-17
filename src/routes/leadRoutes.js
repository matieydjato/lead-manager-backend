const express = require('express');
const router = express.Router();
const { createLead, getLeads } = require('../repositories/leadRepository');

// Add a new lead
router.post('/', async (req, res) => {
  try {
    const lead = await createLead(req.body);
    res.status(201).json(lead);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Fetch all leads
router.get('/', async (_req, res) => {
  try {
    const leads = await getLeads();
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
