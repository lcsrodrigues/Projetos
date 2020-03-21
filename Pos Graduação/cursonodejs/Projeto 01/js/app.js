const fs = require('fs');

var arr = [
            {
                'nome':'Lucas',
                'idade':25,
                'endereco':'Rua A'
            },
            {
                'nome':'Lorena',
                'idade':26,
                'endereco':'Rua A'
            },
            {
                'nome':'Stefany',
                'idade':26,
                'endereco':'Rua A'
            },
            {
                'nome':'Marcos',
                'idade':24,
                'endereco':'Rua A'
            },
          ];

fs.writeFileSync('Arquivo.txt',JSON.stringify(arr));
console.log("Estou pronto");
