import { createCertificateQuery, deleteCertificateQuery, getAllCertificatesQuery, getCertificateByIdQuery, updateCertificateQuery } from "../repositories/certificates.repository.js";

const getAllCertificates = async (req, res) => {
    try {
        const certificates = await getAllCertificatesQuery();
        res.send(certificates);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}

const getCertificateById = async(req, res) => {
    try {
        const certificate = await getCertificateByIdQuery(req.params.id);
        res.send(certificate)
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}

const createCertificate = async(req, res) => {
    try {
        const {} = req.body;
        const certificate = await createCertificateQuery({});
        res.send(certificate)
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}

const updateCertificate = async(req, res) => {
    try {
        const {} = req.body;
        const certificate = await updateCertificateQuery(req.params.id, {});
        res.send(certificate)
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}

const deleteCertificate = async(req, res) => {
    try {
        const certificate = await deleteCertificateQuery(req.params.id);
        res.send(certificate)
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}

export { getAllCertificates, getCertificateById, createCertificate, updateCertificate, deleteCertificate }