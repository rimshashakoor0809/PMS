const mongoose = require('mongoose');
const Publication = require('./publicationModel');

const degreeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide degree name.'],
    enum: {
      values: ['Bachelors', 'Masters', 'PHD', 'Associate'],
      message: 'Degree is either: Bachelors, Masters, PHD or Associate',
    },
  },
  degreeMajor: {
    type: String,
    required: [true, 'Please provide the program.'],
  },
  institute: {
    type: String,
    required: [true, 'Please provide the institute name.'],
  },
  publications: {
    pid: {
      type: mongoose.Types.ObjectId,
      ref: 'Publication',
    },
  },
});

const Degree = mongoose.model('Degree', degreeSchema);
module.exports = Degree;