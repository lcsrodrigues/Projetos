const path = require('path')
const express = require('express')
const chalk = require('chalk')
const hbs = require('hbs') // handlebars (hbs) é uma view engine para o projeto

const app = express()

const directoryPublicPath = path.join(__dirname,'/public') //define um diretório publico onde as páginas serão acessadas
const viewsPath = path.join(__dirname,'/templates/views') // define o local de onde as views serão carregas
const partialsPath = path.join(__dirname,'/templates/partials') // define o local de onde as partials serão carregas

app.set('view engine', 'hbs') // configura a view engine do projeto pra hbs
app.set('views',viewsPath) // configura o local de onde as views serão carregadas
hbs.registerPartials(partialsPath) // registra as o local de onde as partials serão carregadas

app.use(express.static(directoryPublicPath))

app.get('',(req, res)=>{
    res.render('index')
})

app.get('/listaAvaliacoes',(req, res)=>{
    res.render('listaAvaliacoes',{
      nome:'Lucas Rosa Rodrigues'  
    })
})

app.get('/cadastroFornecedor',(req, res)=>{
    res.render('cadastroFornecedor')
})

app.get('*',(req,res)=>{
    res.render('error',{
    errorMensage : 'Ocorreu um erro'
    })
})

console.log(directoryPublicPath)

app.listen('3000',()=>{
    console.log( chalk.green.bold('Servidor online na porta 3000'))
})