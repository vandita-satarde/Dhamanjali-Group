import express from "express";
import { addMartItem, getMartItems } from "../controllers/martController.js";
import upload from "../middleware/multer.js"; // your Cloudinary + Multer setup

const router = express.Router();

router.post("/add", upload.single("image"), addMartItem);
router.get("/", getMartItems);

export default router;
