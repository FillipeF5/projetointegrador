const express = require('express');
const router = express.Router();
const controlladorCarrinho = require('../controllers/carrinhoController');


router.get('/', controlladorCarrinho.show)

router.post('/produtos/:id/addcarrinho', controlladorCarrinho.adicionar);
router.get('/produtos/:id/addcarrinho', controlladorCarrinho.store);

module.exportes = router;