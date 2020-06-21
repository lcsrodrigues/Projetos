const express = require("express")
const router = express.Router()
const Material = require("../../models/Material")

router.get("/",(req, res)=>{

    Material.findAll().then((material)=>{
        console.log(Material)
        res.send(material)
    }).catch((err)=>{
        res.send("Ocorreu um erro "+err)
    })

    res.send("Lista de material")
})

router.post("/novo",(req, res)=>{
    Material.create({
        
        NOME:"Prego",
        QUANTIDADE:200,
        PRECO:19.90,
        QTD_PARCELA:2,
        DATA_COMPRA:"2020-06-21T01:17:56.995Z",
        OBSERVACOES:"Lorem Ipsum Dolor Sit Amet",
        FORNECEDOR_ID:19,
        PAGAMENTO_ID:3
    }).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})

router.get("/edicao",(req, res)=>{
    res.send("Edição do material")
})

module.exports = router