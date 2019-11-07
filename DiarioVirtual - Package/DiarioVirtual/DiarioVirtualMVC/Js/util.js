function convertToDateCommon(dateISO)
{
    var date = new Date(dateISO);
    var dia = date.getDate();
    var mes = date.getMonth() + 1;
    var ano = date.getFullYear();

    return dia + "/" + mes + "/" + ano;
}