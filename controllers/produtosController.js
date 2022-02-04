const modelProdutos = require('../models/produtos');

const ControlladorProdutos = {
    index: (req, res) => {
        res.render('produtos', { produtos: modelProdutos  });
    },
};

module.exports = ControlladorProdutos;