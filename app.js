const express = require('express');
const multer = require('multer');
const pdf2json = require('pdf2json');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require("./routes/routes")

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(router)

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storage})

app.get('/', (req, res)=> {
    res.send("Hello world! Eu sou o GrammarTool!")
})

app.listen(PORT, ()=> {
    console.log("Servidor conectado a porta ", PORT);
})