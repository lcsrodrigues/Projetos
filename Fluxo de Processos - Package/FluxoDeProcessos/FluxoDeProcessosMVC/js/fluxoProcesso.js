var dataSource = [ ["Element", "Total de processos", { role: "style" }] ];
var arrayProcessos = [];
var jumpPage = 10;
var pagNext = jumpPage;
var pagPrev = 0;

$(document).ready(function ()
{
    $("#iptDataProcesso").val( formatDate(new Date().toISOString()) );
    $("#iptDataProcesso").attr("dateToISO", new Date().toISOString());

    getAllProcessos();
    paginationProcessos();
    btnCriarProcesso_Click();
    deleteProcesso_Click();
    updateProcesso_Click();
    cancelUpdate_Click();
    confirmUpdate_Click();
});

function cancelUpdate_Click() {
    $("#targetProcessos").on("click", "a.cancelUpdate", function () {

        var oLi = $(this).closest("li");

        oLi.siblings(".iptListProcesso").css({ 'display': 'block' });
        oLi.siblings(".iptEditProcesso").css({ 'display': 'none' });

        oLi.siblings(".editEscritorio").css({ 'display': 'none' });
        oLi.siblings(".dispEscritorio").css({ 'display': 'block' });

        oLi.siblings(".updateProcesso").css({ 'display': 'block' });
        oLi.css({ 'display': 'none' });
    });
}

function confirmUpdate_Click() {
    $("#targetProcessos").on("click", "a.confirmUpdate", function () {

        var oLi = $(this).closest("li");

        var idItem = $(this).attr('idItem');
        var valorItem = oLi.siblings(".iptEditProcesso").find("input").val();
        var escritorioItem = $(this).closest("div").find(".editEscritorio select").val();

        var objProcesso = {
            "valor": valorItem,
            "escritorio": escritorioItem,
            "dataDeCriacaoDoProcesso": new Date().toISOString()
        }

        updateProcesso(objProcesso, idItem);
    });
}

function updateProcesso_Click() {
    $("#targetProcessos").on("click", "li.updateProcesso", function () {

        var defaultValue = $(this).siblings(".iptListProcesso").text();
        var defaultValueSlc = $(this).siblings(".dispEscritorio").text();

        $(this).siblings(".iptListProcesso").css({ 'display': 'none' });
        $(this).siblings(".iptEditProcesso").css({ 'display': 'block' });

        $(this).siblings(".editEscritorio").css({ 'display': 'block' });
        $(this).siblings(".dispEscritorio").css({ 'display': 'none' });
        
        $(this).siblings(".iptEditProcesso").find("input").val(defaultValue);
        $(this).siblings(".editEscritorio").find("select").val(defaultValueSlc);

        $(this).siblings(".confirCancelUpdate").css({ 'display': 'block' });
        $(this).css({ 'display': 'none' });
    });
}

function deleteProcesso_Click() {
    $("#targetProcessos").on('click', 'li.deleteProcesso', function () {
        var idItem = $(this).find('a').attr('idItem');
        var numProcesso = $(this).closest('div').find('li').eq(1).text();

        var confirmacao = confirm("Tem certeza que deseja deletar o processo " + numProcesso + " ?");
        if (confirmacao) {
            deleteProcesso(idItem);
        }
    });
}

function btnCriarProcesso_Click() {
    $("#btnCriarProcesso").click(function () {
        var objProcesso = {
            "numeroDoProcesso": $("#iptNumProcesso").val(),
            "dataDeCriacaoDoProcesso": $("#iptDataProcesso").attr("dateToISO"),
            "valor": $("#iptvalorProcesso").val(),
            "escritorio": $("#slcEscritorioProcesso").val()
        }

        addNewProcesso(objProcesso);
    });
}

function updateProcesso(data,itemID) {
    $.ajax({
        url: "https://localhost:44369/api/Processo/" + itemID,
        type: "PUT",
        headers: {
            "accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "content-Type": "application/json;odata=verbose"
        },
        data: JSON.stringify(data),
        success: function (data) {
            dataSource = [["Element", "Total de processos", { role: "style" }]];
            getAllProcessos();
        },
        error: function (error) {

            alert(error.responseJSON);
            console.log(error);
        }
    });
}

function deleteProcesso(idItem) {
    $.ajax({
        url: "https://localhost:44369/api/Processo/" + idItem,
        type: "DELETE",
        headers: {
            "accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "content-Type": "application/json;odata=verbose"
        },
        success: function (data) {
            dataSource = [["Element", "Total de processos", { role: "style" }]];
            getAllProcessos();
        },
        error: function (error) {
            alert('Ocorreu um erro');
            console.log(error.responseJSON);
        }
    });
}

function addNewProcesso(data) {
    $.ajax({
        url: "https://localhost:44369/api/Processo",
        type: "POST",
        headers: {
            "accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "content-Type": "application/json;odata=verbose"
        },
        data: JSON.stringify(data),
        success: function (data) {
            clearForm();
            dataSource = [["Element", "Total de processos", { role: "style" }]];
            getAllProcessos();
        },
        error: function (error) {
            if (error.responseJSON == "Processo já existente") {
                alert('Processo já existente');
            }

            if (error.responseJSON == "Digite um número de processo") {
                alert('Digite um número de processo');
            }

            console.log(error);
        }
    });
}

