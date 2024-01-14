const mongoose = require('mongoose');

//Modelo para o PSF
const pdfSchema = new mongoose.Schema({
    filename: Document,
    size: Number,
});

const Pdf = mongoose.model('PDF', pdfSchema);

module.exports = Pdf;