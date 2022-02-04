
const controlladorDashboard = {
    index: (req, res) => {
        res.render('dashboard');
    },
    clientes: (req, res) => {
        res.render('clientes');
    },
    produtos: (req, res) => {
        res.render('produtos');
}
};
module.exports = controlladorDashboard;