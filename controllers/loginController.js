const { Usuario } = require("../database/models")

const ControlladorLogin = {
    index: async (req, res) => {
        res.render('login', { title: 'Login'  });
    },
    register: async (req, res) => {
        res.render('register', { title: "Register" })
    },
    validacaoUsuario: async (req, res) => {
        const { email, password } = req.body;

        const usuario = await Usuario.findOne({ raw: true, where: { email: email } })

        if(!usuario){
            alert("Email e/ou senha incorreto(s) !!!")
        } 
        if(!password === usuario.password){
            alert("Email e/ou senha incorreto(s) !!!")
        }

        return res.redirect("/")
    }
};

module.exports = ControlladorLogin;