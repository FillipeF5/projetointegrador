var express = require('express');
const ControlladorCarrinho = require('../controllers/carrinhoController');
var router = express.Router();
const ControlladorHome = require('../controllers/index.Controller');
const ControlladorProdutos = require('../controllers/produtosController');


/* GET home page. */
router.get('/', ControlladorHome.index);
router.get('/fale-conosco', ControlladorHome.faleconosco)
router.get('/pagamento', ControlladorHome.pagamento);
router.get('/produto/:id', ControlladorProdutos.showOne);
router.get('/carrinho', ControlladorCarrinho.show)

module.exports = router;
