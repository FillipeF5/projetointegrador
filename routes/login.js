const express = require('express');
const ControlladorLogin = require('../controllers/loginController');
const router = express.Router();

router.get('/', ControlladorLogin.index)

module.exports = router;