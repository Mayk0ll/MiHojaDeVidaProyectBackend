import { Router } from "express";
import { createCertificate, deleteCertificate, getAllCertificates, getCertificateById, updateCertificate } from "../controllers/certificates.controller.js";

const router = Router();

router.get('/', getAllCertificates)

router.get('/:id', getCertificateById)

router.post('/', createCertificate)

router.put('/:id', updateCertificate)

router.delete('/:id', deleteCertificate)

export default router;