<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="FluxoDeProcessosMVC.Views.Index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Fluxo de Processos | Gráficos</title>

    <link rel ="stylesheet" type="text/css" href="../css/fluxoProcesso.css" />

    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="../js/fluxoProcesso.js"></script>
</head>
<body>
    <form id="formProcessos" runat="server">
        <h1>Fluxo de Processos</h1>

        <div id="createProcesso">
            <h3>Criar novo processo</h3>
            <input type="text" placeholder="Digite um numero de processo" id="iptNumProcesso"/>
            <input type="number" placeholder="Digite um valor" id="iptvalorProcesso"/>
            <select id="slcEscritorioProcesso">
                <option value="Escritório 0">Escritório 0</option>
                <option value="Escritório 1">Escritório 1</option>
                <option value="Escritório 2">Escritório 2</option>
                <option value="Escritório 3">Escritório 3</option>
            </select>
            <input type="text" id="iptDataProcesso" disabled="disabled" />
            <input type="button" value="Criar" id="btnCriarProcesso" />
        </div>

        <h3>Lista de processos</h3>
        <div id="divProcessos">
            <ul id="headProcessos">
                <li>ID</li>
                <li>Número do processo</li>
                <li>Valor</li>
                <li>Escritório</li>
                <li>Última modificação</li>
            </ul>
            <ul id="targetProcessos">

            </ul>
        </div>
        <div id="paginacaoProcesso">
            <a id="pagPrev"><</a>
            <a id="pagNext">></a>
        </div>

        <div id="barchart_values">
        </div>
    </form>
</body>
</html>
