const modelProdutos = require('../models/produtos');

const ControlladorProdutos = {
    index: (req, res) => {
        res.render('produtos');
    },
};

module.exports = ControlladorProdutos;