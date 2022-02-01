var express = require('express');
const controlladorDashboard = require('../controllers/dashboardController');
const ControlladorProdutos = require('../controllers/produtosController');
const ControlladorClientes = require('../controllers/clientesController');
const router = express.Router();

/* GET dashboard painel */

router.get('/', controlladorDashboard.index);
router.get('/produtos', ControlladorProdutos.index);
router.get('/clientes', ControlladorClientes.index);
router.post('/produtos/create', ControlladorProdutos.create);
router.get('/produtos/:id/editar', ControlladorProdutos.edit);
router.put('/produtos/:id/editar', ControlladorProdutos.update);

module.exports = router;