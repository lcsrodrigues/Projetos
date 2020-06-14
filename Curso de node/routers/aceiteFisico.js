const express = require("express")
const router = express.Router()

router.get("/registrar",(req,res)=>{
    res.render("registroAceiteFisico")
})

router.get("/consultar",(req, res)=>{
    res.send("consultar aceite fisico")
})

router.get("/anexar",(req,res)=>{
    res.send("anexar aceite fisico")
})

router.get("/relatorio",(req,res)=>{
    res.send("relatar aceite fisico")
})

module.exports = router;