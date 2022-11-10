const {query} = require('Express');
const Courses = require('../Model/coursesModel');
const Workshops = require('../Model/workshopsModel');
const Supervision = require('../Model/supervisionModel');

exports.getCourses = async (req, res) => {};
exports.createNewCourse = (req, res) => {};
exports.getCourseWithType = (req, res) => {};
exports.updateCourse = (req, res) => {};
exports.deleteCourse = (req, res) => {};

exports.getWorkshop = async (req, res) => {
    try {
      const workshop = await Workshops.find();
      res.status(200).json({
        status: 'success',
        results: workshop.length,
        data: {
          workshop: workshop,
        },
      });
    } catch (err) {
      console.log(`Error: ${err}`);
      res.status(400).json({
        status: 'Fail',
        message: 'Failed to get workshop',
      });
    }
  };
  
  exports.createNewWorkshop = async (req, res) => {
    try {
      const newWorkshop = await Workshops.create(req.body);
      res.status(200).json({
        status: 'success',
        message: 'Workshop launched successfully',
        data: {
          workshop: newWorkshop,
        },
      });
    } catch (err) {
      console.log(`Error: ${err}`);
      res.status(400).json({
        status: 'Fail',
        message: 'Failed to launch new workshop',
        error: `${err.name} ${err.message}`,
      });
    }
  };
  
  exports.getWorkshopWithCategory = async (req, res) => {
    try {
      const workID = await Workshops.findOne({
        "title": { $regex: '^' + req.params.title, $options: 'i' },
      }).exec();
      if (!workID) {
        res.status(400).json({
          status: 'Fail',
          message: 'No workshop found',
        });
      }
      res.status(200).json({
        status: 'success',
        results: workshop.length,
        data: {
          workshop: workID,
        },
      });
      
    } catch (err) {
      console.log(`Error❤️‍🔥: ${err}`);
      res.status(400).json({
        status: 'Fail',
        message: 'Failed to get workshop',
        error: `${err.name} ${err.message}`,
      });
    }
  };
  
  exports.updateWorkshop = async (req, res) => {
    try {
      const work = await Workshop.findByIdAndUpdate(
        req.params.title,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      res.status(201).json({
        status: 'success',
        message: 'Workshop updated',
        data: {
          workshop: work,
        },
      });
    } catch (err) {
      console.log(`Error: ${err}`);
      res.status(400).json({
        status: 'Fail',
        message: 'Failed to update workshop',
      });
    }
  };
  exports.deleteWorkshop = async (req, res) => {
    try {
      const delWork = await Workshop.findOneAndDelete(req.params.title);
      if (!delWork) {
        res.status(400).json({
          status: 'Fail',
          message: 'No workshop found',
        });
      }
  
      res.status(204).json({
        status: 'success',
        message: 'Workshop deleted successfully',
      });
    } catch (err) {
      console.log(`Error: ${err}`);
      res.status(400).json({
        status: 'Fail',
        message: 'Failed to delete workshop',
        error: `${err.name} ${err.message}`,
      });
    }
  };

exports.getSupervision = async (req, res) => {};
exports.createNewSupervision = (req, res) => {};
exports.updateSupervision = (req, res) => {};
exports.deleteSupervision = (req, res) => {};