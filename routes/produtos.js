const express = require('express');
const ControlladorProdutos = require('../controllers/produtosController');
const router = express.Router();

router.get('/', ControlladorProdutos.index)
router.get('/produtos/delete/:id',ControlladorProdutos.delete)


module.exports = router;