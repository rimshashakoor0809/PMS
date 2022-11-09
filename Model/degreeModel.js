const mongoose = require('mongoose');

const degreeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide degree name.']
    },
    degreeType: {
      type: String,
      required: [true, 'Please provide degree type.'],
      enum: {
        values: ['BS', 'MS', 'PHD', 'AS'],
        message: 'Degree is either: BS, MS, PHD or AS',
      }
    },
    degreeMajor: {
      type: String,
      required: [true, 'Please provide the program.']
    },
    institute: {
      type: String,
      required: [true, 'Please provide the institute name.']
    },
    publications: {
      pid: {
        type: mongoose.Types.ObjectId,
        ref: 'Degree'
      }
    }
  })

const Degree = mongoose.model('Degree', degreeSchema);
module.exports = Degree;