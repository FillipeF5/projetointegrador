const express = require('express');
const router = express.Router();
const controlladorCarrinho = require('../controllers/carrinhoController');


router.get('/', controlladorCarrinho.show)

router.get('/produtos/:id/addcarrinho', controlladorCarrinho.create);
router.post('/produtos/:id/addcarrinho', controlladorCarrinho.store);

module.exportes = router;