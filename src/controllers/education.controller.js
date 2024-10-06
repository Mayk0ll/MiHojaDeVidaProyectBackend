import { getAllEducationsQuery } from "../repositories/education.repository.js";

const getAllEducations = async (req, res) => {
    try {
        const educations = await getAllEducationsQuery();
        res.send(educations);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}


export { getAllEducations }