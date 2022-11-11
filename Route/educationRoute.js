const express = require('express');
const educationController = require('./../Controller/educationController');
const router = express.Router();


router
  .route('/degree')
  .get(educationController.getDegree)
  .post(educationController.createNewDegree);

router
  .route('/degree/:id')
  .get(educationController.getDegreeWithID)
  .patch(educationController.updateDegree)
  .delete(educationController.deleteDegree);


router
  .route('/certificate')
  .get(educationController.getCertificate)
  .post(educationController.createNewCertificate);

router
  .route('/certificate/:id')
  .get(educationController.getCertificateWithID)
  .patch(educationController.updateCertificate)
  .delete(educationController.deleteCertificate);

router
  .route('/publication')
  .get(educationController.getPublication)
  .post(educationController.createNewPublication);

router
  .route('/publication/:id')
  .get(educationController.getPublicationWithID)
  .patch(educationController.updatePublication)
  .delete(educationController.deletePublication);


module.exports = router;
