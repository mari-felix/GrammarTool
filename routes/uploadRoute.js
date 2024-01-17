const express = require('express');
const router = express.Router()
const upload = require('../services/uploadService')
const PDFController = require('../controller/pdfController');

router
.get("/inicio", (req, res)=> {
    console.log("Inicio");
    res.send("Início \nInsira seu arquivo aqui:");

    //Pagina inicial
})
.post('/inicio', upload.single('pdf'), PDFController.handleUpload);

module.exports = router;