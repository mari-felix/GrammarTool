//Configuração para modelar PDF
const mongoose = require('mongoose');

//Modelo para o PDF
const pdfSchema = new mongoose.Schema({
    filename: Document,
    size: Number,
});

const Pdf = mongoose.model('PDF', pdfSchema);

module.exports = Pdf;