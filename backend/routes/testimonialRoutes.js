import express from "express";
import {
  addTestimonial,
  getTestimonials,
  deleteTestimonial,
} from "../controllers/testimonialController.js";

const router = express.Router();

router.post("/", addTestimonial);
router.get("/", getTestimonials);
router.delete("/:id", deleteTestimonial);

export default router;
