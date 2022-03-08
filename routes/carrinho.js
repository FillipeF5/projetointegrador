const express = require('express');
const controlladorCarrinho = require('../controllers/carrinhoController');
const router = express.Router();


router.get('/', controlladorCarrinho.show)

module.exportes = router;