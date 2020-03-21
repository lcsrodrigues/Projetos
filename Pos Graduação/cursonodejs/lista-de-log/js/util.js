const fs = require('fs');

const log = (content) =>{
    var cDate = new Date();
    fs.appendFileSync("log.txt",`${cDate} --> ${content}\n`)
}

module.exports = {
    log
}