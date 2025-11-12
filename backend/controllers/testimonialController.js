import Testimonial from "../models/testimonialModel.js";

// ✅ Add a testimonial
export const addTestimonial = async (req, res) => {
  try {
    const { name, role, description, image } = req.body;

    const newTestimonial = new Testimonial({
      name,
      role,
      description,
      image,
    });

    await newTestimonial.save();
    res.status(201).json({ success: true, data: newTestimonial });
  } catch (error) {
    console.error("Error adding testimonial:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ✅ Get all testimonials
export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ _id: -1 });
    res.status(200).json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ✅ Delete a testimonial
export const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    await Testimonial.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Testimonial deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
