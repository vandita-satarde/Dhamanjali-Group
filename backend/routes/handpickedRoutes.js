import express from "express";
import {
  addHandpickedProject,
  getHandpickedProjects,
  updateHandpicked,
  deleteHandpicked,
} from "../controllers/handpickedController.js";

const router = express.Router();

router.post("/", addHandpickedProject);
router.get("/", getHandpickedProjects);
router.put("/:id", updateHandpicked);
router.delete("/:id", deleteHandpicked);

export default router;
