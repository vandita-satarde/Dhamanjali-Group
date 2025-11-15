import express from "express";
import multer from "multer";
import { addMedicalDevice, getMedicalDevices, deleteMedicalDevice } from "../controllers/medicalDeviceController.js";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("image"), addMedicalDevice);
router.get("/", getMedicalDevices);
router.delete("/:id", deleteMedicalDevice);

export default router;
