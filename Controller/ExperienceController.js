const { query } = require('express');
const Manage = require('./Model/ManagementModel');
const Industry = require('./Model/IndustryModel');
const Freelance = require('./Model/FreelanceModel');

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
      message: 'New Industry added successfully👌',
      data: {
        industry: newIndustry,
      },
    });
  } catch (err) {
    console.log(`Error Found: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to create new industry😞.',
      error: `${err.name} ${err.message}`,
    });
  }
};
exports.getIndustryWithTitle = async (req, res) => {
  try {
    const industryID = await Industry.findOne({
      "title": { $regex: '^' + req.params.title, $options: 'i' },
    }).exec();
    if (!industryID) {
      res.status(400).json({
        status: 'Fail',
        message: 'No Industry Found😞',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        industryID,
      },
    });
    
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to get Industry😞.',
      error: `${err.name} ${err.message}`,
    });
  }
};
exports.updateIndustry = async (req, res) => {
  try {
    const upindustry = await Industry.findByIdAndUpdate(
      req.params.title,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({
      status: 'success',
      message: 'Industry updated.👌',
      data: {
        industry: upindustry,
      },
    });
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to update industry 😞.',
    });
  }
};
exports.deleteIndustry = async (req, res) => {
  try {
    const delindutry = await Industry.findOneAndDelete(req.params.title);
    if (!delindutry) {
      res.status(400).json({
        status: 'Fail',
        message: 'No Industry Found😞',
      });
    }

    res.status(204).json({
      status: 'success',
      message: 'Industry Deleted Successfully👍',
    });
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to delete industry 😞.',
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
exports.createNewFreelance = async(req, res) => {
  try {
    const newFreelance = await Freelance.create(req.body);
    res.status(200).json({
      status: 'success',
      message: 'New Freelance added successfully👌',
      data: {
        freelance: newFreelance,
      },
    });
  } catch (err) {
    console.log(`Error Found: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to create new freelance😞.',
      error: `${err.name} ${err.message}`,
    });
  }
};
exports.getFreelanceWithPlatform = async (req, res) => {
  try {
    const freelanceID = await Freelance.findOne({
      "title": { $regex: '^' + req.params.title, $options: 'i' },
    }).exec();
    if (!freelanceID) {
      res.status(400).json({
        status: 'Fail',
        message: 'No Freelance Found😞',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        freelanceID,
      },
    });
    
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to get Freelance 😞.',
      error: `${err.name} ${err.message}`,
    });
  }
};
exports.updateFreelance = async (req, res) => {
  try {
    const upfreelance = await Freelance.findByIdAndUpdate(
      req.params.title,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({
      status: 'success',
      message: 'Freelance updated.👌',
      data: {
        freelance: upfreelance,
      },
    });
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to update freelance 😞.',
    });
  }
};
exports.deleteFreelance = async (req, res) => {
  try {
    const delfreelance = await Freelance.findOneAndDelete(req.params.title);
    if (!delfreelance) {
      res.status(400).json({
        status: 'Fail',
        message: 'No Freelance Found😞',
      });
    }

    res.status(204).json({
      status: 'success',
      message: 'Freelance Deleted Successfully👍',
    });
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to delete freelance 😞.',
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