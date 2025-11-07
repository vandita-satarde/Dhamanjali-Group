import Food from "../models/foodModel.js";

// Upload new food item
export const createFoodItem = async (req, res) => {
  console.log("Received data:", req.body);
  try {
    const { title, subtitle, description, image } = req.body;
    const foodItem = new Food({ title, subtitle, description, image });
    await foodItem.save();
    res.status(201).json({ message: "Food item uploaded successfully"});
  } catch (error) {
    res.status(500).json({ message: "Failed to upload food item", error });
  }
};

// Get all food items
export const getFoodItems = async (req, res) => {
  try {
    const foodItems = await Food.find().sort({ createdAt: -1 });
    res.status(200).json(foodItems);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch food items", error });
  }
};

// Delete food item
export const deleteFoodItem = async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Food item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete food item", error });
  }
};

// Update food item
export const updateFoodItem = async (req, res) => {
  try {
    const { title, subtitle, description, image } = req.body;
    const updatedFood = await Food.findByIdAndUpdate(
      req.params.id,
      { title, subtitle, description, image },
      { new: true }
    );
    res.status(200).json(updatedFood);
  }catch (error) {
    res.status(500).json({ message: "Failed to update food item", error });
  }
}
