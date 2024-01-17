//Configuração para modelar PDF
const mongoose = require('mongoose');
const URI = '';

//Modelo para o PDF
const pdfSchema = new mongoose.Schema({
    filename: {
        type: String, 
        required: true 
    },
    size: {
        type: Number,
        required: true
    },
    uploadDate: {
        type: Date,
        default: Date.now
    },
    content: {
        type: Buffer,
        required: true
    }
});

const PDF = mongoose.model('PDF', pdfSchema);

module.exports = PDF;