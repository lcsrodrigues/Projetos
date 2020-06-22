const express = require("express")
const router = express.Router()
const Material = require("../../models/Material")
const Fornecedor = require("../../models/Fornecedor")
const Pagamento = require("../../models/Pagamento")
const util = require("../../assets/js/util")

router.get("/",(req, res)=>{

    Material.findAll(
    {
        include:
        [
            { model:Pagamento, as:"pagamento" },
            { model:Fornecedor, as:"fornecedor" }
        ]
    }).then((material)=>{
        var arrayMaterial = []
        var obj = {}

        for(let I=0; I<material.length; I++)
        {
            obj = {
                "id":material[I].id,
                "nome":material[I].NOME,
                "quantidade":material[I].QUANTIDADE,
                "preco":material[I].PRECO,
                "qtd_parcela":material[I].QTD_PARCELA,
                "fornecedor":material[I].fornecedor.NOME,
                "pagamento":material[I].pagamento.TIPO_PAGAMENTO,
                "observacao":material[I].OBSERVACOES,
                "created":util.convertCommonDate(material[I].createdAt),
                "updated":util.convertCommonDate(material[I].updatedAt)
            }

            arrayMaterial.push(obj)
        }
        res.render("material/index",{material:arrayMaterial})
    })
})

router.get("/edicao/:id",(req,res)=>{
    
    Material.findAll({
        where:{
            id:req.params.id
        }
    }).then((material)=>{
        
        let obj = {
            "id":material[0].id,
            "Nome":material[0].NOME,
            "Quantidade":material[0].QUANTIDADE,
            "Fornecedor":material[0].FORNECEDOR_ID,
            "Preco":material[0].PRECO,
            "Data":material[0].DATA_COMPRA,
            "Pagamento":material[0].PAGAMENTO_ID,
            "Parcelas":material[0].QTD_PARCELA,
            "Observacoes":material[0].OBSERVACOES
        }

        res.render("material/edicao",{material:obj})

    }).catch((err)=>{
        console.log("Ocorreu um erro "+err)
    })
})

router.post("/editar/:id",(req, res)=>{
    Material.update(
    {
        NOME:req.body.Nome,
        QUANTIDADE:req.body.Quantidade,
        PRECO:req.body.Preco,
        QTD_PARCELA:req.body.Parcelas,
        DATA_COMPRA:req.body.Data,
        OBSERVACOES:req.body.Observacoes,
        FORNECEDOR_ID:req.body.Fornecedor,
        PAGAMENTO_ID:req.body.Pagamento
    },
    {
        where:{
            id:req.params.id
        }
    }).then((data)=>{
        res.redirect("/material")
    }).catch((err)=>{
        res.send("Ocorreu um erro "+err)
    })
})

router.get("/delete/:id",(req,res)=>{
    Material.destroy({
        where:{
            id:req.params.id
        }
    }).then(()=>{
        res.redirect("/material")
    }).catch((err)=>{
        res.send("Ocorreu um erro ao deletar "+err)
    })
})

router.post("/novo",(req, res)=>{

    Material.create({
        
        NOME:req.body.Nome,
        QUANTIDADE:req.body.Quantidade,
        PRECO:req.body.Preco,
        QTD_PARCELA:req.body.Parcelas,
        DATA_COMPRA:req.body.Data,
        OBSERVACOES:req.body.Observacoes,
        FORNECEDOR_ID:req.body.Fornecedor,
        PAGAMENTO_ID:req.body.Pagamento

    }).then((data)=>{
        res.redirect("/material")
    }).catch((err)=>{
        res.send("Ocorreu um erro "+err)
    })
})

router.get("/cadastro",(req, res)=>{
    Fornecedor.findAll().then((fornecedores)=>{
        var arrFornecedores = [];

        for(let I=0; I< fornecedores.length; I++)
        {
            cFornecedor = {
                id:fornecedores[I].id,
                nome: fornecedores[I].NOME
            }
            
            arrFornecedores.push(cFornecedor)
        }
        Pagamento.findAll().then((pagamentos)=>{
            var arrPagamentos = [];

            for(let I=0; I< pagamentos.length; I++)
            {
                cPagamento = {
                    id:pagamentos[I].id,
                    nome: pagamentos[I].TIPO_PAGAMENTO
                }
                
                arrPagamentos.push(cPagamento)
            }
            res.render("material/cadastro",{fornecedores:arrFornecedores,pagamentos:arrPagamentos})
        })
    }).catch((err)=>{
        console.log("Ocorreu um erro "+err)
    })
})

module.exports = router