const express = require('express');
const educationController = require('./../Controller/educationController');
const router = express.Router();


router
  .route('/degree')
  .get(educationController.getDegree)
  .post(educationController.createNewDegree);

router
  .route('/degree/:type')
  .get(educationController.getDegreeWithType)
  .patch(educationController.updateDegree)
  .delete(educationController.deleteDegree);


router
  .route('/certificate')
  .get(educationController.getCertificate)
  .post(educationController.createNewCertificate);

router
  .route('/certificate/:title')
  .get(educationController.getCertificateWithTitle)
  .patch(educationController.updateCertificate)
  .delete(educationController.deleteCertificate);


module.exports = router;
