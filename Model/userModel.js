const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    interests: {
        type: Array,
        required: true
    },
    publications:
    [
        {
            type: Schema.Types.ObjectId,
            ref: 'publication',
        }
    ]
    ,
    Freelance_exp: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Freelance',
        }],

    Management_exp:
        [
            {
                type: Schema.Types.ObjectId,
                ref: 'Management',
            }
        ],


    Industry_exp:
        [
            {
                type: Schema.Types.ObjectId,
                ref: 'Industry',
            },
        ]

});
const User = mongoose.model('User', userSchema);
module.exports = User;