import Experience from "../models/experience.model.js";

const getAllExperiencesQuery = async () => Experience.findAll({limit: 3, order: [['id', 'DESC']], raw: true});

const createExperienceQuery = async (experienceData) => Experience.create(experienceData);

const updateExperienceQuery = async (id, experienceData) => Experience.update(experienceData, { where: { id }});

const deleteExperienceQuery = async (id) => Experience.destroy({ where: { id }});

export { getAllExperiencesQuery, createExperienceQuery, updateExperienceQuery, deleteExperienceQuery };