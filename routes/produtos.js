const express = require('express');
const router = express.Router();
const ControlladorProdutos = require('../controllers/produtosController');


router.get('/', ControlladorProdutos.index)
router.get('/celulares', ControlladorProdutos.showAll)
router.get('/produtos/:id', ControlladorProdutos.showOne)

module.exports = router;