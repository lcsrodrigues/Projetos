const Sequelize = require("sequelize")
const sequelize = new Sequelize("gestao_financeiro","sounos_dev","q1w2e3r4",{
    host:"localhost",
    dialect:"mysql"
})

sequelize.authenticate().then(()=>{
    console.log("Conectado ao bd com sucesso")
}).catch((err)=>{
    console.log("Ocorreu um erro ao se conectar com o bd "+err)
})

//Cria a tabela no banco de dados de acordo com o modelo
// Fornecedor.sync({force:true})

module.exports = sequelize