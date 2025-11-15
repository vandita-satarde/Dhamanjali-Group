import MedicalDevice from "../models/medicalDeviceModel.js";
import cloudinary from "../config/cloudinary.js";

export const addMedicalDevice = async (req, res) => {
  try {
    const { title, description, deviceName, deviceDescription, features } = req.body;
    const file = req.file;
    
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Upload to Cloudinary
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "Dhamanjali" },
      async (error, result) => {
        if (error) {
          console.error("Cloudinary upload error:", error);
          return res.status(500).json({ error });
        }

        try {
          const newDevice = new MedicalDevice({
            title,
            description,
            deviceName,
            deviceDescription,
            features: JSON.parse(features),
            imageUrl: result.secure_url
          });

          await newDevice.save();
          res.status(201).json({ success: true, data: newDevice });
        } catch (error) {
          console.error("Database save error:", error);
          res.status(500).json({ error: error.message });
        }
      }
    );

    uploadStream.end(file.buffer);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: error.message });
  }
};

export const getMedicalDevices = async (req, res) => {
  try {
    const devices = await MedicalDevice.find();
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMedicalDevice = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDevice = await MedicalDevice.findByIdAndDelete(id);
    
    if (!deletedDevice) {
      return res.status(404).json({ message: "Medical device not found" });
    }
    
    res.status(200).json({ message: "Medical device deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
