const { Cliente } = require('../database/models');
// const { uuid } = require('uuidv4');
// const fs = require('fs');
// const bcrypt = require('bcrypt');
// const path = require('path');

const ControlladorClientes = {
    index: async (req, res) => {
        const clientes = await Cliente.findAll();
    
        return res.render("clientes", { clientes });
    },
    create: (req, res) => {
        // const { nome, email, nascimento, genero, password, passwordConfirm  } = req.body;

                        
        // const users = { id: uuid(), nome, email, nascimento, genero, password: bcrypt.hashSync(password, 10) };

        

        res.render('register');

    },
    store: async (req, res) => {
        const { nome, email, nascimento, genero, password, passwordConfirm  } = req.body;

        const cliente = await Cliente.create({
            nome, 
            email, 
            nascimento,
            genero, 
            password
        });
        return res.redirect('/login')
    }
};

module.exports = ControlladorClientes;