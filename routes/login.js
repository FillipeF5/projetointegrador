const express = require('express');
const ControllerUsuarios = require('../controllers/usuariosController.js');
const ControlladorLogin = require('../controllers/loginController');
const validate = require('../middlewares/checkform');
const router = express.Router();
const upload = require('../middlewares/multer.js');

router.get('/', ControlladorLogin.index);

router.get('/register', ControllerUsuarios.create);

router.post('/register', upload.single('avatar'), validate,  ControllerUsuarios.store);

router.post('/logincliente', ControlladorLogin.validacaoUsuario);

module.exports = router;