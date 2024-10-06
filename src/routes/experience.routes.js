import { Router } from "express";
import { createExperience, deleteExperience, getAllExperiences, updateExperience } from "../controllers/experience.controller.js";

const router = Router();

router.get('/', getAllExperiences);

router.post('/', createExperience);

router.put('/:id', updateExperience);

router.delete('/:id', deleteExperience);

export default router;