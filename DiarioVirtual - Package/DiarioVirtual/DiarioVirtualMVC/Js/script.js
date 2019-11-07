var allOk = true;

$(document).ready(function () {
    console.log("ready");

    getAllAnnotation();
    btnSalvar_Click();
    liItem_Click();
});

function liItem_Click() {

    $("#target").on("click", ".liItem", function () {
        window.location.href = "dispForm.aspx?i=" + $(this).attr("itemID");
    });

}

function btnSalvar_Click() {
    $("#btnSalvar").click(function () {
        allOk = true;
        var file = $("#iptFile")[0].files[0];

        changeFile(file, function (data) {
            
            var obj =
            {
                "titulo": $("#iptTitle").val(),
                "nome": $("#iptName").val(),
                "descricao": $("#iptDescription").val(),
                "arquivo": data,
                "dataCriacao": new Date().toDateString()
            };

            createAnnotation(obj);
        });
    });
}

function changeFile(oFile, callback) {
    if (typeof(oFile) != "undefined") {

        var file = oFile;
        var reader = new FileReader();
        reader.addEventListener('load', function (reader) {
            callback(reader.target.result);
        });
        reader.readAsText(file);
    } else {
        callback(null);
    }
}

function createAnnotation(obj) {

    console.log(obj);

    if (validFieldObg()) {
        $.ajax({
            url: "https://localhost:44396/api/Diario",
            type: "POST",
            data: JSON.stringify(obj),
            headers: {
                "accept": "application/json;odata=verbose",
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                "content-Type": "application/json;odata=verbose"
            },
            success: function () {
                $("#target").html("");
                clearForm();
                getAllAnnotation();
            },
            error: function (error) {
                console.log(JSON.stringify(error));
            }
        });
    }
}

function getAllAnnotation() {

    $.ajax({
        url: "https://localhost:44396/api/Diario",
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
        },
        success: function (data) {

            var strOut = "";

            if (data.length) {
                for (I = 0; I < data.length; I++) {

                    strOut += "<li class='liItem' itemID=" + data[I].ID + ">";
                    strOut += "    <div class='leftSide'>";
                    strOut += "        <span class='dataHora'>" + convertToDateCommon( data[I].dataCriacao )+ "</span>";
                    strOut += "        <span class='titulo'>" + data[I].titulo + "</span>";
                    strOut += "    </div>";
                    strOut += "    <div class='rightSide'>";
                    strOut += "        <img src='../images/icon-link-externo.png' />";
                    strOut += "    </div>";
                    strOut += "</li>";
                }

            } else {
                strOut += "<li>";
                strOut += "    <div>";
                strOut += "        <h1>Nenhum registro encontrado</h1>";
                strOut += "    </div>";
                strOut += "</li>";
            }

            $("#target").html(strOut);

        },
        error: function (error) {
            console.log(JSON.stringify(error));
        }
    });
}

function validFieldObg() {

    var iptObg = $(".iptObg");

    for (let I = 0; I < iptObg.length; I++) {
        if (iptObg.eq(I).val() == "") {
            allOk = false;
            iptObg.eq(I).css({ "border": "1px solid #FF0000" });

            setTimeout(function () {
                iptObg.eq(I).css({ "border": "0" });
            }, 3000);
        }
    }

    return allOk;
}

function clearForm() {
    var iptObg = $(".iptObg");

    for (let I = 0; I < iptObg.length; I++) {
        iptObg.eq(I).val("");
    }
}