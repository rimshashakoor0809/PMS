var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var hireWriterS = new Schema({
    BlogTitle:{
        type: String,
        required: [true, "Please Enter a Blog Title"],
    },
    BlogDesc:{
        type: String,
        required: [true, "Please Enter a Blog Description"],
    },
    BlogWriter:{
        type: mongoose.Types.ObjectId,
        ref: 'BlogWriter',
        required: [true, "Please Enter the name of Blog Writer you want to Hire"],
    },
    Status: {
        type: String,
        required: true,
        enum: {
            values: ['Accepted', 'Pending', 'In Progress', 'Completed'],
            message: 'Status is either: Approved, Pending, In Progress, or Not Approve'
        }
    },
});

const HireWriter = mongoose.model('hireWriter', hireWriterS)
module.exports = HireWriter;