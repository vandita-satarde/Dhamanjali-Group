import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import galleryRoutes from "./routes/galleryRoutes.js";

import martRoutes from "./routes/martRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use("/api/gallery", galleryRoutes);
app.use("/api/mart", martRoutes)

app.listen(5000, () => console.log("Server running on port 5000"));
