const mongoose = require('mongoose');

const ManagementSchema = mongoose.Schema(
    {
        position: {
            type: String,
            required: [true, 'Please provide position.']
        },
        program: {
            type: String,
            required: [true, 'Please provide the program.']
        },
        address: {
            type: Array,
            institution: {
                type: String,
                required: [true, 'Please provide the institution name.']
            },
            city: {
                type: String,
                required: [true, 'Please provide the city name.']
            },
            country: {
                type: String,
                required: [true, 'Please provide the country name.']
            },
            postalcode: {
                type: Number,
                required: [true, 'Please provide postal code of your city']
            }
            
        },
        image: {
            type: String,
            required: [true, 'Please upload the program image.']
        },
        startdate: {
            type: Date,
            required: [true, 'Pick the Start date first.']
        },
        enddate: {
            type: Date,
            required: [true, 'Pick the End date first.']
        }
    })

const Manage = mongoose.model('Management', ManagementSchema);
module.exports = Manage;