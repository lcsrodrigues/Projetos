const express = require("express")
const router = express.Router()
const Fornecedor = require("../../models/Fornecedor")
const Material = require("../../models/Material")

router.get("/",(req, res)=>{

    var totalFornecedor = 0;
    var totalMaterial = 0;

    Fornecedor.count().then(total=>{
        totalFornecedor = total;
        Material.count().then(total =>{
            totalMaterial = total;
            res.render("home/index",{totalFornecedor:totalFornecedor, totalMaterial:totalMaterial})
        }).catch((err)=>{
            res.send("Ocorreu um erro "+err)
        })
    }).catch((err)=>{
        res.send("Ocorreu um erro "+err)
    })
})

module.exports = router