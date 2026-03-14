const express = require("express");
const router = express.Router();

const {
  applyJob,
  getMyApplications,
  getApplicantsForJob,
  updateApplicationStatus
} = require("../controllers/applicationController");

const authMiddleware = require("../middleware/authMiddleware");

// Apply for job
router.post("/apply", authMiddleware, applyJob);

// Get my applications
router.get("/my", authMiddleware, getMyApplications);

// Get applicants for a job
router.get("/job/:jobId", authMiddleware, getApplicantsForJob);

// Update application status (recruiter)
router.patch("/:applicationId/status", authMiddleware, updateApplicationStatus);

module.exports = router;