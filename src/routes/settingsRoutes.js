import express from "express";
import { listSettings, createSetting, removeSetting, applySetting } from "../controllers/settingsController.js";

const router = express.Router();

router.get("/", listSettings);
router.post("/", createSetting);
router.delete("/:name", removeSetting);


router.post("/apply/:name", applySetting);

export default router;
