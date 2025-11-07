import express from "express";
import { createFoodItem, getFoodItems, deleteFoodItem, updateFoodItem } from "../controllers/foodController.js";

const router = express.Router();

router.post("/", createFoodItem);
router.get("/", getFoodItems);
router.delete("/:id", deleteFoodItem);
router.put("/:id", updateFoodItem);

export default router;
