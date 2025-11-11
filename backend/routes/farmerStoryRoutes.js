import express from "express";
import { addStory, getStories, updateFarmerStory, deleteStories } from "../controllers/farmerStoryController.js";

const router = express.Router();

router.post("/", addStory);
router.get("/", getStories);
router.put("/:id", updateFarmerStory);
router.delete("/:id", deleteStories);

export default router;
