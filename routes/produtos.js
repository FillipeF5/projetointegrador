const express = require('express');
const ControlladorProdutos = require('../controllers/produtosController');
const router = express.Router();

router.get('/', ControlladorProdutos.index)

module.exports = router;