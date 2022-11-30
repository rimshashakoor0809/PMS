const mongoose = require('mongoose');

const FreelanceSchema = mongoose.Schema(
    {
        
        postion: {
            type: String,
            required: [true, 'Please provide the postion.']
        },
        image: {
            type: String,
            required: [true, 'Please upload the program image.']
        },
        address: {
            type: Array,
            platform: {
                type: String,
                required: [true, 'Please provide the platform.']
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
        startdate: {
            type: Date,
            required: [true, 'Pick the Start date first.']
        },
        enddate: {
            type: Date,
            required: [true, 'Pick the End date first.']
        }

})

const free = mongoose.model('Freelance', FreelanceSchema);
module.exports = free;