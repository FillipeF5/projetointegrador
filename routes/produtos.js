const express = require('express');
const router = express.Router();
const ControlladorProdutos = require('../controllers/produtosController');


router.get('/', ControlladorProdutos.index)

module.exports = router;