const Profile = require("../models/Profile");

// Add a new profile
const addProfile = async (req, res) => {
  try {    
    const profile = await Profile.create(req.body);
    res.status(201).json({ success: true, data: profile });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all profiles
const getAllProfiles = async (req, res) => {
  try {
      const profiles = await Profile.find();
    res.status(200).json({ success: true, data: profiles });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single profile by ID
const getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({ success: false, message: "Profile not found" });
    }
    res.status(200).json({ success: true, data: profile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  addProfile,
  getAllProfiles,
  getProfileById,
};
