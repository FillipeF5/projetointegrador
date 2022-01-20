var express = require('express');
const ControlladorHome = require('../controllers/index.Controller');
var router = express.Router();

/* GET home page. */
router.get('/', ControlladorHome.index);

module.exports = router;
