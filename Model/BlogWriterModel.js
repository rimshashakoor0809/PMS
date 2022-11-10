const mongoose = require('mongoose');

const blogWriterSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide blogwriter name.']
        },

        experienceLevel : {
            type: String,
            required: true,
            enum: {
                values: ['Professional', 'Junior'],
                message: 'Experience Level is Professional or Junior'
            }
        },
        Blogs: {
            type: Array,
            pid: {
                type: mongoose.Types.ObjectId,
                ref: 'Blog'
            }
        }

    }
  
)

const BlogWriter = mongoose.model('BlogWriter', blogWriterSchema);
module.exports = BlogWriter;