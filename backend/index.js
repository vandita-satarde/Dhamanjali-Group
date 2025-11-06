import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import galleryRoutes from "./routes/galleryRoutes.js";

import martRoutes from "./routes/martRoutes.js";

dotenv.config();
const app = express();

// Configure CORS to allow requests from your frontend
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174', 
    'http://192.168.1.7:5174',
    'https://dhamanjali-group.vercel.app',
    'https://your-frontend-domain.vercel.app'  // Replace with your actual frontend domain
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Increase payload limits for file uploads
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use("/api/gallery", galleryRoutes);
app.use("/api/mart", martRoutes);

// Add a basic route for testing
app.get("/", (req, res) => {
  res.json({ message: "Backend API is running!" });
});

// For Vercel deployment
export default app;

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
