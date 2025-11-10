import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import galleryRoutes from "./routes/galleryRoutes.js";
import martRoutes from "./routes/martRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
import hospitalityRoutes from "./routes/HospitalityRoutes.js";


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
const connectToDatabase = async () => {
  // Check if already connected
  if (mongoose.connection.readyState === 1) {
    return;
  }

  // Check if connecting
  if (mongoose.connection.readyState === 2) {
    // Wait for the connection to complete
    return new Promise((resolve, reject) => {
      mongoose.connection.once('connected', resolve);
      mongoose.connection.once('error', reject);
    });
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000, // Increased timeout
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      minPoolSize: 0,
      maxIdleTimeMS: 30000,
    });
    
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    throw error;
  }
};

// Initial database connection (but don't block app startup)
connectToDatabase().catch(err => {
  console.error('Initial database connection failed:', err);
  // Don't throw here - let individual requests handle connection
});

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
app.use("/api/food", foodRoutes);
app.use("/api/hospitality", hospitalityRoutes);
  

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
