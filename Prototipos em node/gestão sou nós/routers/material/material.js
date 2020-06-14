const express = require("express")
const router = express.Router()

router.get("/",(req, res)=>{
    res.send("Lista de material")
})

router.get("/cadastro",(req, res)=>{
    res.send("Cadastro de material")
})

router.get("/edicao",(req, res)=>{
    res.send("Edição do material")
})

module.exports = router