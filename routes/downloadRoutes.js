// routes/downloadRoutes.js
const express = require('express');
const router = express.Router();
const PDFController = require('../controller/pdfController');


router
.get("/resultado/:filename", PDFController.handleDownload)
module.exports = router;