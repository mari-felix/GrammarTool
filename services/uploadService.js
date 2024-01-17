//Recolhimento PDF
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

//Lógica a partir daqui: 
class UploadService {
    constructor(pdfModel) {
        this.pdfModel = pdfModel;
    }

    async processUpload(req) {
        try {
            const {originalName, buffer} = req.file;

            const newPDF = new this.pdfModel({
                filename: originalName,
                size: buffer.length,
                content: buffer
            })

            await newPDF.save()

            return "Upload bem-sucedido!"
        } catch(err) {
            console.error(err);
            throw new Error('Erro no upload')
        }
    }
}


module.exports = UploadService