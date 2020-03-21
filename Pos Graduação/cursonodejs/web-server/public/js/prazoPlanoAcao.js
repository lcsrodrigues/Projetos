$(document).ready(function()
{  
    renderModals();

    btnLiberarClick();
    btnEditAcao();
    btnEditConfirmClick();
    btnEditCancelClick();
});

function btnEditAcao()
{
    $(".btnEditEnabled").click(function()
    {
        $(this).hide();

        var cLI = $(this).closest("tr");
        var iptQtdDias = cLI.find(".txtQtdDias").text();
        cLI.find(".txtQtdDias").hide();
        cLI.find(".iptQtdDias").val(iptQtdDias).show();
        cLI.find(".actions").show();
    });
}

function btnEditConfirmClick()
{
    $(".btnEditConfirm").click(function()
    {
        var cLI = $(this).closest("tr");

        var iptQtdDias = cLI.find(".iptQtdDias").val();

        cLI.find(".txtQtdDias").text(iptQtdDias).show();
        cLI.find(".iptQtdDias").val("").hide();
        cLI.find(".actions").hide();
        $(".btnEditEnabled").show();
    });
}

function btnEditCancelClick()
{
    $(".btnEditCancel").click(function()
    {
        var cLI = $(this).closest("tr");
        cLI.find(".txtQtdDias").show();
        cLI.find(".iptQtdDias").hide();
        cLI.find(".actions").hide();
        $(".btnEditEnabled").show();
    });
}

function btnLiberarClick()
{
    $("#btnLiberar").click(function()
    {
        openModalLoading();
        setTimeout(function()
    {
        showAlerts("Liberado com sucesso.","success");
    },3000);
    });

    closeModal();
}