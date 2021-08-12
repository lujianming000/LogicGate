import express from "express";

const router = express.Router();

// middleware
import { requireSignin, isInstructor } from "../middlewares";

// controllers
import { uploadImage, removeImage, create } from "../controllers/course";

router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);

router.post("/course", requireSignin, isInstructor, create);

module.exports = router;
