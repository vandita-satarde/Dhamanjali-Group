import hospitality from "../models/hospitalityModel.js";

// POST - Add new image
export const addhospitalityImage = async (req, res) => {
  try {
    const { title, category, image } = req.body;

    const newImage = new hospitality({ title, category, image });
    await newImage.save();

    res.status(201).json({ success: true, data: newImage });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET - Fetch all images
export const gethospitalityImages = async (req, res) => {
  try {
    const images = await hospitality.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// PUT - Update existing image
export const updateHospitality = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedItem = await hospitality.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: false,
    });

    if (!updatedItem) {
      return res.status(404).json({ message: "Hospitality item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    console.error("Error updating hospitality:", error);
    res.status(500).json({ message: error.message });
  }
};


// DELETE (optional)
export const deletehospitalityImage = async (req, res) => {
  try {
    await hospitality.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Image deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
