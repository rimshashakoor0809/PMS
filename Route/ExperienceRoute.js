const express = require('express');
const experienceController = require('./../Controller/ExperienceController');
const router = express.Router();

router
    .route('/management')
    .get(experienceController.getManagement)
    .post(experienceController.createNewManagement);

router
    .route('/management/:id')
    .get(experienceController.getManagementWithID)
    .patch(experienceController.updateManagement)
    .delete(experienceController.deleteManagement);

router
    .route('/industry')
    .get(experienceController.getIndustry)
    .post(experienceController.createNewIndustry);

router
    .route('/industry/:id')
    .get(experienceController.getIndustryWithID)
    .patch(experienceController.updateIndustry)
    .delete(experienceController.deleteIndustry);

router
    .route('/freelance')
    .get(experienceController.getFreelance)
    .post(experienceController.createNewFreelance);

router
    .route('/freelance/:id')
    .get(experienceController.getFreelanceWithID)
    .patch(experienceController.updateFreelance)
    .delete(experienceController.deleteFreelance);


module.exports = router;
