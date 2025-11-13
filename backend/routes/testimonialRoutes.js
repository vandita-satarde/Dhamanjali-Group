import express from "express";
import {
  addTestimonial,
  getTestimonials,
  updateTestimonial,
  deleteTestimonial,
} from "../controllers/testimonialController.js";

const router = express.Router();

router.post("/", addTestimonial);
router.get("/", getTestimonials);
router.put("/:id", updateTestimonial);
router.delete("/:id", deleteTestimonial);

export default router;
