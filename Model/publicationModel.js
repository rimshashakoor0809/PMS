const mongoose = require('mongoose');

const publicationSchema = mongoose.Schema({
  title: {
      type: String,
      required: [true, 'Please provide the journal title.'],
  },
  type: {
    type: String,
    required: [true, 'Please provide publication type'],
    enum: {
      values: ['articles', 'conference proceedings', 'thesis', 'research paper'],
      message: 'Degree is either: journals, conference proceedings, thesis, research paper',
    },
  },
    description: {
      type: String,
    },
    year: {
      type: String,
      required: [true, 'Please provide the journal year.'],
    },
    Volume: {
      type: Number,
      required: [true, 'Please provide the journal Volume.'],
    },
    number: {
      type: Number,
      required: [true, 'Please provide the journal number.'],
    },
    Publisher: {
      type: String,
      required: [true, 'Please provide the publisher title.'],
    },
    citation: {
      type: Number,
  },
  i10Index: {
    type: Number,
    validate: {
        // this only points to current doc on NEW Document creation.
      validator: function () {
        if (this.citation >= 10) {
          default: this.citation;
        }
          return default;
        }

      }
  }
    
});

const Publication = mongoose.model('Publication', publicationSchema);
module.exports = Publication;

