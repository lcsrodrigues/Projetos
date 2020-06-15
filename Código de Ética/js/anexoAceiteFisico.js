var arrayFiles = []

$(document).ready(function()
{
    renderModals()
    chooseFile()
    removeFile()
    btnSalvar()
});

function btnSalvar()
{
    $("#btnSalvar").click(function(){
        goToTop()
        if(arrayFiles.length)
        {
        openModalLoading();
        setTimeout(function(){
            showAlerts("UPLOAD EFETUADO COM SUCESSO","success")
            setTimeout(function(){
                showAlerts("O CAMPO ANEXAR DOCUMENTO NÃO PODE FICAR EM BRANCO","alert")
                setTimeout(function(){
                    showAlerts("OCORREU UM ERRO AO EFETUAR O UPLOAD DO ARQUIVO","warning")
                },3000);
            },3000);
        },3000);

        console.log(arrayFiles)
        closeModal();
        }else{
            showAlerts('Por favor selecione um arquivo','alert')
            return false
        }
    });
}

function removeFile()
{
    $(".files ul").on('click','.removeFile',function(){

        var nameFile = $(this).closest("li").find(".nameFile").text();

        file = arrayFiles.find(function(e){
            return e.name == nameFile
        })

        var indexFile = arrayFiles.indexOf(file)
        arrayFiles.splice(indexFile,1);
        $(this).closest("li").remove()
        if(arrayFiles.length == 0)
        {
            $(".files ul").html("<li>Nenhum arquivo selecionado</li>");
        }
    })
}

function chooseFile()
{
    $('input[type="file"]').change(function(e)
    {
        var file = {
            "name":e.target.files[0].name,
            "file":e.target.files[0]
        }


        var indexFile = arrayFiles.find(function(e){
            return e.name == file.name
        })

        if(arrayFiles.indexOf(indexFile) != -1)
        {
            showAlerts('Arquivo já selecionado','alert')
            return false
        }

        arrayFiles.push(file)
        
        var html = "";
        for(let I=0; I<arrayFiles.length; I++)
        {
            html += "<li>";
            html += "   <div>";
            html += "       <img class='removeFile' src='../images/close_X_red.svg' />";
            html += "   </div>";
            html += "   <span class='nameFile'>"+arrayFiles[I].name+"</span>";
            html += "</li>";
        }
        
        $(".files ul").html(html);
    });
}