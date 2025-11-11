import FarmerStory from "../models/farmerStoryModel.js";

// POST - Add new story
export const addStory = async (req, res) => {
  try {
    const { name, role, quote, storyImg } = req.body;
    const newStory = new FarmerStory({ name, role, quote, storyImg });
    await newStory.save();
    res.status(201).json(newStory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET - Get all stories
export const getStories = async (req, res) => {
  try {
    const stories = await FarmerStory.find().sort({ createdAt: -1 });
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT - Update a story by ID
// ✅ PUT - Update story by ID
export const updateFarmerStory = async (req, res) => {
  try {
    const { name, role, quote, storyImg } = req.body;
    const updatedStory = await FarmerStory.findByIdAndUpdate(
      req.params.id,
      { name, role, quote, storyImg },
      { new: true }
    );
    res.status(200).json(updatedStory);
  } catch (error) {
    res.status(500).json({ message: "Error updating story", error });
  }
};


// DELETE - Delete a story by ID
export const deleteStories = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStory = await FarmerStory.findByIdAndDelete(id);
    if (!deletedStory) {
      return res.status(404).json({ message: "Story not found" });
    }
    res.status(200).json({ message: "Story deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};