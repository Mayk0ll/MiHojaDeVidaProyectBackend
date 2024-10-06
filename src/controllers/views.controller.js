import { getAllCertificatesQuery } from "../repositories/certificates.repository.js";
import { getAllEducationsQuery } from "../repositories/education.repository.js";
import { getAllExperiencesQuery } from "../repositories/experience.repository.js";

const getAllInformation = async (req, res) => {
    try {
        const experiences = await getAllExperiencesQuery();
        const certificates = await getAllCertificatesQuery();
        const educations = await getAllEducationsQuery();

        res.render('index', { experiences, certificates, educations });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}

export { getAllInformation }