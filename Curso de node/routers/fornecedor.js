const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("Listar Fornecedores")
})

router.get("/cadastro",(req, res)=>{
    res.send("Cadastrar Fornecedores")
})

router.get("/editar",(req,res)=>{
    res.send("Editar Fornecedores")
})

module.exports = router;