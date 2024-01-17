//Configuração para processamento PDF
const PDF = require('../models/pdfModel');
const UploadService = require('../services/uploadService');
const ReturnService = require('../services/returnService');

const uploadService = new UploadService(PDF);
const returnService = new ReturnService(PDF);

class PDFController {
    async handleUpload(req, res){
        try {
            const resultado = await uploadService.processUpload(req)
            res.send(resultado)
        } catch(err) {
            console.error(err);
            res.status(500).send('Erro no upload');
        }
    }

    async handleDownload(req, res) {
        try {
            const pdfFilename = req.params.filename;
    
            const pdf = await returnService.getPDFbyFilename(pdfFilename);
    
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename=${pdf.filename}`)
    
            res.send(pdf.content)
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Erro ao obter PDF');

        }
    }
}


module.exports = new PDFController();