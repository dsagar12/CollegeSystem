// routes/elections.js
const express = require('express');
const router = express.Router();
const Election = require('../models/Election');

router.get('/', async (req, res) => {
  try {
    const elections = await Election.find();
    res.json(elections);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const { title, description, startDate, endDate, candidates } = req.body;
  
  const election = new Election({
    title,
    description,
    startDate,
    endDate,
    candidates
  });

  try {
    const newElection = await election.save();
    res.status(201).json(newElection);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});