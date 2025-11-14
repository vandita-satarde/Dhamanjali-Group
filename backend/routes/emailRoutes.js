import express from "express";
import { addEmail, getEmails } from "../controllers/emailController.js";

const router = express.Router();

// POST - add email
router.post("/", addEmail);

// GET - all emails (admin panel)
router.get("/", getEmails);

export default router;
