import express from "express";
import dotenv from "dotenv";


import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/authRoutes.js"; // ✅ Correct import

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);


const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection failed:", err));
