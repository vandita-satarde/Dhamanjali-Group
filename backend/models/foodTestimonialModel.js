import mongoose from "mongoose";

const foodTestimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const FoodTestimonial = mongoose.model("FoodTestimonial", foodTestimonialSchema);

export default FoodTestimonial;
