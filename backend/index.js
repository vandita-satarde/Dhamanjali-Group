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

// MongoDB connection optimized for Vercel serverless
let isConnected = false;

const connectToDatabase = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      minPoolSize: 0,
      maxIdleTimeMS: 30000,
    });
    
    // Disable buffering for serverless
    mongoose.set('bufferCommands', false);
    
    isConnected = true;
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    throw error;
  }
};

// Connect to database
connectToDatabase();

// Middleware to ensure database connection on each API request
app.use('/api', async (req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (error) {
    console.error('Database connection middleware error:', error);
    return res.status(500).json({ 
      error: 'Database connection failed',
      message: 'Unable to connect to MongoDB. Please check your connection string and IP whitelist.'
    });
  }
});

app.use("/api/gallery", galleryRoutes);
app.use("/api/mart", martRoutes);

// Add health check routes
app.get("/", (req, res) => {
  res.json({ 
    message: "Backend API is running!",
    timestamp: new Date().toISOString(),
    status: "healthy"
  });
});

app.get("/api/health", async (req, res) => {
  try {
    await connectToDatabase();
    res.json({
      status: "healthy",
      database: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development"
    });
  } catch (error) {
    res.status(500).json({
      status: "unhealthy",
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// For Vercel deployment
export default app;

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
