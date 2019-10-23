<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="ListaDeTarefas.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Lista de tarefas | Home</title>
	<link rel='stylesheet' type='text/css' href="../css/style.css" />
</head>
<body>
    <form id="formularioLogin" runat="server">
        <section id='login'>
            <div class='alertBox' id='alertBox' runat="server" visible="false">
			    <div>
				    <label>Os campos login e senha são obrigatórios</label>
			    </div>
		    </div>
		    <div class='loginBox'>
			    <header>
				    <span>LOGIN</span>
			    </header>
			    <div class='content'>
				    <div class='formLogin'>
					    <label>Login</label>
					    <asp:TextBox placeholder='Login' id='iptLogin' runat="server"></asp:TextBox>
				    </div>
				    <div class='formLogin'>
					    <label>Senha</label>
					    <asp:TextBox type="password" placeholder='Senha' id='iptSenha' runat="server"></asp:TextBox>
				    </div>
			    </div>
			    <div class='footer'>
                    <asp:Button ID="btnLogin" runat="server" Text="LOGAR" OnClick="btnLogin_Click"/>
                    <div class="esqueciMinhaSenha">
                        <a id="btnEsqueciSenha" runat="server" href="EsqueciMinhaSenha.aspx">Esqueci minha senha</a>
                    </div>
			    </div>
		    </div>
		    <div class='infoBox'>
			    <div>
				    <label>Ainda não possui um cadastro? <a href="CadastroPessoa.aspx">Cadastre-se</a></label>
			    </div>
		    </div>
	</section>
    </form>
</body>
</html>