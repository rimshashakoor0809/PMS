const mongoose = require('mongoose');

const IndustrySchema = mongoose.Schema(
    {
        post: {
            type: String,
            required: [true, 'Please provide the post.']
        },
        subject: {
            type: String,
        },
        image: {
            type: String,
            required: [true, 'Please upload the program image.']
        },
        address: {
            type: Array,
            company: {
                type: String,
                required: [true, 'Please provide the company name.']
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

const industry = mongoose.model('Industry', IndustrySchema);
module.exports = industry;