const modelProdutos = require('../models/produtos');
const { uuid } = require('uuidv4');

const ControlladorProdutos = {
    index: (req, res) => {
        res.render('produtos', { produtos: modelProdutos });
    },
};

module.exports = ControlladorProdutos;