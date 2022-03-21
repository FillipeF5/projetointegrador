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

        // if(password !== passwordConfirm) {
        //     return res.render('register', { erro: 'As senhas não coincidem' });
        // };

        
        // if(modelClientes.some(cliente => cliente.email === email)) {
        //     return res.render('register', { erro: 'Email já cadastrado' });
        // };
                
        // const users = { id: uuid(), nome, email, nascimento, genero, password: bcrypt.hashSync(password, 10) };

        // modelClientes.push(users);
        // fs.writeFileSync(__dirname + '/../models/clientes.json' , JSON.stringify(modelClientes));

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