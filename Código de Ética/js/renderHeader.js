$(document).ready(function(){
    renderHeader()
})

function renderHeader()
{
    var html = "";

    html+='<div class="wrap">';
    html+='    <div class="logo">';
    html+='        <img src="../images/logo_light_1.svg" alt="Logo Light"/>';
    html+='    </div>';
    html+='    <div class="title">';
    html+='        <span>CÓDIGO DE ÉTICA</span>';
    html+='    </div>';
    html+='    <div class="perfil">';
    html+='        <div class="infoPerfil">';
    html+='            <span>Victor Kronenberg</span>';
    html+='            <span>2223538</span>';
    html+='        </div>';
    html+='        <div class="fotoPerfil">';
    html+='            <a>';
    html+='                <img src="../images/perfil.png" />';
    html+='            </a>';
    html+='        </div>';
    html+='    </div>';
    html+='</div>';
    html+='';
    html+='<div class="backgroundMegaMenu">';
    html+='    <div class="wrap">';
    html+='        <div class="menu">';
    html+='            <ul>';
    html+='                <li>';
    html+='                    <div>';
    html+='                        <a href="index.html">Início</a>';
    html+='                    </div>';
    html+='                </li>';
    html+='                <li id="menuAF">';
    html+='                    <div>';
    html+='                        <a>Aceites físicos</a>';
    html+='                    </div>';
    html+='                </li>';
    html+='            </ul>';
    html+='        </div>';
    html+='        <div class="megaMenu">';
    html+='            <ul>';
    html+='                <li>';
    html+='                    <div>';
    html+='                        <a href="../pages/registroAceiteFisicoEmMassa.html">Registrar aceite físico em massa</a>';
    html+='                    </div>';
    html+='                </li>';
    html+='                <li>';
    html+='                    <div>';
    html+='                        <a href="../pages/consultaAceiteFisico.html">Consultar aceites físicos</a>';
    html+='                    </div>';
    html+='                </li>';
    html+='                <li>';
    html+='                    <div>';
    html+='                        <a href="../pages/anexoAceiteFisico.html">Anexar arquivos de aceites físicos</a>';
    html+='                    </div>';
    html+='                </li>';
    html+='                <li>';
    html+='                    <div>';
    html+='                        <a>Gerar relatórios de aceites físicos</a>';
    html+='                    </div>';
    html+='                </li>';
    html+='            </ul>';
    html+='        </div>';
    html+='    </div>';
    html+='</div>';
    html+='';
    html+='<div class="alerts">';
    html+=' <div class="notification internal">';
    html+='     <span class="msgWarning"></span>';
    html+=' </div>';
    html+='</div>';
    html+='';
    html+='<div id="modals">';
    html+='    <div class="wrap" id="targetModals">';
    html+='        ';
    html+='    </div>';
    html+='</div>';
    
    $("header").html(html)
}
        