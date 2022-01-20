
const controlladorDashboard = {
    index: (req, res) => {
        res.render('dashboard');
    },
    clientes: (req, res) => {
        res.render('clientes')
    }
};

module.exports = controlladorDashboard;