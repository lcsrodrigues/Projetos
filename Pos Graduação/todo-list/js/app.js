const util = require('./util');
const fs = require('fs');
var arr = [];
arr.push(util.setData('Lucas','Rosa Rodrigues','Rua A',25,'M'));
arr.push(util.setData('Lorena','Rosa Rodrigues','Rua B',26,'F'));
arr.push(util.setData('Marcos','Rosa Rodrigues','Rua C',24,'M'));
arr.push(util.setData('Stefany','Rosa Rodrigues','Rua D',26,'F'));
console.log(arr);

for(i=0; i< 4; i++)
{
    fs.writeFileSync("familiaRodrigues.txt",JSON.stringify(arr));

    
}