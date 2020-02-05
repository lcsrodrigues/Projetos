$(document).ready(function()
{
    renderModals();
    cadastroFornecedor();
});

function cadastroFornecedor()
{
    $("#btnCadastrar").click(function()
    {
        var ok = true;
        if(!validateForms($("#txtLogin")))
        {
            ok = false;
        }

        if(!validateForms($("#txtNome")))
        {
            ok = false;
        }

        if(!validateForms($("#txtEmail")))
        {
            ok = false;
        }

        if(ok)
        {
            openModalLoading();
            setTimeout(function(){
                openModal("SUCESSO","Cadastro efetuado com sucesso.");
            },3000);
            clearForm();
            closeModal();
            
        }else{
            showAlerts("Preencha os campos obrigatórios","warning");
        }
    });
}