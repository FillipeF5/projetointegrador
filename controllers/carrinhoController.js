const { Carrinho, Produto, Usuario, CarrinhoItem } = require('../database/models');
const { Op } = require("sequelize");
const session = require("express-session");

const ControlladorCarrinho = {
    show: async (req, res) => {
        var produtos = await Produto.findOne();

        res.render('carrinho', { produtos })
    },
    store: async (req, res) => {
        
        var cart = Carrinho.findOrCreate({
            where: { id: id },
            include: [{                                // include da model de Produtos
                model: Produto,
                as: 'produto'
            }] 
        })

        
        // const usuario_id = req.session.usuario.id;   //buscar o id da sessao e usuario

        // const carrinho = await CarrinhoItem.findAll({
        //     where: { usuario_id: usuario_id },          //carrinho cujo id do user é == id usuario sessao
        //     include: [{                                // include da model de Produtos
        //         model: Produto,
        //         as: 'produto'
        //     }]            
        // });
        
        res.render('carrinho', { cart });    
    },
    adicionar: async (req, res) => {
        const produto_id = req.params.id;
        const usuario_id = req.session.usuario.id;

        CarrinhoItem.findOne({
            where: { produto_id: produto_id, usuario_id: usuario_id }
        })

        res.render("carrinho")

    }
    
};

module.exports = ControlladorCarrinho;