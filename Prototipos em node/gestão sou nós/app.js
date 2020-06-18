const express = require("express")
const app = express()
const path = require("path")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const home = require("./routers/home/home")
const material = require("./routers/material/material")
const orcamento = require("./routers/orcamento/orcamento")
const profissional = require("./routers/profissional/profissional")
const relatorio = require("./routers/relatorio/relatorio")
const tarefa = require("./routers/tarefa/tarefa")
const fornecedor = require("./routers/fornecedor/fornecedor")

app.engine("handlebars",handlebars({defaultLayout:"main"}))
app.set("view engine","handlebars")

app.use(express.static(path.join(__dirname,"assets")))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use("/",home)
app.use("/material",material)
app.use("/orcamento",orcamento)
app.use("/profissional",profissional)
app.use("/relatorio",relatorio)
app.use("/tarefa",tarefa)
app.use("/fornecedor",fornecedor)

app.listen(8081,()=>{
    console.log("Servidor online na porta 8081")
})