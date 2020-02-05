$(document).ready(function()
{
    renderModals();
    login();
});

function login()
{
    $("#btnEntrar").click(function()
    {
        var login = true;
        if(!validateForms($("#txtLogin")))
        {
                login = false;
        }

        if(!validateForms($("#txtPassword")))
        {
                login = false;
        }
        
        if(login)
        {
            openModalLoading();
            setTimeout(function()
            {
                window.location.href = "file:///E:/Projetos/Plano%20de%20Ação/pages/listaAvaliacoes.html";
            },3000);
            
        }else{
            showAlerts("Preencha os campos obrigatórios.","warning");
        }
    });
}