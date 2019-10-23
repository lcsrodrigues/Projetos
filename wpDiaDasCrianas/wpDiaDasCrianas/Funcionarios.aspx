<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Funcionarios.aspx.cs" Inherits="wpDiaDasCrianas.Funcionarios" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Funcionários</title>
    <link rel="stylesheet" type="text/css" href="styleDiaDasCriancas.css" />
</head>
<body>
    <form id="form1" runat="server">
        <section>
			<h3>Funcionários</h3>
			<a href="Home.aspx">Home</a>
		</section>
		<section>
			<div class='divLabelForm'>
				<label>Cadastrar Funcionário</label>
			</div>
			<div class='divInputForm'>
				<div>
					<span>Nome do Empregado</span>
				</div>
				<div>
					<asp:TextBox class='inputText obrigatorio' id='iptNomeFuncionario' runat="server" placeholder='Nome do funcionário'></asp:TextBox>
				</div>
				<div>
					<span>Matrícula</span>
				</div>
				<div>
					<asp:TextBox class='inputText obrigatorio' id='iptMatriculaFuncionario' runat="server" placeholder='Matrícula do funcionário'></asp:TextBox>
				</div>
				<div>
					<span>Telefone de Contato</span>
				</div>
				<div>
					<asp:TextBox class='inputText obrigatorio' id='iptTelefoneFuncionario' runat="server" placeholder='Telefone do funcionário'></asp:TextBox>
				</div>
				<div>
					<span>E-mail</span>
				</div>
				<div>
					<asp:TextBox class='inputText obrigatorio' id='iptEmailFuncionario' runat="server" placeholder='E-mail do funcionário'></asp:TextBox>
				</div>
			</div>
			<div>
				<asp:Button ID="btnSalvar" runat="server" Text="Salvar" OnClick="btnSalvar_Click" />
			</div>
		</section>
		<section>
            <div class='divLabelForm listaFuncionarios'>
				<label>Lista de Funcionários</label>
			</div>
			<div class='divInputForm'>
                <asp:Panel runat="server" ID="pnlFuncionarios">
                    <h1>Todos os funcionários</h1>
                    <asp:GridView ID="gwFuncionarios" runat="server" EmptyDataText="Sem registros" OnRowCommand="gwFuncionarios_RowCommand">
                        <Columns>
                            <asp:HyperLinkField Text="Excluir" DataNavigateUrlFields="ID" DataNavigateUrlFormatString="ExcluirFuncionario.aspx?id={0}"  />
                        </Columns>
                    </asp:GridView>
                </asp:Panel>
			</div>
		</section>
    </form>
</body>
</html>
