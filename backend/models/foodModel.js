import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Food", foodSchema);
