const { Produto } = require('../database/models');
// const { uuid } = require('uuidv4');
// const fs = require('fs');


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
        const { title, color, price, tela, os, memoria, waterproof } = req.body;
        const produto = await Produto.create({
            title,
            color,
            price,
            tela,
            os,
            memoria,
            waterproof
        });
        return res.redirect('/dashboard/produtos')
    },
    edit: async (req, res) => {
        const { id } = req.params;
        const produto = await Produto.findByPk(id);

        res.render('editar',  { produto })
    },
    update: async (req, res) => {
        const { id } = req.params;
        const { title, color, price, tela, os, memoria, waterproof } = req.body;
        
        await Produto.update({ 
            title: title,
            color: color, 
            price: price, 
            tela: tela,
            os: os,
            memoria: memoria, 
            waterproof: waterproof }, { where: { id: id } });

        return res.redirect('editar');
    },
    delete: async (req, res) => {
        let { id } = req.params;

        const produto = await Produto.findByPk(id);

        produto.destroy();

        return res.render('deleted');
    },
    show: async (req, res) => {
        let { id } = req.params;
        const produto = await Produto.findByPk(id)
        return res.render('detalheProduto', { produto });
    }
};

module.exports = ControlladorProdutos;