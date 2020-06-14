const express = require("express")
const app = express()
const aceiteFisico = require("./routers/aceiteFisico")
const handlebars = require("express-handlebars")
const path = require("path")

//Config
    //Template Engine
    app.engine('handlebars',handlebars({defaultLayout:'main'}))
    app.set('view engine','handlebars')
    app.use(express.static(path.join(__dirname,"assets")))

//Routers
    //Index
    app.get("/",(req,res)=>{
        res.render("index")
    })
    //Fornecedores
    app.use("/aceite-fisico",aceiteFisico)

//Outros
app.listen(8081,()=>{
    console.log("Servidor Online na porta 8081")
})