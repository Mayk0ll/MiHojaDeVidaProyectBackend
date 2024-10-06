import Education from "../models/education.model.js"

const getAllEducationsQuery = async () => {
    return Education.findAll();
}

export { getAllEducationsQuery }