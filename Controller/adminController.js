const { query } = require('express');
var mongoose = require('mongoose');
const Admin = require('../Model/adminModel');
const Blog = require('../Model/BlogModel');
const BlogWriter = require('../Model/BlogWriterModel');
const HireWriter = require('../Model/hirewriterModel');

const blogController = require('./../Controller/blogController');
const userController = require('./../Controller/userController');

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
      const cred = await Admin.findOne({Email: req.params.email, Password: req.params.email});
      res.status(200).json({
        status: 'success',
        message: `Login Successful for ${cred}`,
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

    //getBlog
    exports.getBlog = blogController.getBlog;

    //getBlogById
    exports.getBlogById = blogController.getBlogById;

    //setBlog
    exports.setBlog = blogController.updateBlog;

    //deleteBlog
    exports.deleteBlog = blogController.deleteBlog;
    
    //getWriters
    exports.getWriters = async (req, res) => {
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

    //getWritersbyID
    exports.getWritersbyID = async (req, res) => {
      try {
        const WriterID = await BlogWriter.findOne({
          "_id":req.params.id
        }).exec();
        if (!WriterID) {
          res.status(400).json({
            status: 'Fail',
            message: `Blog with title ${req.params.id} not Found`,
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
    }

    //hireWritersbyID
    exports.hireWritersbyID = async (req, res) => {
      try {
        const hireWriter = await HireWriter.create({
          'BlogTitle': req.params.BlogTitle,
          'BlogDesc': req.params.BlogDesc,
          'BlogWriter': mongoose.Types.ObjectId(req.params.id),
          'Status': req.params.BlogWriter,
        });
        res.status(200).json({
          status: 'Success',
          message: 'Writer Request Sent',
          data: {
            blog: newBlog,
          },
        });
      } catch (err) {
        console.log(`Error Found: ${err}`);
        res.status(400).json({
          status: 'Fail',
          message: 'Writer Request Failed to Send.',
          error: `${err.name} ${err.message}`,
        });
      }
    }

    //getUser
    exports.getUser = userController.getUser;

    //getUserbyName
    exports.getUserbyName = userController.getUserbyName;

    //updateUser
    exports.updateUser = userController.updateUser;

    //deleteUser
    exports.deleteUser = userController.deleteUser;

//}
//else{
//    token = null;
//    time = null;
//}