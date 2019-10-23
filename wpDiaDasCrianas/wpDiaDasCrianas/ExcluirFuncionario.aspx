<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ExcluirFuncionario.aspx.cs" Inherits="wpDiaDasCrianas.ExcluirFuncionario" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Excluir Funcionário</title>
    <link rel="stylesheet" type="text/css" href="styleDiaDasCriancas.css" />
</head>
<body>
    <form id="form1" runat="server">
        <section>
            <h3>Excluir Funcionário</h3>
            <a href="Funcionarios.aspx">Voltar</a>
        </section>
        <section id='detalhesEmpregado' runat="server">
			<div class='divLabelForm'>
				<label>Detalhes do empregado</label>
			</div>
			<div class='divInputForm'>
				<div>
					<span>Matrícula do Empregado</span>
				</div>
				<div>
                    <asp:TextBox ReadOnly="true" id='iptMatricula' class='inputText obrigatorio' runat="server" placeholder='Matrícula do empregado'></asp:TextBox>
				</div>

                <div>
					<span>Nome do Empregado</span>
				</div>
				<div>
                    <asp:TextBox ReadOnly="true" id='iptNomeEmpregado' class='inputText obrigatorio' runat="server" placeholder='Nome do empregado'></asp:TextBox>
				</div>
				
				<div>
					<span>E-mail</span>
				</div>
				<div>
                    <asp:TextBox ReadOnly="true" id='iptEmailEmpregado' class='inputText obrigatorio' runat="server" placeholder='E-mail'></asp:TextBox>
				</div>
				
				<div>
					<span>Telefone de Contato</span>
				</div>
				<div>
                    <asp:TextBox ReadOnly="true" id='iptContatoEmpregado' class='inputText obrigatorio' runat="server" placeholder='Telefone de contato'></asp:TextBox>
				</div>
			</div>
            <div>
                <asp:Button Text="Excluir" id="btnExcluir" runat="server" OnClick="btnExcluir_Click" />
            </div>
        </section>
    </form>
</body>
</html>
