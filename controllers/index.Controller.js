const { Produto } = require('../database/models');

const ControlladorHome = {
    index: async (req, res) => {
        
        const produtos = await Produto.findAll();

        return res.render('index', { produtos });
    },

    faleconosco: (req, res) => {
        res.render('faleconosco', {title : 'Fale conosco'});
    },
    
    pagamento: (req, res) => {
        res.render('pagamento', {title : 'Pagamento'});
    },
};

module.exports = ControlladorHome;