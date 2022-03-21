const { Router } = require('express');
const router = Router();
const ControlladorClientes = require('../controllers/ClienteController.js');


/* GET clients listing. */
router.get('/clientes', ControlladorClientes.index);

module.exports = router;