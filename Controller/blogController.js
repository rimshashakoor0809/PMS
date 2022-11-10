const { query } = require('express');
const Blog = require('../Model/BlogModel');
const BLogWriter = require('../Model/BlogWriterModel');
//blog edit


exports.getBlog = async (req, res) => {
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
      message: 'Blog not Found.',
    });
  }
};

exports.createNewBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.status(200).json({
      status: 'Success',
      message: 'Blog Created Successfully',
      data: {
        blog: newBlog,
      },
    });
  } catch (err) {
    console.log(`Error Found: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Unable to Create New Blog.',
      error: `${err.name} ${err.message}`,
    });
  }
};

exports.getBlogByTitle = async (req, res) => {
  try {
    const BlogTitle = await Blog.findOne({
      "title": { $regex: '^' + req.params.title, $options: 'i' },
    }).exec();
    if (!BlogTitle) {
      res.status(400).json({
        status: 'Fail',
        message: 'Blog not Found',
      });
    }
    res.status(200).json({
      status: 'success',
      results: BlogTitle.length,
      data: {
        blog: BlogTitle,
      },
    });
    
  } catch (err) {
    console.log(`Error Found: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed To Find Blog.',
      error: `${err.name} ${err.message}`,
    });
  }
};

exports.updateBlog = async (req, res) => {
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
exports.deleteBlog = async (req, res) => {
  try {
    const delBlog = await Blog.findOneAndDelete(req.params.title);
    if (!delBlog) {
      res.status(400).json({
        status: 'Fail',
        message: 'Blog not Found',
      });
    }

    res.status(204).json({
      status: 'success',
      message: 'Blog Deleted Successfully',
    });
  } catch (err) {
    console.log(`Error Found: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to delete Blog.',
      error: `${err.name} ${err.message}`,
    });
  }
};
