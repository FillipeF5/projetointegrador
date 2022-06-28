const { v4: uuid } = require('uuidv4');
const { Produto } = require('../database/models');

const ControlladorProdutos = {
    index: async (req, res) => {
        let { id } = req.params;
        const produtos = await Produto.findAll();

        return res.render('produtos', { produtos });
    },
    create: (req, res) => {
        res.redirect('/dashboard/produtos');
    },
    store: async (req, res) => {
        
        const { titulo, descricao, cor, preco, tela, os, memoria, provadagua } = req.body;
        const produto = await Produto.create({
            titulo,
            descricao,
            cor,
            preco,
            tela,
            os,
            memoria,
            provadagua
        });
        return res.redirect('/dashboard/produtos')
    },
    edit: async (req, res) => {
        const { id } = req.params;
        const produto = await Produto.findByPk(id);

        res.render({ produto }, 'editar')
    },
    update: async (req, res) => {
        const { id } = req.params;
        const { titulo, cor, preco, tela, os, memoria, descricao, provadagua } = req.body;
        
        await Produto.update({ 
            titulo: titulo,
            cor: cor, 
            preco: preco, 
            tela: tela,
            os: os,
            memoria: memoria,
            descricao: descricao,
            provadagua: provadagua }, 
            { where: { id: id } });

        return res.redirect('editar');
    },
    delete: async (req, res) => {
        let { id } = req.params;

        const produto = await Produto.findByPk(id);

        produto.destroy();

        return res.render('deleted');
    },
    showOne: async (req, res) => {
        let { id } = req.params;
        const produto = await Produto.findByPk(id)
        return res.render('detalheProduto', { produto });
    },
    showAll: async (req, res) => {
        const produtos = await Produto.findAll();

        return res.render('celulares', { produtos });
    },
};

module.exports = ControlladorProdutos;