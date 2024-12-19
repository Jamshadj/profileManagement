const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    pronouns: { type: String, required: true },
    about: { type: String, required: true },
    professionalSummary: { type: String, required: true },
    virtualResumeLink: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);
