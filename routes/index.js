var express = require('express');
const ControlladorHome = require('../controllers/index.Controller');
const ControlladorProdutos = require('../controllers/produtosController');
var router = express.Router();

/* GET home page. */
router.get('/', ControlladorHome.index);
router.get('/fale-conosco', ControlladorHome.faleconosco)
router.get('/pagamento', ControlladorHome.pagamento);
router.get('/produto/:id', ControlladorProdutos.show);

module.exports = router;
