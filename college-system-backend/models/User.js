const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    match: [/.+@college\.edu$/, "Only college emails allowed"]
  },
  password: { type: String, required: true },
  role: { type: String, enum: ["student", "faculty", "admin"], default: "student" }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
