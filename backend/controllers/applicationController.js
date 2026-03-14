const Application = require("../models/Application");

// APPLY FOR JOB
exports.applyJob = async (req, res) => {
  try {
    const { jobId } = req.body;

    const application = await Application.create({
      job: jobId,
      applicant: req.user.id
    });

    res.status(201).json(application);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET MY APPLICATIONS
exports.getMyApplications = async (req, res) => {
  try {

    const applications = await Application.find({
      applicant: req.user.id
    }).populate("job");

    res.json(applications);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET APPLICANTS FOR A JOB
exports.getApplicantsForJob = async (req, res) => {
  try {

    const { jobId } = req.params;

    const applications = await Application.find({
      job: jobId
    })
      .populate("applicant", "name email")
      .populate("job");

    res.json(applications);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// UPDATE APPLICATION STATUS
exports.updateApplicationStatus = async (req, res) => {
  try {

    const { status } = req.body;

    const application = await Application.findByIdAndUpdate(
      req.params.applicationId,
      { status },
      { new: true }
    );

    res.json(application);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};