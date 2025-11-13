import express from "express";
import { submitContactForm, getAllContacts, updateRemark, deleteContact } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", submitContactForm); // For frontend form submission
router.get("/", getAllContacts); // For admin panel to view
router.put("/:id/remark", updateRemark);
router.delete("/:id", deleteContact);

export default router;
