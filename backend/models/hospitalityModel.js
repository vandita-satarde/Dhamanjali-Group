import mongoose from "mongoose";

const hospitalitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Deluxe Rooms", "Suite Rooms", "Presidential"], // fixed categories
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Hospitality", hospitalitySchema);