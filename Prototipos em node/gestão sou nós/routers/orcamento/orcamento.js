const express = require("express")
const router = express.Router()

router.get("/",(req, res)=>{
    res.send("Lista de orçamentos")
})

router.get("/cadastro",(req, res)=>{
    res.send("Cadastro de orçamento")
})

module.exports = router