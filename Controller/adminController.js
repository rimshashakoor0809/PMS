const { query } = require('express');
const admin = require('../Model/adminModel');
const Blog = require('../Model/BlogModel');
const BlogWriter = require('../Model/BlogWriterModel');

var token;
var time;

//getLogin
exports.getLogin = async (req, res) => {
    try {
      res.status(200).json({
        status: 'success',
      });
    } catch (err) {
      console.log(`Error Found: ${err}`);
      res.status(400).json({
        status: 'Fail',
      });
    }
};

//checkLogin
exports.checkLogin = async (req, res) => {
    try {
      const cred = await admin.find({Email: req.params.email, Password: req.params.email});
      res.status(200).json({
        status: 'success',
      });
      token = Math.random()*10;
      time = Date.now();
    } catch (err) {
      console.log(`Error Found: ${err}`);
      res.status(400).json({
        status: 'Fail',
        message: 'Invalid Username or Password',
      });
    }
};

//Conditional to be uncommented for launch
//5 mins timeout for admin
//if (token != 0 && time + 300000 < Date.now()) {

    //getBlogs
    exports.getBlogs = async (req, res) => {
        try {
            const blog = await Blog.find();
            res.status(200).json({
                status: 'success',
                results: blog.length,
                data: {
                    blog: blog,
                },
            });
        } catch (err) {
            console.log(`Error Found: ${err}`);
            res.status(400).json({
                status: 'Fail',
                message: 'Blogs not Found.',
            });
        }
    };

    //getBlogsbyTitle
    exports.getBlogByTitle = async (req, res) => {
        try {
          const BlogTitle = await Blog.findOne({
            "title": { $regex: '^' + req.params.title, $options: 'i' },
          }).exec();
          if (!BlogTitle) {
            res.status(400).json({
              status: 'Fail',
              message: `Blog with title ${req.params.title} not Found`,
            });
          }
          else {
            res.status(200).json({
              status: 'success',
              results: BlogTitle.length,
              data: {
                blog: BlogTitle,
              },
            });
          }
      
        } catch (err) {
          console.log(`Error Found: ${err}`);
          res.status(400).json({
            status: 'Fail',
            message: 'Failed To Find Blog.',
            error: `${err.name} ${err.message}`,
          });
        }
    };

    //setBlogsbyTitle
    exports.setBlogsbyTitle = async (req, res) => {
        try {
          const UBlog = await Blog.findOneAndUpdate(
            req.params.title,
            req.body,
            {
              new: true,
              runValidators: true,
            }
          );
          res.status(201).json({
            status: 'success',
            message: 'Blog Successfully Updated',
            data: {
              blod: UBlog,
            },
          });
        } catch (err) {
          console.log(`Error Found: ${err}`);
          res.status(400).json({
            status: 'Fail',
            message: 'Failed to update Blog.',
          });
        }
    };

    //deleteBlogsbyTitle
    exports.deleteBlogsbyTitle = async (req, res) => {
        try {
          const delBlog = await Blog.findOneAndDelete(req.params.title);
          if (!delBlog) {
            res.status(400).json({
              status: 'Fail',
              message: `Blog with title ${req.params.title} not Found`,
            });
          }
          else{
            res.status(200).json({
              status: 'success',
              message: 'Blog Deleted Successfully',
            });
          }
        } catch (err) {
          console.log(`Error Found: ${err}`);
          res.status(400).json({
            status: 'Fail',
            message: 'Failed to delete Blog.',
          });
        }
    };

    //getWriters
    exports.getBlogs = async (req, res) => {
        try {
            const BlogWriter = await BlogWriter.find();
            res.status(200).json({
                status: 'success',
                results: BlogWriter.length,
                data: {
                    blog: BlogWriter,
                },
            });
        } catch (err) {
            console.log(`Error Found: ${err}`);
            res.status(400).json({
                status: 'Fail',
                message: 'Blog Writers not Found.',
            });
        }
    };

    //getWritersbyName
    

    //hireWritersbyName

//}
//else{
//    token = null;
//    time = null;
//}