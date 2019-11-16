const Sequelize = require('sequelize');
const sequelize = new Sequelize('Teste' , 'root' , 'bandtec' , {
    host: 'localhost',
    dialect: 'mysql'
})

const postagem = sequelize.define('postagem', {
    titulo : {
        type: Sequelize.STRING('40')
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

usuario.create({
    nome: 'junior',
    idade: '18'
})

const usuario = sequelize.define('usuarios' , {
    nome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    }
})

module.exports = banco;

