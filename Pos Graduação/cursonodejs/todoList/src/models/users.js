const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User',{
    name:{
        type: String,
        require:true,
        trim:true
    },
    email:{
        type: String,
        require:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email inválido')
            }
        }
    },
    password:{
        type: String,
        require:true,
        trim:true,
        minLength:7,
        validate(value){
            if(value.toLowerCase().includes('senha')){
                throw new Error('A senha não pode contar a palavra "senha"')
            }
        }
    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value <0){
                throw new Error('A idade não deve ser negativa.')
            }
        }
    }
})

module.exports = User