const mongoose = require('mongoose');

const publicationSchema = mongoose.Schema({
  type : String,
  journals: {
        type: String,
        title: {
          type: String,
          required: [true, 'Please provide the journal title.']
        },
        description: {
          type: String,
        },
        year: {
          type: String,
          required: [true, 'Please provide the journal year.']
        },
        Volume: {
          type: Number,
          required: [true, 'Please provide the journal Volume.']
        },
        number: {
          type: Number,
          required: [true, 'Please provide the journal number.']
        }
      },
  conferencePaper: {
        type: String,
        required: [true, 'Please provide the details of conference papers.'],
        title: {
          type: String,
          required: [true, 'Please provide the journal title.']
        },
        description: {
          type: String,
        },
        year: {
          type: String,
          required: [true, 'Please provide the journal year.']
        },
        Publisher: {
          type: String,
          required: [true, 'Please provide the publisher title.']
        },
        citation: {
          type: Number,
          
        }
      },
      thesis: {
        type: String,
        required: [true, 'Please provide the details of your thesis.'],
        title: {
          type: String,
          required: [true, 'Please provide the thesis title.']
        },
        description: {
          type: String,
        },
        year: {
          type: String,
          required: [true, 'Please provide the thesis year.']
        },
        citation: {
          type: Number,
        }
      }
    }
);

const Publication = mongoose.model('Publication', publicationSchema);
module.exports = Publication;

