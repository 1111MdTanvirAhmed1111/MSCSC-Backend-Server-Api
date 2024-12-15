const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  details: { type: String, required: true },
  workshopTag: { type: String, required: true },
  workshopDate: { type: Date, required: true },
  coverImage: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);
