import { Router } from "express";
import { getAllEducations } from "../controllers/education.controller.js";

const router = Router();

router.get('/', getAllEducations);

export default router;