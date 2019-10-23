using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ListaDeTarefas.dao;
using ListaDeTarefas.model;

namespace ListaDeTarefas
{
    public partial class Login : System.Web.UI.Page
    {
        PessoaDAO dao;
        Pessoa user;
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnLogin_Click(object sender, EventArgs e)
        {
            alertBox.Visible = false;
            try
            {
                if(iptLogin.Text != "" || iptSenha.Text != "")
                {
                    dao = new PessoaDAO();
                    user = new Pessoa();

                    user.email = iptLogin.Text;
                    user.senha = iptSenha.Text;

                    user = dao.getPessoaByEmail(user);

                    if (user.CPF > 0)
                    {
                        Response.Redirect("/views/Home.aspx?un=" + user.nome + "&uid=" + user.ID);
                    }
                }
                else
                {
                    alertBox.Visible = true;
                }
                
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}