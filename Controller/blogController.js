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

exports.getBlogById = async (req, res) => {
  try {
    const BlogTitle = await Blog.findOne({
      "_id":req.params.id
    }).exec();
    if (!BlogTitle) {
      res.status(400).json({
        status: 'Fail',
        message: `Blog with id ${req.params.id} not Found`,
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

exports.updateBlog = async (req, res) => {
  try {
    const Ublog = await Blog.findOneAndUpdate({
      "_id":req.params.id},
      req.body,
      {
        new: true,
        runValidators: true,
      }).exec();
    if (!Ublog) {
      res.status(400).json({
        status: 'Fail',
        message: `Blog with title ${req.params.id} not Found`,
      });
    }
    else {
      res.status(201).json({
        status: 'success',
        message: 'Blog Successfully Updated',
        data: {
          blog: Ublog,
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

exports.deleteBlog = async (req, res) => {
  try {
    const delBlog = await Blog.findOneAndDelete({
      "_id":req.params.id,
    }).exec();
    if (!delBlog) {
      res.status(400).json({
        status: 'Fail',
        message: `Blog with title ${req.params.id} not Found`,
      });
    }
    res.status(204).json({
        status: 'success',
        message: `Blog with title ${req.params.id} Deleted Successfully`,
      });
    
  } catch (err) {
    console.log(`Error Found: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed To delete Blog.',
      error: `${err.name} ${err.message}`,
    });
  }
};

exports.publishBlog = async (req, res) => {
  try {
    const published = await Blog.aggregate([
      {
        $match: { Status: "Approved" },
      },
    ]);
    res.status(201).json({
      status: 'success',
      message: 'Published Blogs😃',
      data: {
        publish: published,
      },
    });
    
  } catch (err) {
    console.log(`Error Found: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed To Find Published Blog.',
      error: `${err.name} ${err.message}`,
    });
  }

}