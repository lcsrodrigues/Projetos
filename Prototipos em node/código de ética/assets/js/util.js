function validateForms(input)
{
    if(input.val() == "" || input.val() == null)
    {
        return false;
    }else{
        return true;
    }
}

function disabledFunctions()
{
    $("#content").css("opacity",0.5);
    $("#content input").attr("disabled",true);
    $("#content textarea").attr("disabled",true);
    $("#content select").attr("disabled",true);
}

function enabledFunctions()
{
    $("#content").css("opacity",1);
    $("#content input").attr("disabled",false);
    $("#content textarea").attr("disabled",false);
    $("#content select").attr("disabled",false);
}

function clearForm()
{
    $("#content input").val("");
    $("#content textarea").val("");
    $("#content select").val(0);
}

function showAlerts(text,color)
{
    $(".alerts .msgWarning").text(text);
    $(".alerts .notification").addClass(color);
    $(".alerts").show();

    setTimeout(function(){
        $(".alerts .msgWarning").text("");
        $(".alerts").hide();
    },3000);
}

function renderModals()
{
    var strOut = "";
    
    strOut+='<div class="modalBox" id="modalLoading">';
    strOut+='    <div class="header">';
    strOut+='        <span>POR FAVOR AGUARDE...</span>';
    strOut+='    </div>';
    strOut+='    <div class="body">';
    strOut+='        <img src="../images/light_loading.gif" alt="Light Loading" />';
    strOut+='    </div>';
    strOut+='    <div class="footer">';
    strOut+='        ';
    strOut+='    </div>';
    strOut+='</div>';

    strOut+='<div class="modalBox" id="modalInformation">';
    strOut+='    <div class="header">';
    strOut+='        <span id="titleModal">LOREM IPSUM</span>';
    strOut+='    </div>';
    strOut+='    <div class="body">';
    strOut+='        <p id="msgModal">Lorem ipsum Dolor Sit Amet</p>';
    strOut+='    </div>';
    strOut+='    <div class="footer">';
    strOut+='        <div class="btn">';
    strOut+='            <div id="btnModal" class="oButton primary">SAIR</div>';
    strOut+='        </div>';
    strOut+='    </div>';
    strOut+='</div>';

    $("#targetModals").html(strOut);
}

function openModalLoading()
{
    $("#modalLoading").show();
    disabledFunctions();

    setTimeout(function(){
        $("#modalLoading").hide();
        enabledFunctions();
    },3000);
}

function openModal(title, content)
{
    $("#msgModal").text(content);
    $("#titleModal").text(title);
    
    $("#modalInformation").show();
    disabledFunctions();
}

function closeModal()
{
    $("#targetModals").on('click','#btnModal',function()
    {
        $("#modalInformation").hide();
        enabledFunctions();
    });
}