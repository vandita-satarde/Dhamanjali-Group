import FoodTestimonial from "../models/foodTestimonialModel.js";

// ➕ Create new testimonial
export const createFoodTestimonial = async (req, res) => {
  try {
    const { name, text } = req.body;
    const testimonial = new FoodTestimonial({ name, text });
    await testimonial.save();
    res.status(201).json({ message: "Testimonial added successfully", testimonial });
  } catch (error) {
    res.status(500).json({ message: "Failed to add testimonial", error });
  }
};

// 📜 Get all testimonials
export const getFoodTestimonials = async (req, res) => {
  try {
    const testimonials = await FoodTestimonial.find().sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch testimonials", error });
  }
};

// 🗑️ Delete testimonial
export const deleteFoodTestimonial = async (req, res) => {
  try {
    await FoodTestimonial.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete testimonial", error });
  }
};

// ✏️ Edit testimonial
export const updateFoodTestimonial = async (req, res) => {
  try {
    const { name, text } = req.body;
    const testimonial = await FoodTestimonial.findByIdAndUpdate(
      req.params.id,
      { name, text },
      { new: true }
    );
    res.status(200).json({ message: "Testimonial updated successfully", testimonial });
  } catch (error) {
    res.status(500).json({ message: "Failed to update testimonial", error });
  }
};
