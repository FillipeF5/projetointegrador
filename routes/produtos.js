const express = require('express');
const router = express.Router();
const ControlladorProdutos = require('../controllers/produtosController');


router.get('/', ControlladorProdutos.index)
router.get('/produtos/delete/:id',ControlladorProdutos.delete)


module.exports = router;