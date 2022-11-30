const express = require('express');
const userController = require('./../Controller/userController');
const router = express.Router();


router
  .route('/user')
  .get(userController.getUser)
  .post(userController.createNewUser);

router
  .route('/user/:name')
  .get(userController.getUserbyName)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router
  .route('/userPublications/:id')
  .get(userController.getUserPublications);

router
.route('/getpublications/:id')
  .get(userController.getUserById);


  

module.exports = router;