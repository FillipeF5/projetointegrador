const { Router } = require('express');
const router = Router();
const ControllerUsuarios = require('../controllers/usuariosController.js');

router.get('/usuarios', ControllerUsuarios.index);


module.exports = router;