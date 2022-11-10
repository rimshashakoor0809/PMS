const express = require('express');
const teachingController = require('./../Controller/teachingController');
const router = express.Router();


router
  .route('/courses')
  .get(teachingController.getCourse)
  .post(teachingController.createNewCourse);

router
  .route('/courses/:code')
  .get(teachingController.getCourseWithCode)
  .patch(teachingController.updateCourse)
  .delete(teachingController.deleteCourse);


router
  .route('/supervision')
  .get(teachingController.getSupervision)
  .post(teachingController.createNewSupervision);

router
  .route('/supervision/:title')
  .get(teachingController.getSupervisionWithTitle)
  .patch(teachingController.updateSupervision)
  .delete(teachingController.deleteSupervision);

router
  .route('/workshops')
  .get(teachingController.getWorkshop)
  .post(teachingController.createNewWorkshop);

router
  .route('/workshops/:title')
  .get(teachingController.getWorkshopWithTitle)
  .patch(teachingController.updateWorkshop)
  .delete(teachingController.deleteWorkshop);

module.exports = router;
