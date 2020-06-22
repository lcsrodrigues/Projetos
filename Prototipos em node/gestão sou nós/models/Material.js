const db = require("../config/connection")
const Pagamento = require("../models/Pagamento")
const Fornecedor = require("../models/Fornecedor")

const Material = db.define("material",{
    NOME:{
        type:db.Sequelize.STRING,
        require:true
    },
    QUANTIDADE:{
        type:db.Sequelize.INTEGER,
        require:true,
        defaultValue:1
    },
    PRECO:{
        type:db.Sequelize.FLOAT,
        require:true
    },
    QTD_PARCELA:{
        type:db.Sequelize.INTEGER
    },
    DATA_COMPRA:{
        type:db.Sequelize.DATE
    },
    OBSERVACOES:{
        type:db.Sequelize.STRING
    }
})

Material.belongsTo(Fornecedor,{as: "fornecedor",foreignKey:"FORNECEDOR_ID"})
Material.belongsTo(Pagamento,{as: "pagamento",foreignKey:"PAGAMENTO_ID"})
//Material.sync({force:true})

module.exports = Material;

