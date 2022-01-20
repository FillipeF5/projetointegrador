const modelClientes = require('../models/clientes');

const ControlladorClientes = {
    index: (req, res) => {
        res.render('clientes', { clientes: modelClientes  });
    },
};

module.exports = ControlladorClientes;