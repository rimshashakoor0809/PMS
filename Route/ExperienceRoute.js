const express = require('express');
const experienceController = require('./../Controller/ExperienceController');
const router = express.Router();

router
    .route('/management')
    .get(experienceController.getManagement)
    .post(experienceController.createNewManagement);

router
    .route('/industry/:type')
    .get(experienceController.getManagementWithInstituition)
    .patch(experienceController.updateManagement)
    .delete(experienceController.deleteManagement);

router
    .route('/industry')
    .get(experienceController.getCertificate)
    .post(experienceController.createNewCertificate);

router
    .route('/industry/:title')
    .get(experienceController.getCertificateWithTitle)
    .patch(experienceController.updateCertificate)
    .delete(experienceController.deleteCertificate);

router
    .route('/freelance')
    .get(experienceController.getFreelance)
    .post(experienceController.createNewFreelance);

router
    .route('/freelance/:title')
    .get(experienceController.getCertificateWithTitle)
    .patch(experienceController.updateCertificate)
    .delete(experienceController.deleteFreelance);


module.exports = router;
