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
        $(".removeFile").hide()
        if(arrayFiles.length)
        {
            openModalLoading();
            setTimeout(function(){
                openModal("SUCESSO","<strong>1</strong> Arquivo(s) carregado(s) com sucesso.<br/><strong>"+(arrayFiles.length-1)+"</strong> arquivo(s) com falha(s).");
            },3000);
            
            closeModal()
            if((arrayFiles.length -1))
            {
                var html = "";
                
                html+="<tr>";
                html+="    <th>Título</th>";
                html+="    <th>Extensão</th>";
                html+="    <th>Tamanho</th>";
                html+="</tr>";
                for(let I=0; I<arrayFiles.length-1; I++)
                {
                    var filesizeMB =  arrayFiles[I].file.size / 1024;

                    html+="<tr>";
                    html+="    <td>"+arrayFiles[I].file.name+"</td>";
                    html+="    <td>"+arrayFiles[I].file.type+"</td>";
                    html+="    <td>"+Math.round(filesizeMB)+" KB</td>";
                    html+="</tr>";
                }
                $("#target").html(html)
            }
            console.log(arrayFiles)
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
        $("input[type=file]").val("")

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