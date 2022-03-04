const modelProdutos = require('../models/produtos');
const { uuid } = require('uuidv4');
const fs = require('fs');


const ControlladorProdutos = {
    index: (req, res) => {
        let { id } = req.params;
        const produto = modelProdutos.find(produto => produto.id == id)

        res.render('produtos', { produto });
    },

    create: (req, res) => {
        let { title, color, price, polegadas, os, memoriasd, waterproof  } = req.body;

        modelProdutos.push( { id: uuid(), title, color, price, polegadas, os, memoriasd, waterproof });

        //escreve os dados no arquivo, passando o caminho como primeiro parametro, e converte o json em string no segundo parametro
        fs.writeFileSync(__dirname + '/../models/produtos.json' , JSON.stringify(modelProdutos));
        res.redirect('/dashboard/produtos');
    },
    
    edit: (req,res) => {
        let { id } = req.params;

        //metodo find percorre o json modelProdutos e localiza o item(produto) onde o id desse produto(produto.id) é identico ao id requisitado na params
        const produto = modelProdutos.find(produto => produto.id == id);
        
        res.render('editar', { produto });
    },

    update: (req,res) => {
        let { id } = req.params;
        let { title, color, price, polegadas, os, memoriasd, waterproof  } = req.body;
        //procurando o servico que esta sendo alterado
        const produto = modelProdutos.find(produto => produto.id == id);
        //atribuindo os novos valores
        produto.title = title;
        produto.color = color;
        produto.price = price;
        produto.polegadas = polegadas;
        produto.os = os;
        produto.memoriasd = memoriasd;
        produto.waterproof = waterproof;
        
        //reescrevendo-reenviando ao arquivo json os novos dados
        fs.writeFileSync(__dirname + '/../models/produtos.json' , JSON.stringify(modelProdutos));
        console.log(os);
        res.redirect('/dashboard/produtos');
    },

    destroy: (req, res) => {
        let { id } = req.params;

        const produto = modelProdutos.findIndex((produto) => produto.id === id);
        
        modelProdutos.splice(produto, 1);

        res.render('deleted');
    },

    show: (req, res) => {
        let { id } = req.params;
        const produto = modelProdutos.find(produto => produto.id == id)
        res.render('detalheProduto', { produto });
    }
};

module.exports = ControlladorProdutos;