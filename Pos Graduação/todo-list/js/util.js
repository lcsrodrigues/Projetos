const setData = (nome, sobrenome, endereco, idade, genero) =>{
    var obj = {};

    obj.nome = nome;
    obj.sobrenome = sobrenome;
    obj.endereco = endereco;
    obj.idade = idade;
    obj.genero = genero;

    return obj;
}

module.exports = {
    setData
}