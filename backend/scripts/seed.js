// scripts/seed.js
require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const Profile = require("../models/Profile"); // Adjust path if necessary
const connectDB = require("../config/db");
// Read the sample data from the JSON file inside utils folder
const sampleData = JSON.parse(fs.readFileSync(path.join(__dirname, '../utils/sampleData.json')));

const seedDatabase = async () => {
  try {
    connectDB()
    await Profile.insertMany(sampleData);
    console.log("Database seeded successfully!");
    mongoose.disconnect();
  } catch (err) {
    console.error("Error seeding database:", err);
    mongoose.disconnect();
  }
};

seedDatabase();
