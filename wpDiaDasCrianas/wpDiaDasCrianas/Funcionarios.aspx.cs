using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Model;

namespace wpDiaDasCrianas
{
    public partial class Funcionarios : System.Web.UI.Page
    {
        private ModelDataContext mdc;
        protected void Page_Load(object sender, EventArgs e)
        {
            if(!IsPostBack)
            { 
                this.listarFuncionarios();
            }
        }

        protected void gwFuncionarios_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            Response.Write(e.CommandSource);
        }

        protected void listarFuncionarios()
        {
            mdc = new ModelDataContext();

            try
            {
                var sourceFuncionarios = from funcionario in mdc.FUNCIONARIOS
                                         select funcionario;

                gwFuncionarios.DataSource = sourceFuncionarios;
                gwFuncionarios.DataBind();

            }
            catch
            {
                throw;
            }
            finally
            {
                mdc.Dispose();
            }
        }

        protected void btnSalvar_Click(object sender, EventArgs e)
        {
            mdc = new ModelDataContext();
            FUNCIONARIOS funcionarios = new FUNCIONARIOS();

            funcionarios.NOME = iptNomeFuncionario.Text;
            funcionarios.MATRICULA = Convert.ToInt32(iptMatriculaFuncionario.Text);
            funcionarios.TELEFONE = iptTelefoneFuncionario.Text;
            funcionarios.EMAIL = iptEmailFuncionario.Text;

            try
            {
                mdc.FUNCIONARIOS.InsertOnSubmit(funcionarios);
                mdc.SubmitChanges();
                Response.Redirect(Request.RawUrl);
            }
            catch(Exception ex)
            {
                Response.Write("<script>alert('Ocorreu um erro')</script>");
                Console.WriteLine(ex);
            }
            
        }
    }
}