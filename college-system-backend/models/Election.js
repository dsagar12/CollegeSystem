// models/Election.js
const mongoose = require('mongoose');

const electionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  candidates: [{
    name: String,
    bio: String,
    votes: { type: Number, default: 0 }
  }]
});

module.exports = mongoose.model('Election', electionSchema);