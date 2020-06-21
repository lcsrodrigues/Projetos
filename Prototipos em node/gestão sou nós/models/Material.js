const db = require("../config/connection")

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
    },
    FORNECEDOR_ID:{
        type:db.Sequelize.INTEGER,
        references:{
            model:"fornecedors",
            key:"id"
        }
    },
    PAGAMENTO_ID:{
        type:db.Sequelize.INTEGER,
        references:{
            model:"pagamentos",
            key:"id"
        }
    }
})

//Material.sync({force:true})

module.exports = Material;

