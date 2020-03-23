const express = require('express')
const userRouter = require('./routes/users')
require('./db/mongoose')

const app = express()

app.use(express.json())
app.use(userRouter)

app.listen('3000',(req, res)=>{
    console.log('servidor on na porta 3000')
})