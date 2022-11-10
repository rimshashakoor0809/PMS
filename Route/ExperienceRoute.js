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
    .get(experienceController.getIndustry)
    .post(experienceController.createNewIndustry);

router
    .route('/industry/:title')
    .get(experienceController.getIndustryWithTitle)
    .patch(experienceController.updateIndustry)
    .delete(experienceController.deleteIndustry);

router
    .route('/freelance')
    .get(experienceController.getFreelance)
    .post(experienceController.createNewFreelance);

router
    .route('/freelance/:title')
    .get(experienceController.getFreelanceWithPlatform)
    .patch(experienceController.updateFreelance)
    .delete(experienceController.deleteFreelance);


module.exports = router;
