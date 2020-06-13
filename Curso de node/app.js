const express = require("express")
const app = express()
const fornecedor = require("./routers/fornecedor")
const handblebars = require("express-handlebars")

//Config
    //Template Engine
    app.engine('handblebars',handblebars({defaultLayout:'main'}))
    app.set('view engine','handlebars')

app.use("/fornecedor",fornecedor)

//Outros
app.listen(8081,()=>{
    console.log("Servidor Online na porta 8081")
})