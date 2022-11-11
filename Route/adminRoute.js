const express = require('express');
const adminController = require('./../Controller/adminController');
const router = express.Router();


router
  .route('/login')
  .get(adminController.getLogin)
  .post(adminController.checkLogin);

router
    .route('/blogs')
    .get(adminController.getBlog);

router
    .route('/blogs/:id')
    .get(adminController.getBlogById)
    .put(adminController.setBlog)
    .delete(adminController.deleteBlog);

router
    .route('/blogwriters')
    .get(adminController.getWriters)

router
    .route('/blogwriters/:id')
    .get(adminController.getWritersbyID)
    .post(adminController.hireWritersbyID);

module.exports = router;

//userprofiling