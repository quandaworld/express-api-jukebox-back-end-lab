const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Track title is required'],
    trim: true
  },
  artist: {
    type: String,
    required: [true, 'Artist name is required'],
    trim: true
  }
}, {
  timestamps: true
});

const Track = mongoose.model('Track', trackSchema);

module.exports = Track;