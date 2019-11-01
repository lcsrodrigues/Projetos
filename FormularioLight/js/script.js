var allOk = true;

$(document).ready(function()
{
    btnSalvar_Click();
    slcUnidadeTrabalho_Changed();
});

function slcUnidadeTrabalho_Changed()
{
    $("#slcUnidadeTrabalho").change(function()
    {
        if($(this).val() == "000")
        {
            $("#iptNomeCidade").val("");
            $("#iptNomeCidade").css("display","block").addClass("iptObg");
        }else{
            $("#iptNomeCidade").hide().removeClass("iptObg");
        }
    });
}

function btnSalvar_Click()
{
    allOk = true;
    $("#btnSalvar").click(function()
    {
        var iptObg = $(".iptObg");

        for(let I=0; I<iptObg.length; I++)
        {
            if(iptObg.eq(I).val() == "")
            {
                allOk = false;
                iptObg.eq(I).css({"border-color":"#FF0000"});

                setTimeout(function(){
                    iptObg.eq(I).css({"border-color":"#CCCCCC"});
                },3000);
            }
        }

        if(allOk)
        {
            alert('Dados gravados com sucesso');
            window.location.reload();
        }
    });
}