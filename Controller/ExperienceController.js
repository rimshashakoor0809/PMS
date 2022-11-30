const Manage = require('../Model/ManagementModel');
const Industry = require('../Model/IndustryModel');
const Freelance = require('../Model/FreelanceModel');

//Indutry Controllers
exports.getIndustry = async (req, res) => {
  try {
    const indus = await Industry.find();
    res.status(200).json({
      status: 'success',
      results: indus.length,
      data: {
        industry: indus,
      },
    });
  } catch (err) {
    console.log(`Error Found: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to find the Industry',
    });
  }
};
exports.createNewIndustry = async (req, res) => {
  try {
    const newIndustry = await Industry.create(req.body);
    res.status(200).json({
      status: 'success',
      message: 'New Industry added successfully',
      data: {
        industry: newIndustry,
      },
    });
  } catch (err) {
    console.log(`Error Found: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to create new industry.',
      error: `${err.name} ${err.message}`,
    });
  }
};
exports.getIndustryWithID = async (req, res) => {
  try {
    const industryID = await Industry.findOne({
      "_id": req.params.id,
    }).exec();
    if (!industryID) {
      res.status(400).json({
        status: 'Fail',
        message: 'No Industry Found',
      });
    }
    else {
      res.status(200).json({
        status: 'success',
        data: {
          industryID,
        },
      });
    }

  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to get Industry.',
      error: `${err.name} ${err.message}`,
    });
  }
};
exports.updateIndustry = async (req, res) => {
  try {
    const upIndustry = await Industry.findOneAndUpdate({
      "_id":req.params.id},
      req.body,
      {
        new: true,
        runValidators: true,
      }).exec();
    if (!upIndustry) {
      res.status(400).json({
        status: 'Fail',
        message: `Industry with ID ${req.params.id} not Found`,
      });
    }
    else {
      res.status(201).json({
        status: 'success',
        message: 'Industry Successfully Updated',
        data: {
          blog: upIndustry,
        },
      });
    }

  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to update industry.',
    });
  }
};
exports.deleteIndustry = async (req, res) => {
  try {
    const delindustry = await Industry.findOneAndDelete({"_id": req.params.id}).exec();
    if (!delindustry) {
      res.status(400).json({
        status: 'Fail',
        message: 'No Industry Found',
      });
    }
    res.status(204).json({
      status: 'success',
      message: `Industry with title ${req.params.id} Deleted Successfully`,
    });
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to delete industry.',
      error: `${err.name} ${err.message}`,
    });
  }
};

//Freelance Controllers
exports.getFreelance = async (req, res) => {
  try {
    const free = await Freelance.find();
    res.status(200).json({
      status: 'success',
      results: free.length,
      data: {
        freelance: free,
      },
    });
  } catch (err) {
    console.log(`Error Found: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to find the Freelance',
    });
  }
};
exports.createNewFreelance = async (req, res) => {
  try {
    const newFreelance = await Freelance.create(req.body);
    res.status(200).json({
      status: 'success',
      message: 'New Freelance added successfully',
      data: {
        freelance: newFreelance,
      },
    });
  } catch (err) {
    console.log(`Error Found: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to create new freelance.',
      error: `${err.name} ${err.message}`,
    });
  }
};
exports.getFreelanceWithID = async (req, res) => {
  try {
    const freelanceID = await Freelance.findOne({
      "_id": req.params.id,
    }).exec();
    if (!freelanceID) {
      res.status(400).json({
        status: 'Fail',
        message: 'No Freelance Found',
      });
    }
    else {
      res.status(200).json({
        status: 'success',
        data: {
          freelanceID,
        },
      });
    }

  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to get Freelance.',
      error: `${err.name} ${err.message}`,
    });
  }
};
exports.updateFreelance = async (req, res) => {
  try {
    const upfreelance = await Freelance.findByIdAndUpdate(
      {"_id":req.params.id},
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({
      status: 'success',
      message: 'Freelance updated.',
      data: {
        freelance: upfreelance,
      },
    });
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to update freelance.',
    });
  }
};
exports.deleteFreelance = async (req, res) => {
  try {
    const delfreelance = await Freelance.findOneAndDelete({"_id":req.params.id});
    if (!delfreelance) {
      res.status(400).json({
        status: 'Fail',
        message: 'No Freelance Found',
      });
    }
    else {
      res.status(204).json({
        status: 'success',
        message: 'Freelance Deleted Successfully',
      });
    }
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to delete freelance.',
      error: `${err.name} ${err.message}`,
    });
  }
};

//Management Controllers
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
    const newManagement = await Manage.create(req.body);
    res.status(200).json({
      status: 'success',
      message: 'Management added successfully',
      data: {
        management: newManagement,
      },
    });
  } catch (err) {
    console.log(`Error Found: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to create new management.',
      error: `${err.name} ${err.message}`,
    });
  }

};
exports.getManagementWithID = async (req, res) => {
  try {
    const manageID = await Manage.findOne({
      "_id": req.params.id,
    }).exec();
    if (!manageID) {
      res.status(400).json({
        status: 'Fail',
        message: 'No Management Found',
      });
    }
    else {
      res.status(200).json({
        status: 'success',
        data: {
          manageID,
        },
      });
    }

  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to get Management.',
      error: `${err.name} ${err.message}`,
    });
  }
};
exports.updateManagement = async (req, res) => {
  try {
    const upmanage = await Manage.findOneAndUpdate(
     {"_id": req.params.id},
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
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to update management.',
    });
  }
};
exports.deleteManagement = async (req, res) => {
  try {
    const delmanage = await Manage.findOneAndDelete({"_id": req.params.id});
    if (!delmanage) {
      res.status(400).json({
        status: 'Fail',
        message: 'No management Found',
      });
    }
    else {
      res.status(204).json({
        status: 'success',
        message: 'Management Deleted Successfully',
      });
    }
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to delete management.',
      error: `${err.name} ${err.message}`,
    });
  }
};