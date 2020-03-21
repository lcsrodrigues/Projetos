const fs = require('fs')
const chalk = require('chalk')

var carro = {
    marca:"Citroen",
    modelo:"C3",
    ano:2015,
    cor:"branca"
}

console.log(carro)

var carroJSON = JSON.stringify(carro)
fs.writeFileSync('carro.json', `${carroJSON}`)

var rCarro = fs.readFileSync('carro.json')

console.log(rCarro.toString())

var dCarro = JSON.parse(rCarro)

dCarro.ano = 2020

console.log(dCarro)