
const ControlladorLogin = {
    index: (req, res) => {
        res.render('login', { title: 'Login'  });
    },
};

module.exports = ControlladorLogin;