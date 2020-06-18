var convertCommonDate = (dateISO)=>{
    dia = dateISO.getDate()
    mes = dateISO.getMonth()+1
    ano = dateISO.getFullYear()

    return dia + "/" + mes + "/" + ano;
}

module.exports = {
    convertCommonDate
}