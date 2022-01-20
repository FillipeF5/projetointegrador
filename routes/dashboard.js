var express = require('express');
const controlladorDashboard = require('../controllers/dashboardController');
const router = express.Router();

/* GET dashboard painel */

router.get('/', controlladorDashboard.index);
router.get('/clientes', controlladorDashboard.clientes);

module.exports = router;