var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var adminS = new Schema({
    Email:{
        type: String,
        required: [true, "Please Enter an Email Address"],
        index: { unique: true }
    },
    Name:{
        type: String,
        required: [true, "Please Enter a Name"]
    },
    Image:{
        type: String,
        required: [true, "Please Enter an Image"]
    },
    Password:{
        type: String,
        required: [true, "Please Enter a Password"]
    },
})

const Admin = mongoose.model('Admin', adminS)
module.exports = Admin;