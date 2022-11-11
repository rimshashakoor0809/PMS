const mongoose = require('mongoose');
const courseSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide the course title.'],
    },
    courseType: {
    type: String,
        required: [true, 'Please provide the course type.'],
        enum: {
            values: ['Graduate', 'Undergraduate'],
            message: 'Course Type is either: Graduate, Undergraduate '
    }
    },
  code: {
    type: String,
      required: [true, 'Please mention the course code.'],
    unique: [true,'Course Code must be unique']
  },

  description: {
    type: String,
    required: [true, 'Please tell what this course is about.'],
  },

  author: {
    type: String,
    required: [true, 'Please provide the course author name.'],
  },

  Image: {
    type: String,
  },

  CourseDuration: {
    type: String,
  },

  EnrolledStudents: {
    type: Number,
  },
});

const Courses = mongoose.model('Online Courses', courseSchema);
module.exports = Courses;

//===========ZahraHunYaar==================//