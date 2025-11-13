import express from "express";
import {
  createFoodTestimonial,
  getFoodTestimonials,
  deleteFoodTestimonial,
  updateFoodTestimonial,
} from "../controllers/foodTestimonialController.js";

const router = express.Router();

router.post("/", createFoodTestimonial);
router.get("/", getFoodTestimonials);
router.delete("/:id", deleteFoodTestimonial);
router.put("/:id", updateFoodTestimonial);

export default router;
