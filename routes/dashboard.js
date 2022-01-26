var express = require('express');
const controlladorDashboard = require('../controllers/dashboardController');
const ControlladorProdutos = require('../controllers/produtosController');
const router = express.Router();

/* GET dashboard painel */

router.get('/', controlladorDashboard.index);


module.exports = router;