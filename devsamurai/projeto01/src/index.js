const minhaPromise = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Pronto")
        },2000)
    })
}

console.log("start")
minhaPromise().then(res =>{
    console.log("exec 1", res)
})


const outraPromise = async () => {
    const res = await minhaPromise();
    console.log("exec 2", res)
}
outraPromise()
console.log("end")



// import {soma} from '../matematica'

// class ListaConvidados{
//     constructor(){
//         this.convidados = JSON.parse(localStorage.getItem("Convidados")) || []
//     }

//     adicionar(nome, data){
//         var convidado = {nome:nome, data:data}
//         this.convidados.push(convidado)
//         console.log(this.convidados)
//         localStorage.setItem("Convidados",JSON.stringify(this.convidados))
//         this.exibir()
//     }

//     exibir(){
//         let convidados = JSON.parse(localStorage.getItem("Convidados"))
//         var htm = "";
//         for(let convidado of convidados)
//         {
//             htm += `<tr><td>${convidado.nome}</td><td>${convidado.data}</td></tr>`;
//         }
//         $("#targetConvidado").html(htm)
//     }
// }
// var listaConv = new ListaConvidados();
// listaConv.exibir()
// console.log(soma(1,2))

// $("#btnAdicionarConv").click(()=>{
//     let nome = $("#iptNome").val()
//     let data = new Date()
//     listaConv.adicionar(nome, data)
// })