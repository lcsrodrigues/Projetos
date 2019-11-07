$(document).ready(function () {

    getAnnotationById(paramURL().i);

});

function paramURL() {

    var result = {}, keyValuePairs = location.search.slice(1).split("&");

    keyValuePairs.forEach(function (keyValuePair) {

        keyValuePair = keyValuePair.split('=');

        result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
    });
    return result;
}

function getAnnotationById(id) {

    $.ajax({
        url: "https://localhost:44396/api/Diario/"+id,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
        },
        success: function (data) {

            if (data.ID > 0) {

                $("#nome").text(data.nome);
                $("#dataHora").text( convertToDateCommon(data.dataCriacao) );
                $("#titulo").text(data.titulo);
                $("#descricao").text(data.descricao);

                console.log(data);

            } else {
                
            }
        },
        error: function (error) {
            console.log(JSON.stringify(error));
        }
    });
}