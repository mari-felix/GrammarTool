// Configuração para montar as rotas 
const express = require('express');
const Pdf = require('../models/PdfModel');
const router = express.Router();

router
.get('/*', (req, res)=> {
    res.status(404).send("404: Pagina nao encontrada");
})
.get("/inicio", (req, res)=> {
    console.log("Inicio");
    res.send("Início \nInsira seu arquivo aqui:");

    //Pagina inicial
})
.post("/inicio", async(req, res)=> {
    console.log("Insercao DOC")
    try {    const newPDF = new Pdf({
            filename: req.body.filename,
            size: req.body.size
        })
    
        await newPDF.save();

        res.send("PDF enviado com sucesso!")
    } catch(err) {
        console.error("Erro ao criar usuario:", err);
        res.status(500).send("Erro interno do servidor")

    }
    //Logica para inserir o documento e fazer correções
})
.get("/resultado/:filename", (req, res)=> {
    console.log("Download")
    res.send("Faca download:")
    //Retorna o documento para o usuario
})

module.exports = router