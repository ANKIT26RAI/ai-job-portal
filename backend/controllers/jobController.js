const Job = require("../models/Job");

// CREATE JOB
exports.createJob = async (req, res) => {
  try {

    const { title, company, location, description, salary } = req.body;

    const job = await Job.create({
      title,
      company,
      location,
      description,
      salary,
      postedBy: req.user.id
    });

    res.status(201).json(job);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET ALL JOBS
exports.getJobs = async (req, res) => {
  try {

    const jobs = await Job.find().populate("postedBy", "name email");

    res.json(jobs);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};