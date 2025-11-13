import healthTestimonial from "../models/healthTestimonialModel.js";

// ✅ Add new testimonial
export const addHealthTestimonial = async (req, res) => {
    try {
        const { name, text } = req.body;

        if (!name || !text) {
            return res.status(400).json({ message: "Name and text are required" });
        }

        const newTestimonial = new healthTestimonial({ name, text });
        await newTestimonial.save();

        res.status(201).json({ success: true, data: newTestimonial });
    } catch (error) {
        res.status(500).json({ message: "Error adding testimonial", error });
    }
};

// ✅ Get all testimonials
export const getHealthTestimonials = async (req, res) => {
    try {
        const testimonials = await healthTestimonial.find().sort({ _id: -1 });
        res.status(200).json(testimonials);
    } catch (error) {
        res.status(500).json({ message: "Error fetching testimonials", error });
    }
};

// ✅ UPDATE Testimonial
export const updateHealthTestimonial = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, text } = req.body;

        const updated = await healthTestimonial.findByIdAndUpdate(
            id,
            { name, text },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "Testimonial not found" });
        }

        res.status(200).json({ message: "Testimonial updated successfully", data: updated });
    } catch (error) {
        console.error("Error updating testimonial:", error);
        res.status(500).json({ message: "Server error while updating testimonial" });
    }
};

// ✅ Delete a testimonial (optional)
export const deleteHealthTestimonial = async (req, res) => {
    try {
        const { id } = req.params;
        await healthTestimonial.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Testimonial deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting testimonial", error });
    }
};
