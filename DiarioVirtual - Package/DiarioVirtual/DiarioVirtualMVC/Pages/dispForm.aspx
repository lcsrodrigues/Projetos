<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="dispForm.aspx.cs" Inherits="DiarioVirtualMVC.Pages.dispForm" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Diário Virtual</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" type="text/css" href="../Css/style.css" />
    <link rel="stylesheet" type="text/css" href="../Css/dispForm.css" />
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script type="text/javascript" src="../Js/util.js"></script>
    <script type="text/javascript" src="../Js/dispForm.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div id="header">
            <div class="wrap">
                <a href="index.aspx">
                    <img src="../Images/logo_diarioVirtual.png" />
                </a>
            </div>
        </div>
        <div id="body">
            <div class="wrap">
                <div class="header">
                    <span id="nome"></span>
                    <span id="dataHora"></span>
                </div>
                
                <hr class="hrDivisor" />
                
                <div class="content">
                    <span id="titulo"></span>
                    <p id="descricao"></p>
                </div>
            </div>
        </div>
    </form>
</body>
</html>
