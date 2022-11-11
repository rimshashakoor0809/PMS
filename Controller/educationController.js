const { query } = require('express');
const Degree = require('../Model/degreeModel');
const Publication = require('../Model/publicationModel');
const Certificate = require('../Model/certificateModel');

// **************** DEGREE HANDLERS *****************

exports.getDegree = async (req, res) => {
  try {
    const degree = await Degree.find();
    res.status(200).json({
      status: 'success',
      results: degree.length,
      data: {
        degree: degree,
      },
    });
  } catch (err) {
    console.log(`Error❤️‍🔥: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to get degree😞.',
    });
  }

};
exports.createNewDegree = async (req, res) => {
  try {
    const newDegree = await Degree.create(req.body);
    res.status(200).json({
      status: 'success',
      message: 'New Degree added successfully👌',
      data: {
        certificate: newDegree,
      },
    });
  } catch (err) {
    console.log(`Error❤️‍🔥: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to create new degree😞.',
      error: `${err.name} ${err.message}`,
    });
  }
};
exports.getDegreeWithID = async(req, res) => {
  try {
    const degreeID = await Degree.findById(req.params.id);
    if (!degreeID ) {
      res.status(400).json({
        status: 'Fail',
        message: 'No degree Found😞',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        degreeID ,
      },
    });
    
  } catch (err) {
    console.log(`Error❤️‍🔥: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to get degree😞.',
      error: `${err.name} ${err.message}`,
    });
  }
};
exports.updateDegree =  async(req, res) => {

  try {
    const degree = await Degree.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!degree) {
      res.status(400).json({
        status: 'Fail',
        message: 'No Degree Found😞',
      });
    }
    res.status(201).json({
      status: 'success',
      message: 'degree updated.👌',
      data: {
        degree: degree,
      },
    });
  } catch (err) {
    console.log(`Error❤️‍🔥: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to update degree😞.',
    });
  }
};
exports.deleteDegree = async (req, res) => {
  try {
    const delDegree = await Degree.findByIdAndDelete(req.params.id);
    if (!delDegree) {
      res.status(400).json({
        status: 'Fail',
        message: 'No Degree Found😞',
      });
    }

    res.status(204).json({
      status: 'success',
      message: 'Degree Deleted Successfully👍',
    });
  } catch (err) {
    console.log(`Error❤️‍🔥: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to delete Degree😞.',
      error: `${err.name} ${err.message}`,
    });
  }
};


// **************** CERTIFICATE HANDLERS *****************

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

exports.getCertificateWithID = async (req, res) => {
  try {
    const certID = await Certificate.findById(req.params.id);
    if (!certID) {
      res.status(400).json({
        status: 'Fail',
        message: 'No certificate Found😞',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        certID,
      },
    });
    
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
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!cert) {
      res.status(400).json({
        status: 'Fail',
        message: 'No certificate Found😞',
      });
    }
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
    const deleteCertificate = await Certificate.findByIdAndDelete(req.params.id);
    if (!deleteCertificate) {
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


// **************** PUBLICATION HANDLER *****************

exports.getPublication = async (req, res) => {
  try {
    const publication = await Publication.find();
    res.status(200).json({
      status: 'success',
      results: publication.length,
      data: {
        publication: publication,
      },
    });
  } catch (err) {
    console.log(`Error❤️‍🔥: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to get publication😞.',
    });
  }
}
exports.createNewPublication = async (req, res) => {
  try {
    const newPublication = await Publication.create(req.body);
    res.status(200).json({
      status: 'success',
      message: 'Published papers added successfully👌',
      data: {
        Publication: newPublication,
      },
    });
  } catch (err) {
    console.log(`Error❤️‍🔥: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to create new Published papers😞.',
      error: `${err.name} ${err.message}`,
    });
  }
}
exports.getPublicationWithID = async (req, res) => {
  try {
    const publicationID = await Publication.findById(req.params.id);
    if (!publicationID) {
      res.status(400).json({
        status: 'Fail',
        message: 'No Publication Found😞',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        Publication: publicationID,
      },
    });
  } catch (err) {
    console.log(`Error❤️‍🔥: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to get published papers😞.',
      error: `${err.name} ${err.message}`,
    });
  }
}
exports.updatePublication = async (req, res) => {
  try {
    const pub = await Publication.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!pub) {
      res.status(400).json({
        status: 'Fail',
        message: 'No Publication Found😞',
      });
    }
    res.status(201).json({
      status: 'success',
      message: 'Publication updated.👌',
      data: {
        certificate: pub,
      },
    });
  } catch (err) {
    console.log(`Error❤️‍🔥: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to update Publication😞.',
    });
  }
}
exports.deletePublication = async (req, res) => {
  try {
    const pub= await Publication.findByIdAndDelete(req.params.id);
    if (!pub) {
      res.status(400).json({
        status: 'Fail',
        message: 'No Publication Found😞',
      });
    }

    res.status(204).json({
      status: 'success',
      message: 'Publication Deleted Successfully👍',
    });
  } catch (err) {
    console.log(`Error❤️‍🔥: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to delete Publication😞.',
      error: `${err.name} ${err.message}`,
    });
  }
}


// **************** PUBLICATION HANDLER *****************

exports.getPublication = async (req, res) => {
  try {
    const publication = await Publication.find();
    res.status(200).json({
      status: 'success',
      results: publication.length,
      data: {
        publication: publication,
      },
    });
  } catch (err) {
    console.log(`Error❤️‍🔥: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to get publication😞.',
    });
  }
}
exports.createNewPublication = async (req, res) => {
  try {
    const newPublication = await Publication.create(req.body);
    res.status(200).json({
      status: 'success',
      message: 'Published papers added successfully👌',
      data: {
        Publication: newPublication,
      },
    });
  } catch (err) {
    console.log(`Error❤️‍🔥: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to create new Published papers😞.',
      error: `${err.name} ${err.message}`,
    });
  }
}
exports.getPublicationWithID = async (req, res) => {
  try {
    const publicationID = await Publication.findById(req.params.id);
    if (!publicationID) {
      res.status(400).json({
        status: 'Fail',
        message: 'No Publication Found😞',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        Publication: publicationID,
      },
    });
  } catch (err) {
    console.log(`Error❤️‍🔥: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to get published papers😞.',
      error: `${err.name} ${err.message}`,
    });
  }
}
exports.updatePublication = async (req, res) => {
  try {
    const pub = await Publication.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!pub) {
      res.status(400).json({
        status: 'Fail',
        message: 'No Publication Found😞',
      });
    }
    res.status(201).json({
      status: 'success',
      message: 'Publication updated.👌',
      data: {
        certificate: pub,
      },
    });
  } catch (err) {
    console.log(`Error❤️‍🔥: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to update Publication😞.',
    });
  }
}
exports.deletePublication = async (req, res) => {
  try {
    const pub= await Publication.findByIdAndDelete(req.params.id);
    if (!pub) {
      res.status(400).json({
        status: 'Fail',
        message: 'No Publication Found😞',
      });
    }

    res.status(204).json({
      status: 'success',
      message: 'Publication Deleted Successfully👍',
    });
  } catch (err) {
    console.log(`Error❤️‍🔥: ${err}`);
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to delete Publication😞.',
      error: `${err.name} ${err.message}`,
    });
  }
}
