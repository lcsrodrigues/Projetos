const express = require('express')
const User = require('../models/users')
const fs = require('fs')

const router = new express.Router()

router.post('/users', (req, res)=>{
    user = new User(req.body)

    try{
        console.log(req.body)
        // await user.save()
        fs.appendFileSync('todoList.json',`${JSON.stringify(user)}\n`)
        res.status(201).send(user)

    }catch(error){
        res.status(400).send(error)
    }
})

router.get('/users',(req, res)=>{
    const users = [ {name:'user1'},{name:'user2'}]
    res.status(200).send(users)
})

router.get('/users/:id',(req, res)=>{
    console.log(req.params.id)
    const users = [ {name:'user1'} ]
    res.status(200).send(users)
})

router.patch('/users/:id',(req, res)=>{
    res.send()
})

router.delete('/users/:id',(req, res)=>{
    res.send()
})

module.exports = [
    router
]