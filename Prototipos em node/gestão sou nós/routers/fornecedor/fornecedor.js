const express = require("express")
const router = express.Router()
const modelFornecedor = require("../../models/Fornecedor")

router.get("/",(req, res)=>{
    modelFornecedor.findAll().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
})

router.post("/cadastro",(req, res)=>{
    
    modelFornecedor.create({
        NOME:req.body.NOME,
        AREA_ATUACAO:req.body.AREA_ATUACAO,
        OBSERVACAO:req.body.OBSERVACAO
    }).then(()=>{
        res.send("Fornecedor cadastrado com sucesso")
    }).catch((err)=>{
        res.send("Ocorreu um erro ao cadastrar o fornecedor "+err)
    })
})

router.put("/edicao/:id",(req, res)=>{
    modelFornecedor.update(
    {
        NOME:"Clodoaldo",
        AREA_ATUACAO:"Front-end",
        OBSERVACAO:"Lorem Ipsum Dolor Sit Amet"
    },
    {
        where:{
            id:req.params.id
        }
    }).then((data)=>{
        res.send("Fornecedor alterado com sucesso "+data)
    }).catch((err)=>{
        res.send("Ocorreu um erro ao alterar o fornecedor "+err)
    })
})

router.delete("/delete/:id",(req,res)=>{
    modelFornecedor.destroy({
        where:{
            id:req.params.id
        }
    }).then(()=>{
        res.send("Fornecedor removido com sucesso.")
    }).catch((err)=>{
        res.send("Ocorreu um erro ao deletar o fornecedor "+err)
    })
})

router.get("/count",(req,res)=>{
    modelFornecedor.count().then(c => {
        res.send("Total de fornecedores "+c)
    }).catch((err)=>{
        res.send("Ocorreu um erro "+err)
    })
})

module.exports = router