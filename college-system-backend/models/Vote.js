// models/Vote.js
const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  election: { type: mongoose.Schema.Types.ObjectId, ref: 'Election' },
  candidateIndex: Number,
  voterEmail: { type: String, required: true }
});

voteSchema.index({ election: 1, voterEmail: 1 }, { unique: true });

module.exports = mongoose.model('Vote', voteSchema);