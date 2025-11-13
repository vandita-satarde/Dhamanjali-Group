import express from "express";
import {
  addHealthTestimonial,
  getHealthTestimonials,
  updateHealthTestimonial,
  deleteHealthTestimonial,
} from "../controllers/healthTestimonialController.js";

const router = express.Router();

router.post("/", addHealthTestimonial);
router.get("/", getHealthTestimonials);
router.put("/:id", updateHealthTestimonial);
router.delete("/:id", deleteHealthTestimonial);

export default router;
