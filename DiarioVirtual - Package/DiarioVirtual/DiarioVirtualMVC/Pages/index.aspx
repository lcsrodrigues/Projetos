<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="DiarioVirtualMVC.Pages.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Diário Virtual</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" type="text/css" href="../Css/style.css" />
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script type="text/javascript" src="../Js/util.js"></script>
    <script type="text/javascript" src="../Js/script.js"></script>
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
                <div class="cNewFormLeft">
                    <input class="iptObg" id="iptTitle" type="text" placeholder="Write a title..." />
                    <input class="iptObg" id="iptName" type="text" placeholder="Write your name..." />
                    <input type="file" id='iptFile' disabled="disabled" />
                </div>
                <div class="cNewFormRight">
                    <textarea id="iptDescription" class="iptObg" placeholder="Write about your day..."></textarea>
                </div>
                <div class="divButtons">
                    <input id="btnSalvar" type="button" value="Save" />
                </div>
                
                <hr class="hrDivisor" />
                
                <div>
                    <ul id="target">
                    </ul>
                </div>

            </div>
        </div>
    </form>
</body>
</html>
