const modelProdutos = require('../models/produtos');

const ControlladorHome = {
    index: (req, res) => {
        res.render('index', { produtos: modelProdutos });
    },
};

module.exports = ControlladorHome;