const express = require('express');
const ControlladorClientes = require('../controllers/ClienteController.js');
const ControlladorLogin = require('../controllers/loginController');
const validate = require('../middlewares/checkform');
const router = express.Router();

router.get('/', ControlladorLogin.index)

router.get('/register', ControlladorClientes.create)

router.post('/register', validate, ControlladorClientes.store);


module.exports = router;