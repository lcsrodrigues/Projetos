$(document).ready(function()
{
    renderModals();
    login();
});

function login()
{
    $("#btnEnviar").click(function()
    {
        var ok = true;
        if(!validateForms($("#txtLogin")))
        {
                ok = false;
        }

        if(ok)
        {
            window.location.href = "file:///E:/Projetos/Plano%20de%20Ação/pages/home.html";
        }else{
            showAlerts("Preencha os campos obrigatórios.","warning");
        }
    });
}