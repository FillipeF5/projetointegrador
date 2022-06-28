var express = require('express');
const controlladorDashboard = require('../controllers/dashboardController');
const ControlladorProdutos = require('../controllers/produtosController');
const ControllerUsuarios = require('../controllers/usuariosController');
const router = express.Router();


router.get('/', controlladorDashboard.index);
router.get('/produtos', ControlladorProdutos.index);
router.get('/usuarios', ControllerUsuarios.index);


router.get('/usuarios/:id/ver', ControllerUsuarios.visualizar);


router.get('/produtos/create', ControlladorProdutos.create);
router.post('/produtos/create', ControlladorProdutos.store);
router.get('/produtos/:id/editar', ControlladorProdutos.edit);
router.put('/produtos/:id/editar', ControlladorProdutos.update);
router.get('/produtos/:id/deletar', ControlladorProdutos.delete);


module.exports = router;