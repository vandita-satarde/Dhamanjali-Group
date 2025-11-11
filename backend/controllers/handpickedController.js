import HandpickedProject from "../models/handpickedModel.js";

// Add a new project
export const addHandpickedProject = async (req, res) => {
  try {
    const { name, plotArea, price, imageUrl, description, highlights } = req.body;
    const newProject = new HandpickedProject({
      name,
      plotArea,
      price,
      imageUrl,
      description,
      highlights,
    });
    await newProject.save();
    res.status(201).json({ success: true, data: newProject });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all projects
export const getHandpickedProjects = async (req, res) => {
  try {
    const projects = await HandpickedProject.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a project
export const updateHandpicked = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Handpicked.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: "Project not found" });
    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating project", error });
  }
};

// Delete a project
export const deleteHandpicked = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await HandpickedProject.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ success: false, message: "Project not found" });
    res.status(200).json({ success: true, message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting project", error });
  }
};