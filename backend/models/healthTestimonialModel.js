import mongoose from "mongoose";

const healthTestimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  text: {
    type: String,
    required: true,
    trim: true,
  },
});

const healthTestimonial = mongoose.model("healthTestimonial", healthTestimonialSchema);

export default healthTestimonial;
