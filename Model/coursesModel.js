const mongoose = require('mongoose');
const courseSchema = mongoose.Schema({
    type : String,
    UnderGraduate: {
        type: String,
        required: [true, 'Please provide the course details.'],

        title : {
            type: String,
            required: [true, 'Please provide the course title.']
        },

        code: {
            type: String,
            required: [true, 'Please mention the course code.']
        },

        description: {
            type: String,
            required: [true, 'Please tell what this course is about.']
        },

        author: {
            type: String,
            required: [true, 'Please provide the course author name.']
        },

        Image: {
            type: String,
            unique: [true, 'Image must be unique'],
        },

        CourseDuration: {
            type: String,
        },

        EnrolledStudents: {
            type: Number,
        }

    },

    Graduate: {
        type: String,
        required: [true, 'Please provide the course details.'],

        title : {
            type: String,
            required: [true, 'Please provide the course title.']
        },

        code: {
            type: String,
            required: [true, 'Please mention the course code.']
        },

        description: {
            type: String,
            required: [true, 'Please tell what this course is about.']
        },

        author: {
            type: String,
            required: [true, 'Please provide the course author name.']
        },

        Image: {
            type: String,
            unique: [true, 'Image must be unique'],
        },

        CourseDuration: {
            type: String,
        },

        EnrolledStudents: {
            type: Number,
        }
    }
});

const Courses = mongoose.model('Online Courses', courseSchema);
module.exports = Courses;
