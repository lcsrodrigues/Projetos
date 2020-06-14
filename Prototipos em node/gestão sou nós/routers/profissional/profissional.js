const express = require("express")
const router = express.Router()

router.get("/",(req, res)=>{
    res.send("Lista de profissionais")
})

router.get("/cadastro",(req, res)=>{
    res.send("Cadastro do profissional")
})

router.get("/edicao",(req, res)=>{
    res.send("Edição do profissional")
})

module.exports = router