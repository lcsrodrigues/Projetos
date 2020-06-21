const db = require("../config/connection")

const Pagamento = db.define("pagamento",{
    TIPO_PAGAMENTO:{
        type:db.Sequelize.STRING
    }
})

// Pagamento.sync({force:true})

module.exports = Pagamento

