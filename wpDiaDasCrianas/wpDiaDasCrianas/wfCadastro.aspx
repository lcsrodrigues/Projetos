<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="wfCadastro.aspx.cs" Inherits="wpDiaDasCrianas.wfCadastro" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="stylesheet" type="text/css" href="styleDiaDasCriancas.css" />
    <title>Formulário dia das crianças</title>
</head>
<body>
    <form id="formDiaDasCriancas" runat="server">
        <section>
			<h3>Dia das crianças 2019</h3>
            <a href="Home.aspx">Home</a>
		</section>
		<section id='identificacaoEmpregado'>
			<div class='divLabelForm'>
				<label>Identificação</label>
			</div>
			<div class='divInputForm'>
				<div>
					<span>Insira sua matrícula</span>
				</div>
				<div>
                    <asp:TextBox ID="iptMatricula" placeholder='Insira sua matrícula' class='inputText obrigatorio' runat="server"></asp:TextBox>
				</div>
				<div>
                    <asp:Button ID="btnConsultaMatricula" runat="server" Text="Consultar" OnClick="btnConsultaMatricula_Click" />
				</div>
			</div>
		</section>

		<section id='detalhesEmpregado' runat="server" visible="false">
			<div class='divLabelForm'>
				<label>Detalhes do empregado</label>
			</div>
			<div class='divInputForm'>
				<div>
					<span>Nome do Empregado</span>
				</div>
				<div>
                    <asp:TextBox id='iptNomeEmpregado' ReadOnly="true" class='inputText obrigatorio' runat="server" placeholder='Nome do empregado'></asp:TextBox>
				</div>
				
				<div>
					<span>E-mail</span>
				</div>
				<div>
                    <asp:TextBox id='iptEmailEmpregado' class='inputText obrigatorio' runat="server" placeholder='E-mail'></asp:TextBox>
				</div>
				
				<div>
					<span>Telefone de Contato</span>
				</div>
				<div>
                    <asp:TextBox id='iptContatoEmpregado' class='inputText obrigatorio' runat="server" placeholder='Telefone de contato'></asp:TextBox>
				</div>
			</div>
			
			<div class='divLabelForm'>
				<label>Cônjuge</label>
			</div>
			<div class='divInputForm'>
				<div>
					<span>Levará Cônjuge? <label class='labelAlert'>Será considerado somente o dependente cadastrado no sistema da empresa.</label></span>
				</div>
				<div>

                    <asp:DropDownList ID="levarConjuge" class='inputSelect obrigatorio' runat="server" OnSelectedIndexChanged="levarConjuge_SelectedIndexChanged" AutoPostBack="True">
                        <asp:ListItem Value="" Selected="True">Selecione</asp:ListItem>
                        <asp:ListItem Value="Sim">Sim</asp:ListItem>
                        <asp:ListItem Value="Nao">Não</asp:ListItem>
                    </asp:DropDownList>
				</div>
				<div id="divConjuge" runat="server" visible="false">
                    <asp:TextBox class='inputText subObrigatorio' placeholder='Nome Completo' id='iptNomeConjuge' runat="server"></asp:TextBox>
				</div>
			</div>
			
			<div class='divLabelForm'>
				<label>Filhos</label>
			</div>
			<div class='divInputForm'>
				<div>
					<span>Levará quantos filhos? <label class='labelAlert'>Será considerado somente o dependente cadastrado no sistema da empresa.</label></span>
				</div>
				<div>
                    <asp:DropDownList ID="levarQuantosFilhos" runat="server" class='inputSelect obrigatorio' OnSelectedIndexChanged="levarQuantosFilhos_SelectedIndexChanged" AutoPostBack="True">
                        <asp:ListItem Value="" Selected="True">Selecione</asp:ListItem>
                        <asp:ListItem Value="1">1</asp:ListItem>
                        <asp:ListItem Value="2">2</asp:ListItem>
                        <asp:ListItem Value="3">3</asp:ListItem>
                        <asp:ListItem Value="4">4</asp:ListItem>
                    </asp:DropDownList>
				</div>
                
                <asp:Repeater ID="dependentes" runat="server">
                    <ItemTemplate>

                         <asp:TextBox id="iptNomeDependente" class='inputText subObrigatorio' placeholder='Nome Completo' runat="server"></asp:TextBox>
                        
                         <asp:DropDownList ID = 'sltFaixaEtaria' runat = 'server' class='inputSelect'>
                             <asp:ListItem Value="0 a 2 anos">0 à 2 anos</asp:ListItem>
                             <asp:ListItem Value="3 a 5 anos">3 á 5 anos</asp:ListItem>
                             <asp:ListItem Value="6 a 12 anos">6 à 12 anos</asp:ListItem>
                         </asp:DropDownList>
                        </br>

                    </ItemTemplate>
                </asp:Repeater>
			</div>
			<div>
			    <asp:Button ID="btnEnviarFormulario" runat="server" Text="Enviar" OnClick="btnEnviarFormulario_Click" />
			</div>
		</section>
    </form>
</body>
</html>
