const { check } = require('express-validator');

const validate = [
    check('name')
        .notEmpty().withMessage('O campo nome deve ser preenchido').bail()
        .isLength({ min: 5 }).withMessage('O campo nome deve conter pelo menos 5 caracteres'),
    check('email')
        .notEmpty().withMessage('O campo email deve ser preenchido').bail()
        .isEmail().withMessage('O campo email deve conter um email válido'),
    check('password')
        .notEmpty().withMessage('O campo senha deve ser preenchido').bail()
        .isLength({ min: 8 }).withMessage('O campo senha deve conter pelo menos 8 caracteres'),
];

module.exports = validate;