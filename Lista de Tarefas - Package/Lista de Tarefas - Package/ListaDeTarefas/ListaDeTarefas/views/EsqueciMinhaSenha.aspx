<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="EsqueciMinhaSenha.aspx.cs" Inherits="ListaDeTarefas.views.EsqueciMinhaSenha" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Lista de tarefas | Home</title>
	<link rel='stylesheet' type='text/css' href="../css/style.css" />
</head>
<body>
    <form id="formularioLogin" runat="server">
        <section id='esqueciSenha'>
		<div class='loginBox'>
			<header>
				<span>RECUPERAR SENHA</span>
			</header>
			<div class='content'>
				<div class='formEsqueciSenha'>
					<label>Informe o seu e-mail</label>
					<asp:TextBox placeholder='Login' id='iptEmail' runat="server"></asp:TextBox>
				</div>
			</div>
			<div class='footer'>
                <asp:Button ID="btnEnviarEmail" runat="server" Text="ENVIAR" OnClick="btnEnviarEmail_Click"/>
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