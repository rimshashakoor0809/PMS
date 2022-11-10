const { query } = require('express');
const Degree = require('../Model/degreeModel');
const Publication = require('../Model/publicationModel');
const Certificate = require('../Model/certificateModel');

exports.getDegree = async (req, res) => { };
exports.createNewDegree = (req, res) => { };
exports.getDegreeWithType = (req, res) => { };
exports.updateDegree = (req, res) => { };
exports.deleteDegree = (req, res) => { };

exports.getCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.find();
    res.status(200).json({
      status: 'success',
      results: certificate.length,
      data: {
        certificate: certificate,
      },
    });
  } catch (err) {
    console.log(`Error❤️‍🔥: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to get certificate😞.',
    });
  }
};

exports.createNewCertificate = async (req, res) => {
  try {
    const newCertificate = await Certificate.create(req.body);
    res.status(200).json({
      status: 'success',
      message: 'Certificate added successfully👌',
      data: {
        certificate: newCertificate,
      },
    });
  } catch (err) {
    console.log(`Error❤️‍🔥: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to create new certificate😞.',
      error: `${err.name} ${err.message}`,
    });
  }
};

exports.getCertificateWithTitle = async (req, res) => {
  try {
    const certID = await Certificate.findOne({
      "title": { $regex: '^' + req.params.title, $options: 'i' },
    }).exec();
    if (!certID) {
      res.status(400).json({
        status: 'Fail',
        message: 'No certificate Found😞',
      });
    }
    else {
      res.status(200).json({
        status: 'success',
        data: {
          certID,
        },
      });
    }

  } catch (err) {
    console.log(`Error❤️‍🔥: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to get certificate😞.',
      error: `${err.name} ${err.message}`,
    });
  }
};

exports.updateCertificate = async (req, res) => {
  try {
    const cert = await Certificate.findByIdAndUpdate(
      req.params.title,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({
      status: 'success',
      message: 'certificate updated.👌',
      data: {
        certificate: cert,
      },
    });
  } catch (err) {
    console.log(`Error❤️‍🔥: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to update certificate😞.',
    });
  }
};
exports.deleteCertificate = async (req, res) => {
  try {
    const delCert = await Certificate.findOneAndDelete(req.params.title);
    if (!delCert) {
      res.status(400).json({
        status: 'Fail',
        message: 'No certificate Found😞',
      });
    }
    else {
      res.status(204).json({
        status: 'success',
        message: 'Certificate Deleted Successfully👍',
      });
    }
  } catch (err) {
    console.log(`Error❤️‍🔥: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to delete certificate😞.',
      error: `${err.name} ${err.message}`,
    });
  }
};
