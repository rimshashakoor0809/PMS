const mongoose = require('mongoose');

const certSchema = mongoose.Schema({
  title: {
    type: String,
    unique: [true, 'Title must be unique'],
  },
  Image: {
    type: String,
    unique: [true, 'Image must be unique'],
  },
});

const Certificate = mongoose.model('Certificate', certSchema);
module.exports = Certificate;
