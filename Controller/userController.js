const { query } = require('express');
const User = require('../Model/userModel');


exports.getUser= async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      status: 'success',
      results: User.length,
      data: {
        user: user,
      },
    });
  } catch (err) {
    console.log(`Error Found: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'User not Found.',
    });
  }
};

exports.createNewUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json({
      status: 'Success',
      message: 'User Created Successfully',
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    console.log(`Error Found: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Unable to Create New User.',
      error: `${err.name} ${err.message}`,
    });
  }
};

exports.getUserbyName = async (req, res) => {
  try {
    const userName = await User.findOne({
      "name": { $regex: '^' + req.params.name, $options: 'i' },
    }).exec();
    if (!userName) {
      res.status(400).json({
        status: 'Fail',
        message: `User with name ${req.params.name} not Found`,
      });
    }
    else {
      res.status(200).json({
        status: 'success',
        results: userName.length,
        data: {
          user: userName,
        },
      });
    }

  } catch (err) {
    console.log(`Error Found: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed To Find user.',
      error: `${err.name} ${err.message}`,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      req.params.name,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({
      status: 'success',
      message: 'User Successfully Updated',
      data: {
        user: updatedUser,
      },
    });
  } catch (err) {
    console.log(`Error Found: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to update User.',
    });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const delUser = await User.findOneAndDelete({
      "name": { $regex: '^' + req.params.name, $options: 'i' },
    }).exec();
    if (!delUser) {
      res.status(400).json({
        status: 'Fail',
        message: `User with name ${req.params.name} not Found`,
      });
    }
    else {
      res.status(200).json({
        status: 'success',
        message: `User with name ${req.params.name} Deleted Successfully`,
      });
    }
  } catch (err) {
    console.log(`Error Found: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed To delete user.',
      error: `${err.name} ${err.message}`,
    });
  }
};
