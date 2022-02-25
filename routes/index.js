var express = require('express');
const ControlladorHome = require('../controllers/index.Controller');
var router = express.Router();

/* GET home page. */
router.get('/', ControlladorHome.index);
router.get('/fale-conosco', ControlladorHome.faleconosco)
router.get('/pagamento', ControlladorHome.pagamento);

module.exports = router;