function getAllProcessos() {
    $.ajax({
        url: "https://localhost:44369/api/Processo",
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
        },
        success: function (data) {
            if (data.length > 0) {
                arrayProcessos = data;
                buildCardProcessos();
                buildDataSource(data);
            } else {
                $("#targetProcessos").html("<li><h3>Sem dados cadastrados.</h3></li>");
            }
        },
        error: function (error) {
            console.log(JSON.stringify(error));
        }
    });
}

function paginationProcessos()
{
    $("#pagPrev").click(function ()
    {
        pagNext -= jumpPage;
        pagPrev -= jumpPage;

        if (pagPrev < 0)
        {
            pagPrev = 0;
            pagNext = jumpPage;
            buildCardProcessos();
        } else {
            buildCardProcessos();
        }
    });

    $("#pagNext").click(function ()
    {
        pagNext += jumpPage;
        pagPrev += jumpPage;

        if (pagNext > arrayProcessos.length)
        {
            pagPrev = arrayProcessos.length - jumpPage;
            pagNext = arrayProcessos.length;
            buildCardProcessos();
        } else {
            buildCardProcessos();
        }
    });
}

function clearForm()
{
    $("#iptNumProcesso").val("");
    $("#iptvalorProcesso").val("");
}

function formatDate(dateISO)
{
    var auxDate = new Date(dateISO);

    var dia = auxDate.getDate();
    var mes = auxDate.getMonth() + 1;
    var ano = auxDate.getFullYear();

    return dia + "/" + mes + "/" + ano;
}

function buildCardProcessos()
{
    var strOut = "";
    var lstPagProcessos = arrayProcessos.slice(pagPrev, pagNext);

    for (var I = 0; I < lstPagProcessos.length; I++)
    {
        strOut += "<div class='processoCard'>";
        strOut += "<li>" + lstPagProcessos[I].ID +"</li>";
        strOut += "<li>" + lstPagProcessos[I].numeroDoProcesso +"</li>";
        strOut += "<li class='iptListProcesso'>" + lstPagProcessos[I].valor + "</li>";
        strOut += "<li class='iptEditProcesso'><input type='text' value='" + lstPagProcessos[I].valor+"' /></li>";
        strOut += "<li class='dispEscritorio'>" + lstPagProcessos[I].escritorio + "</li>";

        strOut += "<li class='editEscritorio' >";
        strOut += " <select>";
        strOut += "     <option value='Escritório 0'>Escritório 0</option>";
        strOut += "     <option value='Escritório 1'>Escritório 1</option>";
        strOut += "     <option value='Escritório 2'>Escritório 2</option>";
        strOut += "     <option value='Escritório 3'>Escritório 3</option>";
        strOut += " </select>";
        strOut += "</li>";

        strOut += "<li>" + formatDate(lstPagProcessos[I].dataDeCriacaoDoProcesso) + "</li>";
        strOut += "<li class='deleteProcesso'><a class='icon-trash-1' idItem=" + lstPagProcessos[I].ID + "><img src='/icons/trash-1.svg' /></a></li>";
        strOut += "<li class='updateProcesso'><a class='icon-edit-1' idItem=" + lstPagProcessos[I].ID + "><img src='/icons/edit-1.svg' /></a></li>";
        strOut += "<li class='confirCancelUpdate'><a class='cancelUpdate' idItem=" + lstPagProcessos[I].ID + "><img src='/icons/cancel-1.svg' /></a><a class='confirmUpdate' idItem=" + lstPagProcessos[I].ID + "><img src='/icons/confirm-1.svg' /></a></li>";
        strOut += "</div>";
    }

    if (arrayProcessos.length > jumpPage) {
        $("#paginacaoProcesso").show();
    }

    $("#targetProcessos").html(strOut);
}

function buildDataSource(arrayProcesso)
{
    var escritorio0Data = [];
    var escritorio1Data = [];
    var escritorio2Data = [];
    var escritorio3Data = [];

    var count0 = 0;
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;

    for (I = 0; I < arrayProcesso.length; I++)
    {

        switch (arrayProcesso[I].escritorio)
        {
            case "Escritório 0":
                count0++;
                escritorio0Data = ["Escritório 0",count0,"red"];
            break;

            case "Escritório 1":
                count1++;
                escritorio1Data = ["Escritório 1", count1, "yellow"];
            break;

            case "Escritório 2":
                count2++;
                escritorio2Data = ["Escritório 2", count2, "blue"];
            break;

            case "Escritório 3":
                count3++;
                escritorio3Data = ["Escritório 3", count3, "green"];
            break;
        }
    }
    if (escritorio0Data.length > 0)
        dataSource.push(escritorio0Data);

    if (escritorio1Data.length > 0)
        dataSource.push(escritorio1Data);

    if (escritorio2Data.length > 0)
        dataSource.push(escritorio2Data);

    if (escritorio3Data.length > 0)
        dataSource.push(escritorio3Data);


    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);
}

function drawChart()
{
    var data = google.visualization.arrayToDataTable(dataSource);

    var view = new google.visualization.DataView(data);

    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2]);

    var options = {
        title: "Processos por escritório",
        width: 1250,
        height: 350,
        bar: { groupWidth: "30%" },
        legend: { position: "none" },
    };

    $("#barchart_values").html("");
    var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
    chart.draw(view, options);
}