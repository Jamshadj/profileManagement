const express = require("express");
const {
  addProfile,
  getAllProfiles,
  getProfileById,
} = require("../controllers/profileController");

const router = express.Router();

// Routes
router.post("/", addProfile);        // Add a new profile
router.get("/", getAllProfiles);    // Get all profiles
router.get("/:id", getProfileById); // Get a specific profile by ID

module.exports = router;
