$(document).ready(function()
{
    $("#termoContent").scroll(function()
    {
        var scroll =  $("#termoContent").scrollTop();
        var maxScroll =  $("#termoContent")[0].scrollHeight - $("#termoContent").height() - 20;
        //var maxScroll = ($("#termoContent")[0].scrollHeight + 20) - $("#termoContent")[0].scrollHeight

        if( scroll == maxScroll )
        {
            $("#btnAceito").show();
        }
    });

    $("#btnAceito").click(function()
    {
        let txtCPF = $("#txtCPF");

        if( !txtCPF.val().length <= 0 )
        {
            $("#modalConfirmaDados").show();
            $(".opacity").css("opacity",0.5);
            $(".form input").attr("disabled",true);
        }else{
            txtCPF.css({'background':'#FFA300'});
            setTimeout(function(){
                txtCPF.css({'background':'#fff'});
            },2000);
        }
    });

    $("#btnVoltar_s, #btnVoltar_c").click(function()
    {
        $(".modalBox").hide();
        $(".opacity").css("opacity",1);
        $(".form input").attr("disabled",false);
    });

    $("#btnConfirmar").click(function()
    {
        var txtCPF = $("#txtCPF").val();
        if( txtCPF == "153.878.547-16")
        {
            $(".modalBox").hide();
            
            $("#modalGenerico").show();
            setTimeout(function(){
                $(".modalBox").hide();
                $("#modalRegistroSucesso").show();
            },5000);
        }

        if( txtCPF == "000.000.000-01" )
        {
            $(".modalBox").hide();
            $("#modalRegistroExistente").show();
        }

        if( txtCPF != "" && txtCPF.length < 14 )
        {
            $(".modalBox").hide();
            $("#modalCpfIncorreto").show();
        }
    });

    $("#btnSair_s, #btnSair_e").click(function()
    {
        $(".modalBox").hide();
        $(".opacity").css("opacity",1);
        $(".form input").attr("disabled",false);
    });
});