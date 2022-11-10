const express = require('express');
const blogController = require('./../Controller/blogController');
const router = express.Router();


router
  .route('/blog')
  .get(blogController.getBlog)
  .post(blogController.createNewBlog);

router
  .route('/blog/:title')
  .get(blogController.getBlogByTitle)
  .patch(blogController.updateBlog)
  .delete(blogController.deleteBlog);

module.exports = router;
