import express from "express";
import multer from "multer";
import { addGalleryImage, getGalleryImages, deleteGalleryImage } from "../controllers/galleryController.js";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to upload image
router.post("/add", upload.single("image"), addGalleryImage);

// Route to get all images
router.get("/", getGalleryImages);

router.delete("/:id", deleteGalleryImage); 

export default router;
