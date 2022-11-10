const mongoose = require('mongoose');

const workshopSchema = mongoose.Schema({
  title: {
    type: String,
    unique: [true, 'Workshop title must be unique'],
  },
  category: {
    type: String,
    required: [true, 'Please mention the category in which this workshop falls'],
  },
  description: {
    type: String,
    required: [true, 'Please tell what this workshop is about'],
  },
  date: {
    type: Date,
    unique: [true, 'Date must be unique'],
  },
  time: {
    type: TimeRanges,
    unique: [true, 'Time must be unique'],
  }
});

const Workshops = mongoose.model('Workshops', workshopSchema);
module.exports = Workshops;
