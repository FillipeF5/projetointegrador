const { Produto } = require('../database/models');
// const { uuid } = require('uuidv4');
// const fs = require('fs');


const ControlladorProdutos = {
    index: async (req, res) => {
        let { id } = req.params;
        const produtos =  await Produto.findAll();

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
    edit: async (req,res) => {
        let { id } = req.params;

        const produto = await Produto.findByPk(id);
        
        return res.render('editar', { produto });
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