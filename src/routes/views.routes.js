import { Router } from "express";
import { getAllInformation } from "../controllers/views.controller.js";

const router = Router();

router.get('/profile', getAllInformation);

export default router;