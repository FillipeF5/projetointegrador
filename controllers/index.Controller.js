const modelProdutos = require('../models/produtos');

const ControlladorHome = {
    index: (req, res) => {
        res.render('index', { produtos: modelProdutos });
    },
    faleconosco: (req, res) => {
        res.render('faleconosco', {title : 'Fale conosco'});
    },
    pagamento: (req, res) => {
        res.render('pagamento', {title : 'Pagamento'});
    },
};

module.exports = ControlladorHome;