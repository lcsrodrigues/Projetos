<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CadastroPessoa.aspx.cs" Inherits="ListaDeTarefas.CadastroPessoa" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Lista de tarefas | Cadastro</title>
	<link rel='stylesheet' type='text/css' href="../css/style.css" />
</head>
<body>
    <form id="formularioCadastroPessoa" runat="server">
        <section id='cadastro'>
            <div class='errorBox' id='errorBox' runat="server" visible="false">
			    <div>
				    <label>Ocorreu um erro interno</label>
			    </div>
		    </div>
		    <div class='alertBox' id='alertBox' runat="server" visible="false">
			    <div>
				    <label>O campo email é obrigatório</label>
			    </div>
		    </div>
		    <div class='successBox' id='successBox' runat="server" visible="false">
			    <div>
				    <label>Cadastro realizado com sucesso</label>
			    </div>
		    </div>
		    <div class='cadastroBox'>
			    <header>
				    <span>CADASTRO</span>
			    </header>
			    <div class='content'>
				    <div class='formLogin'>
					    <label>CPF<b class="iptObrigatorio">*</b></label>
					    <asp:TextBox placeholder='CPF' id='iptCPF' runat="server"></asp:TextBox>
                        <asp:RequiredFieldValidator CssClass="reqValitador" ControlToValidate="iptCPF" ID="iptCPFValidator" runat="server" ErrorMessage="Este campo não pode ficar em branco.">Este campo não pode ficar em branco.</asp:RequiredFieldValidator>
				    </div>
                    <div class='formLogin'>
					    <label>Nome completo<b class="iptObrigatorio">*</b></label>
					    <asp:TextBox placeholder='Nome completo' id='iptNome' runat="server"></asp:TextBox>
                        <asp:RequiredFieldValidator CssClass="reqValitador" ControlToValidate="iptNome" ID="iptNomeValidator" runat="server" ErrorMessage="Este campo não pode ficar em branco.">Este campo não pode ficar em branco.</asp:RequiredFieldValidator>
				    </div>
				    <div class='formLogin'>
					    <label>E-mail<b class="iptObrigatorio">*</b></label>
					    <asp:TextBox placeholder='Email' id='iptEmail' runat="server"></asp:TextBox>
                        <asp:RequiredFieldValidator CssClass="reqValitador" ControlToValidate="iptEmail" ID="iptEmailValidator" runat="server" ErrorMessage="Este campo não pode ficar em branco.">Este campo não pode ficar em branco.</asp:RequiredFieldValidator>
				    </div>
				    <div class='formLogin'>
					    <label>Gênero<b class="iptObrigatorio">*</b></label>

                        <asp:DropDownList id="sltGenero" runat="server">
                            <asp:ListItem value="M">Masculino</asp:ListItem>
                            <asp:ListItem value="F">Feminino</asp:ListItem>
                            <asp:ListItem value="NI">Não informar</asp:ListItem>
                        </asp:DropDownList>
                        <asp:RequiredFieldValidator CssClass="reqValitador" ControlToValidate="sltGenero" ID="sltGeneroValidator" runat="server" ErrorMessage="Este campo não pode ficar em branco.">Este campo não pode ficar em branco.</asp:RequiredFieldValidator>
				    </div>
				    <div class='formLogin'>
					    <label>Senha<b class="iptObrigatorio">*</b></label>
                        <asp:TextBox type='password' placeholder='Senha' id='iptSenha' runat="server"></asp:TextBox>
                        <asp:RequiredFieldValidator CssClass="reqValitador" ControlToValidate="iptSenha" ID="iptSenhaValidator" runat="server" ErrorMessage="Este campo não pode ficar em branco.">Este campo não pode ficar em branco.</asp:RequiredFieldValidator>
				    </div>
                    <div class='formLogin'>
					    <label>Confirmar senha<b class="iptObrigatorio">*</b></label>
					    <asp:TextBox type='password' placeholder='Confirma senha' id='iptConfirmaSenha' runat="server"></asp:TextBox>
                        <asp:RequiredFieldValidator CssClass="reqValitador" ControlToValidate="iptConfirmaSenha" ID="iptConfirmaSenhaValidator" runat="server" ErrorMessage="Este campo não pode ficar em branco.">Este campo não pode ficar em branco.</asp:RequiredFieldValidator>
				    </div>
			    </div>
			    <div class='footer'>
                    <asp:Button ID="btnCadastrar" runat="server" Text="SALVAR" OnClick="btnCadastrar_Click" />
			    </div>
		    </div>
		    <div class='infoBox'>
			    <div>
				    <label>Retornar para a tela de <a href="Login.aspx">Login</a></label>
			    </div>
		    </div>
	    </section>
    </form>
</body>
</html>
