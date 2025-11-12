import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // Cloudinary image URL
});

const Testimonial = mongoose.model("Testimonial", testimonialSchema);
export default Testimonial;
