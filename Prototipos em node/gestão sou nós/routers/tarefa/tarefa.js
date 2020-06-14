const express = require("express")
const router = express.Router()

router.get("/",(req, res)=>{
    res.send("Lista de tarefas")
})

router.get("/cadastro",(req, res)=>{
    res.send("Cadastro de tarefa")
})

router.get("/edicao",(req, res)=>{
    res.send("Edição do tarefa")
})

module.exports = router