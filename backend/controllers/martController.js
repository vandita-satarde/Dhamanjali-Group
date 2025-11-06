import Mart from "../models/mardModel.js";
import cloudinary from "../config/cloudinary.js";

export const addMartItem = async (req, res) => {
  try {
    console.log("Received request body:", req.body);
    console.log("Received file:", req.file);

    // Validate input
    if (!req.body.title || !req.body.description) {
      console.log("Missing required fields");
      return res.status(400).json({ 
        message: "Title and description are required",
        receivedData: { body: req.body, file: req.file ? 'Present' : 'Missing' }
      });
    }

    const { title, description } = req.body;
    const file = req.file;
    
    if (!file) {
      console.log("No file received");
      return res.status(400).json({ message: "Image is required" });
    }

    console.log("Starting Cloudinary upload");
    
    // Upload directly from buffer using the same pattern as gallery
    const uploadStream = cloudinary.uploader.upload_stream(
      { 
        folder: "Dhamanjali-mart",
        resource_type: "auto"
      },
      async (error, result) => {
        if (error) {
          console.error("Cloudinary upload error:", error);
          return res.status(500).json({ 
            message: "Error uploading image",
            error: error.message 
          });
        }

        console.log("Cloudinary upload successful:", result);

        try {
          // Save in MongoDB
          const newItem = new Mart({
            title,
            description,
            imageUrl: result.secure_url,
            public_id: result.public_id,
          });

          console.log("Saving to MongoDB:", newItem);
          await newItem.save();
          console.log("Successfully saved to MongoDB");
          
          res.status(201).json({ 
            message: "Mart item added successfully", 
            item: newItem 
          });
        } catch (dbError) {
          console.error("Database error:", dbError);
          return res.status(500).json({ 
            message: "Error saving to database",
            error: dbError.message 
          });
        }
      }
    );

    // Pipe buffer to upload stream
    console.log("Piping file buffer to upload stream");
    uploadStream.end(file.buffer);
    
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ 
      message: "Server error occurred",
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

export const getMartItems = async (req, res) => {
  try {
    const items = await Mart.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
