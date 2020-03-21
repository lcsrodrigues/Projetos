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
                window.location.href = encodeURI("/listaAvaliacoes");
            },3000);
            
        }else{
            showAlerts("Preencha os campos obrigatórios.","warning");
        }
    });
}