const { Cliente } = require('./database/models');

Cliente.findAll().then(response => console.log(response));