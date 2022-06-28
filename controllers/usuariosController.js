const { Usuario } = require('../database/models');
const bcrypt = require('bcrypt');
// const { uuid } = require('uuidv4');
// const fs = require('fs');
// const path = require('path');

const ControllerUsuarios = {
    index: async (req, res) => {
        const usuarios = await Usuario.findAll();
    
        res.render("usuarios", { usuarios });
    },
    create: (req, res) => {
       
        res.render('register');

    },
    store: async (req, res) => {
        const { nome, sobrenome, email, nascimento, genero, avatar, password, passwordConfirm  } = req.body;
       
        if(password === passwordConfirm){
            await Usuario.create({
                nome,
                sobrenome,
                email,
                nascimento,
                genero,
                avatar,
                password: bcrypt.hashSync(password, 10)
            });
            res.render('login')
        }
    },
    visualizar: async (req, res) => {

        let { id } = req.params;
        const usuario = await Usuario.findByPk(id);

        return res.render('visualizar-cliente',  { usuario })
        
    }
};

module.exports = ControllerUsuarios;