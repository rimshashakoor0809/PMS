const mongoose = require('mongoose');
const supervisionSchema = mongoose.Schema({
    

    FinalYearProject: {
        type: Object,

        Id : {
            type: Number,
            unique : [true, 'Id must be unique']
        },

        title : {
            type: String,
            required: [true, 'Please provide the FYP title.']
        },

        area: {
            type: String,
            required: [true, 'Please mention the project domain.']
        },

        description: {
            type: String,
            required: [true, 'Please tell what this project is about.']
        },

        students: {
            type: String,
            required: [true, 'Please provide the students names.']
        },

        tools: {
            type: String,
            required: [true, 'Name the tools you have to work with.'],
        }

    },

    MSThesis: {
        type: Object,

        Id : {
            type: Number,
            unique : [true, 'Id must be unique']
        },

        title : {
            type: String,
            required: [true, 'Please provide the course title.']
        },

        description: {
            type: String,
            required: [true, 'Please tell what this course is about.']
        },

        researchArea: {
            type: String,
            required: [true, 'Please provide the valid research domain.']
        },

        studentName: {
            type: String,
            required: [true, 'Please provide student name.']
        },

        status: {
            type: String,
            unique: [true, 'Status must be unique'],
        },

        Duration: {
            type: String,
            required: [true, 'Duration must be defined'],
        },

        degree: {
            type: String,
            required: [true, 'Please provide degree name']
        }
    }
});

const Supervision = mongoose.model('Supervision', supervisionSchema);
module.exports = Supervision;


