import express from "express";
import {
  addhospitalityImage,
  gethospitalityImages,
  updateHospitality,
  deletehospitalityImage,
} from "../controllers/HospitalityController.js";

const router = express.Router();

router.post("/", addhospitalityImage);
router.get("/", gethospitalityImages);
router.put("/:id", updateHospitality); 
router.delete("/:id", deletehospitalityImage);

export default router;
