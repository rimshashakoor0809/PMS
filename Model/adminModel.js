var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var adminS = new Schema({
    Email:{
        type: String,
        required: [true, "Please Enter your Email Address"],
        index: { unique: true }
    },
    Name:{
        type: String,
        required: [true, "Please Enter your Name"]
    },
    Image:{
        type: Image,
        required: [true, "Please Enter your Image"]
    },
    Password:{
        type: String,
        required: [true, "Please Enter your Name"]
    },
})

const Admin = mongoose.model('Admin', adminS)
module.exports = Admin;