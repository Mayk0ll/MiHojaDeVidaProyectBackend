import Certificate from "../models/certificates.model.js";

const getAllCertificatesQuery = async () => Certificate.findAll();

const getCertificateByIdQuery = async (id) => await Certificate.findByPk(id);

const createCertificateQuery = async (certificateData) => Certificate.create(certificateData);

const updateCertificateQuery = async (id, certificateData) => Certificate.update(certificateData, { where: { id }});

const deleteCertificateQuery = async (id) => Certificate.destroy({ where: { id }});

export { getAllCertificatesQuery, getCertificateByIdQuery, createCertificateQuery, updateCertificateQuery, deleteCertificateQuery };