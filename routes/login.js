const express = require('express');
const ControlladorClientes = require('../controllers/clientesController');
const ControlladorLogin = require('../controllers/loginController');
const validate = require('../middlewares/checkform');
const router = express.Router();

router.get('/', ControlladorLogin.index)

router.get('/register', ControlladorLogin.register)

router.post('/register', validate, ControlladorClientes.create);


module.exports = router;