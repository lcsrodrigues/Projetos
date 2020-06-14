const db = require("../config/connection")

const Fornecedor = db.define('fornecedor',{
    NOME:{
        type:db.Sequelize.STRING,
        require:true
    },
    AREA_ATUACAO:{
        type:db.Sequelize.STRING,
        require:true
    },
    OBSERVACAO:{
        type:db.Sequelize.STRING
    }
})

//Cria a tabela no mySQL
// Fornecedor.sync({force:true})

module.exports = Fornecedor