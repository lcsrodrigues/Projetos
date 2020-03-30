const express = require('express')

const app = express()

app.get('/',(req, res)=>{
    res.send({
        nome:'Lucas',
        idade:25
    })
})

app.listen(3333)