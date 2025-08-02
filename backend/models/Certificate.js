const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  course: { type: String, required: true },
  date: { type: Date, required: true }
});

module.exports = mongoose.model('Certificate', certificateSchema);
