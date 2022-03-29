const { Carrinho, Produto } = require('../database/models');

const controlladorCarrinho = {
    show: (req, res) => {
        const produto = await Produto.findAll();

        res.render('carrinho');
    },
    create: (req, res) => {
        
    },
    store: async (req, res) => {
        const { id  } = req.params;

        const carrinho = await Carrinho.create({
            id
        });
        return res.render('/carrinho')
    }
};

module.exports = controlladorCarrinho;