const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please give Title.']
        },

        blogBody:{
            type: String,
            required: [true, 'Please give Title.']
        },

        blogCategory:{
            type: String,
            required: [true, 'Please Specify Blog Category.']
        },
        Status: {
            type: String,
            required: true,
            enum: {
                values: ['Approved', 'Not Approved'],
                message: 'Status is either: Approved or Not Approved'
            }
        },
        
    }

)

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;