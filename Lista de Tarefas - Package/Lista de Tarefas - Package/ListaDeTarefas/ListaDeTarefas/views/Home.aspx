<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="ListaDeTarefas.views.Home" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Lista de Tarefas | Home</title>
	<link rel="stylesheet" type="text/css" href="../css/style.css" />
</head>
<body>
    <form id="formularioHome" runat="server">
        <section id='home'>
			<div class='homeBox'>
				<header>
					<span><a href="/views/Login.aspx">Logout</a></span>
					<span> | </span>
					<span id="nomeUser" runat="server">-</span>
				</header>
				<div class='createTarefa'>
					<div class='tarefaBox'>
						<div class='header'>
							<span>CRIAR NOVA TAREFA</span>
						</div>
						<div class='body'>
							<div class='formTarefa'>
								<label>Título</label>
								<asp:TextBox ID="ipTitulo" placeholder='Título' runat="server"></asp:TextBox>
							</div>
							<div class='formTarefa'>
								<label>Descrição</label>
								<asp:TextBox id="iptDescricao" TextMode="multiline" Columns="50" Rows="5" runat="server" />
							</div>
							<div class='formTarefa'>
								<label>Data início</label>
								<asp:TextBox ID="iptDataInicio" TextMode="Date" runat="server"></asp:TextBox>
							</div>
							<div class='formTarefa'>
								<label>Data fim</label>
								<asp:TextBox ID="iptDataFim" TextMode="Date" runat="server"></asp:TextBox>
							</div>
							<div class='formTarefa'>
								<label>Responsável</label>
                                <asp:DropDownList ID="sltResponsavel" runat="server">
                                    
                                </asp:DropDownList>
							</div>
						</div>
						<div class='footer'>
                            <asp:Button ID="btnSalvar" runat="server" Text="SALVAR" OnClick="btnSalvar_Click" />
						</div>
					</div>
				</div>
				<div class="listTarefa">
					<div class='listaTarefaBox'>
						<div class='header'>
							<span>LISTA DE TAREFAS</span>
						</div>
						<div class='body'>
                            <asp:GridView ID="gvTarefas" runat="server"></asp:GridView>
						</div>
						<div class='footer'>
						</div>
					</div>
				</div>
				
			</div>
		</section>
    </form>
</body>
</html>