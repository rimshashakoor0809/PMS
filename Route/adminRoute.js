const express = require('express');
const adminController = require('./../Controller/adminController');
const router = express.Router();


router
  .route('/login')
  .get(adminController.getLogin)
  .post(adminController.checkLogin);

router
    .route('/blogs')
    .get(adminController.getBlogs);

router
    .route('/blogs/:title')
    .get(adminController.getBlogsbyTitle)
    .put(adminController.setBlogsbyTitle)
    .delete(adminController.deleteBlogsbyTitle);

router
    .route('/blogwriters')
    .get(adminController.getWriters)

router
    .route('/blogwriters/:name')
    .get(adminController.getWritersbyName)
    .post(adminController.hireWritersbyName);

module.exports = router;