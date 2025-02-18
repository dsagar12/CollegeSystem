import express from "express";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js"; 
import { protect } from "../middleware/authMiddleware.js"; 

dotenv.config();
const router = express.Router();

// Ensure JWT_SECRET is defined
if (!process.env.JWT_SECRET) {
  console.error("ERROR: JWT_SECRET is not set in the .env file");
  process.exit(1); // Stop server if secret is missing
}

// Register User
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!/^\d{4}[a-z]{3}\d{3}@sggs\.ac\.in$/.test(email)) {
        return res.status(400).json({ message: "Only SGGS college emails allowed" });
      }
      

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Login User
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Ensure JWT_SECRET is set
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ message: "JWT secret not configured" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role }, 
      process.env.JWT_SECRET, 
      { expiresIn: "1h" }
    );

    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get Logged-in User
router.get("/me", protect, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("-password"); // Exclude password
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  router.put("/update-profile", protect, async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.role = req.body.role || user.role;
  
      const updatedUser = await user.save();
      res.json({ message: "Profile updated successfully", user: updatedUser });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

export default router;
