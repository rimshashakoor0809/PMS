const {query} = require('Express');
const Courses = require('../Model/coursesModel');
const Workshops = require('../Model/workshopsModel');
const Supervision = require('../Model/supervisionModel');

//=======Courses=========//

exports.getCourses = async (req, res) => {try {
  const course = await Courses.find();
  res.status(200).json({
    status: 'success',
    results: course.length,
    data: {
      course: course,
    },
  });
} catch (err) {
  console.log(`Error: ${err}`);
  res.status(400).json({
    status: 'Fail',
    message: 'Failed to get course',
  });
}};

exports.createNewCourse = async (req, res) => {
  try {
    const newCourse = await Courses.create(req.body);
    res.status(200).json({
      status: 'success',
      message: 'Course launched successfully',
      data: {
        course: newCourse,
      },
    });
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to launch new course',
      error: `${err.name} ${err.message}`,
    });
  }
};
exports.getCourseWithType = async(req, res) => {
  try {
    const courseID = await Courses.findOne({
      "title": { $regex: '^' + req.params.title, $options: 'i' },
    }).exec();
    if (!courseID) {
      res.status(400).json({
        status: 'Fail',
        message: 'No course found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        courseID,
      },
    });
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to get course',
      error: `${err.name} ${err.message}`,
    });
  }
};
exports.updateCourse = async(req, res) => {
  try {
    const courseUp = await Courses.findByIdAndUpdate(
      req.params.title,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({
      status: 'success',
      message: 'Course updated',
      data: {
        course: courseUp,
      },
    });
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to update course',
    });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const delCourse = await Courses.findOneAndDelete(req.params.title);
    if (!delCourse) {
      res.status(400).json({
        status: 'Fail',
        message: 'No course found',
      });
    }

    res.status(204).json({
      status: 'success',
      message: 'Course Deleted Successfully',
    });
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to delete course',
      error: `${err.name} ${err.message}`,
    });
  }
};


//=======Workshops=========//

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
        results: workID.length,
        data: {
          workshop: workID,
        },
      });
      
    } catch (err) {
      console.log(`Error: ${err}`);
      res.status(400).json({
        status: 'Fail',
        message: 'Failed to get workshop',
        error: `${err.name} ${err.message}`,
      });
    }
  };
  
  exports.updateWorkshop = async (req, res) => {
    try {
      const work = await Workshops.findByIdAndUpdate(
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


//=======Supervision=========//

exports.getSupervision = async (req, res) => {
  try {
    const supervision = await Supervision.find();
    res.status(200).json({
      status: 'success',
      results: supervision.length,
      data: {
        supervision: supervision,
      },
    });
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to get supervision',
    });
  }
};

exports.createNewSupervision = async(req, res) => {
  try {
    const newSupervision = await Supervision.create(req.body);
    res.status(200).json({
      status: 'success',
      message: 'Supervision launched successfully',
      data: {
        supervision: newSupervision,
      },
    });
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to launch new supervision',
      error: `${err.name} ${err.message}`,
    });
  }
};

exports.getSupervisionWithCategory = async (req, res) => {
  try {
    const supervisionID = await Supervision.findOne({
      "title": { $regex: '^' + req.params.title, $options: 'i' },
    }).exec();
    if (!supervisionID) {
      res.status(400).json({
        status: 'Fail',
        message: 'No supervision found',
      });
    }
    res.status(200).json({
      status: 'success',
      results: supervision.length,
      data: {
        supervisionID,
      },
    });
    
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to get supervision',
      error: `${err.name} ${err.message}`,
    });
  }
};

exports.updateSupervision = async(req, res) => {
  try {
    const supervisionUp= await Supervision.findByIdAndUpdate(
      req.params.title,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({
      status: 'success',
      message: 'Supervision updated',
      data: {
        supervision: supervisionUp,
      },
    });
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to update supervision',
    });
  }
};

exports.deleteSupervision = async(req, res) => {
  try {
    const delSup = await Supervision.findOneAndDelete(req.params.title);
    if (!delSup) {
      res.status(400).json({
        status: 'Fail',
        message: 'No supervision Found',
      });
    }

    res.status(204).json({
      status: 'success',
      message: 'Supervision Deleted Successfully',
    });
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to delete supervision',
      error: `${err.name} ${err.message}`,
    });
  }
};