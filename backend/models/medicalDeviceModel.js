import mongoose from "mongoose";

const medicalDeviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  deviceName: { type: String, required: true },
  deviceDescription: { type: String, required: true },
  features: { type: [String], required: true },
  imageUrl: { type: String, required: true }
});

export default mongoose.model("MedicalDevice", medicalDeviceSchema);
