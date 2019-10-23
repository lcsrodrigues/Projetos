using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ListaDeTarefas.model;
using ListaDeTarefas.dao;
using ListaDeTarefas.connection;

namespace ListaDeTarefas
{
    public partial class CadastroPessoa : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }

        protected void btnCadastrar_Click(object sender, EventArgs e)
        {
            errorBox.Visible = false;
            successBox.Visible = false;
            alertBox.Visible = false;

            Page.Validate();

            if(Page.IsValid)
            {
                try
                {
                    Pessoa pessoa = new Pessoa();
                    PessoaDAO pessoaDAO = new PessoaDAO();

                    pessoa.nome = iptNome.Text;
                    pessoa.email = iptEmail.Text;
                    pessoa.genero = sltGenero.Text;
                    pessoa.senha = iptSenha.Text;
                    pessoa.CPF = Convert.ToInt64(iptCPF.Text);
                    
                    String confirmarSenha = iptConfirmaSenha.Text;

                    if (pessoa.senha != confirmarSenha)
                    {
                        alertBox.InnerText = "As senhas não coincidem";
                        alertBox.Visible = true;
                    }
                    else
                    {
                        var validator = pessoaDAO.getPessoaByCPF(pessoa).CPF;

                        if(validator < 1)
                        { 
                            bool result = pessoaDAO.createNewPessoa(pessoa);

                            if(result)
                            {
                                this.clearForm();
                                successBox.Visible = true;
                            }
                            else
                            {
                                errorBox.Visible = true;
                            }
                        }
                        else
                        {
                            alertBox.InnerText = "Usuário já existente";
                            alertBox.Visible = true;
                        }
                    }
                }
                catch (Exception ex)
                {
                    errorBox.InnerText = "Ocorreu um erro interno --> "+ ex.Message;
                    errorBox.Visible = true;
                }
            }
        }

        protected void clearForm()
        {
            iptCPF.Text = "";
            iptNome.Text = "";
            iptEmail.Text = "";
            sltGenero.Text = "";
            iptSenha.Text = "";
            iptConfirmaSenha.Text = "";
        }
    }
}