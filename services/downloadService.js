const mongoose = require('mongoose');
const PDF = require('../models/pdfModel');

class ReturnService {
    constructor(pdfModel) {
        this.pdfModel = pdfModel
    }

    async getPDFbyFilename(pdfFilename) {
        try {
            const pdf = await this.pdfModel.findbyFilename(pdfFilename);

            if (!pdf) {
                throw new Error('PDF não encontrado')
            }

            return pdf;
        } catch(err) {
            throw new Error('Erro ao obter o PDF')
        }
    }
}

module.exports = ReturnService