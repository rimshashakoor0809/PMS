const mongoose = require('mongoose');

const publicationSchema = mongoose.Schema({
  type: Object,
  journals: {
    type: Object,
    title: {
      type: String,
      required: [true, 'Please provide the journal title.'],
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
  },
  conferencePaper: {
    type: Object,
    title: {
      type: String,
      required: [true, 'Please provide the journal title.'],
    },
    description: {
      type: String,
    },
    year: {
      type: String,
      required: [true, 'Please provide the journal year.'],
    },
    Publisher: {
      type: String,
      required: [true, 'Please provide the publisher title.'],
    },
    citation: {
      type: Number,
    },
  },
  thesis: {
    type: Object,
    title: {
      type: String,
      required: [true, 'Please provide the thesis title.'],
    },
    description: {
      type: String,
    },
    year: {
      type: String,
      required: [true, 'Please provide the thesis year.'],
    },
    citation: {
      type: Number,
    },
  },
});

const Publication = mongoose.model('Publication', publicationSchema);
module.exports = Publication;

