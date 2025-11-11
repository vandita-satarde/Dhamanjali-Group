import mongoose from "mongoose";

const farmerStorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  quote: { type: String, required: true },
  storyImg: { type: String, required: true }, // Cloudinary URL
}, { timestamps: true });

const FarmerStory = mongoose.model("FarmerStory", farmerStorySchema);
export default FarmerStory;
