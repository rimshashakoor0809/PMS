const { query } = require('express');
const Manage = require('./Model/ManagementModel');
const Industry = require('./Model/IndustryModel');
const Freelance = require('./Model/FreelanceModel');

exports.getIndustry = async (req, res) => {};
exports.createNewIndustry = (req, res) => {};
exports.getIndustryWithTitle = (req, res) => {};
exports.updateIndustry = (req, res) => {};
exports.deleteIndustry = (req, res) => {};


exports.getFreelance = async (req, res) => {};
exports.createNewFreelance = (req, res) => {};
exports.getFreelanceWithPlatform = (req, res) => {};
exports.updateFreelance = (req, res) => {};
exports.deleteFreelance = (req, res) => {};

exports.getManagement = async (req, res) => {
    try {
        const manage = await Manage.find();
        res.status(200).json({
          status: 'success',
          results: manage.length,
          data: {
            management: manage,
          },
        });
      } catch (err) {
        console.log(`Error Found: ${err}`);
        res.status(400).json({
          status: 'Fail',
          message: 'Failed to find the Management',
        });
      }
};
exports.createNewManagement = async (req, res) => {
    try {
        const newManagement = await Management.create(req.body);
        res.status(200).json({
          status: 'success',
          message: 'Management added successfully👌',
          data: {
            management: newManagement,
          },
        });
      } catch (err) {
        console.log(`Error Found: ${err}`);
        res.status(400).json({
          status: 'Fail',
          message: 'Failed to create new management😞.',
          error: `${err.name} ${err.message}`,
        });
      }

};
exports.getManagementWithInstituition = async (req, res) => {
    try {
        const manageID = await Management.findOne({
          "title": { $regex: '^' + req.params.title, $options: 'i' },
        }).exec();
        if (!manageID) {
          res.status(400).json({
            status: 'Fail',
            message: 'No Management Found😞',
          });
        }
        res.status(200).json({
          status: 'success',
          data: {
            manageID,
          },
        });
        
      } catch (err) {
        console.log(`Error❤️‍🔥: ${err}`);
        res.status(400).json({
          status: 'Fail',
          message: 'Failed to get Management😞.',
          error: `${err.name} ${err.message}`,
        });
      }
};
exports.updateManagement = async (req, res) => {
    try {
        const upmanage = await Management.findByIdAndUpdate(
          req.params.title,
          req.body,
          {
            new: true,
            runValidators: true,
          }
        );
        res.status(201).json({
          status: 'success',
          message: 'Management updated.👌',
          data: {
            management: upmanage,
          },
        });
      } catch (err) {
        console.log(`Error❤️‍🔥: ${err}`);
        res.status(400).json({
          status: 'Fail',
          message: 'Failed to update management😞.',
        });
      }
};
exports.deleteManagement = async (req, res) => {
    try {
        const delmanage = await Management.findOneAndDelete(req.params.title);
        if (!delCert) {
          res.status(400).json({
            status: 'Fail',
            message: 'No management Found😞',
          });
        }
    
        res.status(204).json({
          status: 'success',
          message: 'Management Deleted Successfully👍',
        });
      } catch (err) {
        console.log(`Error❤️‍🔥: ${err}`);
        res.status(400).json({
          status: 'Fail',
          message: 'Failed to delete management😞.',
          error: `${err.name} ${err.message}`,
        });
      }
};