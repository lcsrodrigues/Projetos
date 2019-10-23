using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ListaDeTarefas.dao;
using ListaDeTarefas.model;

namespace ListaDeTarefas.views
{
    public partial class Home : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                try
                {
                    getAllTarefas();
                    getAllPessoas();
                }
                catch (Exception ex)
                {

                    Console.WriteLine(ex);
                    Response.Redirect("/views/Login.aspx");
                }
            }
        }

        protected void getAllPessoas()
        {
            try
            {
                PessoaDAO pessoaDAO = new PessoaDAO();
                List<Pessoa> lstPessoas = pessoaDAO.getAllPessoa();
                ListItem items;

                foreach (Pessoa p1 in lstPessoas)
                {
                    items = new ListItem();
                    
                    items.Text = p1.nome;
                    items.Value = p1.ID.ToString();
                    
                    sltResponsavel.Items.Add(items);
                }

                sltResponsavel.DataBind();
            }
            catch (Exception)
            {

                throw;
            }
        }

        protected void getAllTarefas()
        {
            try
            {
                TarefaDAO tarefaDAO = new TarefaDAO();

                nomeUser.InnerText = "Olá "+Request.QueryString["un"].ToString().ToUpper();
                gvTarefas.DataSource = tarefaDAO.getAllTarefas();
                gvTarefas.DataBind();
            }
            catch (Exception)
            {
                throw;
            }
        }

        protected void btnSalvar_Click(object sender, EventArgs e)
        {
            try
            {
                Tarefa tarefa = new Tarefa();
                TarefaDAO tarefaDAO = new TarefaDAO();
                
                tarefa.titulo = ipTitulo.Text;
                tarefa.descricao = iptDescricao.Text;
                tarefa.dtInicio = Convert.ToDateTime(iptDataInicio.Text);
                tarefa.dtFim = Convert.ToDateTime(iptDataFim.Text);

                Pessoa pessoa = new Pessoa();
                pessoa.ID = Convert.ToInt32(sltResponsavel.SelectedValue);

                tarefa.responsavelTarefa = pessoa;

                tarefaDAO.createNewTarefa(tarefa);
                clearForm();
                Page.Response.Redirect(Page.Request.Url.ToString());
            }
            catch (Exception)
            {

                throw;
            }
        }

        protected void clearForm()
        {
            ipTitulo.Text = "";
            iptDescricao.Text = "";
            iptDataInicio.Text = "";
            iptDataFim.Text = "";
        }
    }
}