const { Carrinho, Produto, Cliente } = require('../database/models');

const controlladorCarrinho = {
    show: (req, res) => {
        const produto = await Produto.findAll();

        res.render('carrinho');
    },
    store: async (req, res) => {
        const { id  } = req.session;   //buscar o id da sessao e usuario

        const carrinho = await Carrinho.findOne({
            where: { cliente_id:id }            //carrinho cujo id do cliente é == id usuario sessao
        });
        let idProduto = req.params.id;
        await carrinho.addCartItem({ produto_id:idProduto, quantidade:0})   //idProduto: id req params

        return res.redirect('/carrinho', { carrinho })
    }
};

module.exports = controlladorCarrinho;