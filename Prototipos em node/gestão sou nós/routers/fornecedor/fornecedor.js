const express = require("express")
const router = express.Router()
const modelFornecedor = require("../../models/Fornecedor")
const util = require("../../assets/js/util")

router.get("/",(req, res)=>{

    modelFornecedor.findAll().then((fornecedores)=>{
        var arrayFornecedores = []
        for(let I=0; I<fornecedores.length; I++)
        {
            let obj = {
                "id":fornecedores[I].id,
                "nome":fornecedores[I].NOME,
                "area_atuacao":fornecedores[I].AREA_ATUACAO,
                "observacao":fornecedores[I].OBSERVACAO,
                "created":util.convertCommonDate(fornecedores[I].createdAt),
                "updated":util.convertCommonDate(fornecedores[I].updatedAt)
            }
            arrayFornecedores.push(obj)
        }
        res.render("fornecedor/index",{fornecedores:arrayFornecedores})
    }).catch((err)=>{
        console.log(err)
    })
})

router.get("/cadastro",(req, res)=>{
    res.render("fornecedor/cadastro")
})

router.post("/novo",(req,res)=>{
    modelFornecedor.create({
        NOME:req.body.Nome,
        AREA_ATUACAO:req.body.AreaAtuacao,
        OBSERVACAO:req.body.Observacoes
    }).then(()=>{
        console.log("Fornecedor cadastrado com sucesso")
        return alert("Gravado com sucesso")
       
    }).catch((err)=>{
        console.log("Ocorreu um erro ao cadastrar o fornecedor "+err)
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