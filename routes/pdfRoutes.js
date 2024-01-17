// Configuração para montar as rotas 
const express = require('express');
const PDF = require('../models/pdfModel');
const router = express.Router();
const downloadPath = require('./downloadRoutes')
const uploadPath = require('./uploadRoute')

router.get('/*', (req, res)=> {
    res.status(404).send("404: Pagina nao encontrada");
})

router.use(downloadPath)
router.use(uploadPath)


module.exports = router