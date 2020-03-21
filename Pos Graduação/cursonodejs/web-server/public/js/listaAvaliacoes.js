$(document).ready(function()
{
    renderModals();
    
    var oNota = $(".nota");
    for( I=0; I<oNota.length; I++ )
    {
        var nota = parseFloat(oNota.eq(I).text());

        if(nota < 4)
        {
            oNota.eq(I).css("color","#FF0000");
        }

        if(nota > 3 && nota < 7)
        {
            oNota.eq(I).css("color","#FF7A00");
        }

        if(nota > 6 && nota < 9)
        {
            oNota.eq(I).css("color","#0FC22B");
        }

        if(nota > 8)
        {
            oNota.eq(I).css("color","#1E58ED");
        }
    }
});