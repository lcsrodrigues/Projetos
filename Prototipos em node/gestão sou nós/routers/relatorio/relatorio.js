const express = require("express")
const router = express.Router()

router.get("/",(req, res)=>{
    res.send("Lista de relatórios")
})

router.get("/cadastro",(req, res)=>{
    res.send("Cadastro de relatório")
})

module.exports = router