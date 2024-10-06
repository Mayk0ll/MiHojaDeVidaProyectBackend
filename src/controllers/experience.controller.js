import { createExperienceQuery, deleteExperienceQuery, getAllExperiencesQuery, updateExperienceQuery } from "../repositories/experience.repository.js";

const getAllExperiences = async (req, res) => {
    try {
        const experiences = await getAllExperiencesQuery();
        res.send(experiences);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}

const createExperience = async (req, res) => {
    try {
        const experienceData = req.body;
        const newExperience = await createExperienceQuery(experienceData);
        res.send(newExperience);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}

const updateExperience = async (req, res) => {
    try {
        const id = req.params.id;
        const experienceData = req.body;
        await updateExperienceQuery(id, experienceData);
        res.send('Experience updated');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}

const deleteExperience = async (req, res) => {
    try {
        const id = req.params.id;
        await deleteExperienceQuery(id);
        res.send('Experience deleted');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}

export { getAllExperiences, createExperience, updateExperience, deleteExperience }