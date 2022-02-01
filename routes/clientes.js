const express = require('express');
const router = express.Router();
const ControlladorClientes = require('../controllers/clientesController');


/* GET clients listing. */
router.get('/clientes', ControlladorClientes.index);

module.exports = router;