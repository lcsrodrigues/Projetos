using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Model;

namespace wpDiaDasCrianas
{
    public partial class ExcluirFuncionario : System.Web.UI.Page
    {
        ModelDataContext mdc;
        protected void Page_Load(object sender, EventArgs e)
        {
            var idFuncionario = Convert.ToInt32(Request.QueryString["id"]);
            mdc = new ModelDataContext();

            try
            {
                var sourceFuncionario = from funcionario in mdc.FUNCIONARIOS
                                        where funcionario.ID == idFuncionario
                                        select funcionario;

                foreach(FUNCIONARIOS func in sourceFuncionario)
                {
                    iptMatricula.Text = func.MATRICULA.ToString();
                    iptNomeEmpregado.Text = func.NOME;
                    iptEmailEmpregado.Text = func.EMAIL;
                    iptContatoEmpregado.Text = func.TELEFONE;
                }
                                                 
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

        protected void btnExcluir_Click(object sender, EventArgs e)
        {
            var idFuncionario = Convert.ToInt32(Request.QueryString["id"]);
            mdc = new ModelDataContext();

            try
            {
                var sourceFuncionario = from funcionario in mdc.FUNCIONARIOS
                                        where funcionario.ID == idFuncionario
                                        select funcionario;

                foreach (FUNCIONARIOS func in sourceFuncionario)
                {
                    mdc.FUNCIONARIOS.DeleteOnSubmit(func);
                    mdc.SubmitChanges();
                }
                Response.Redirect("Funcionarios.aspx");
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
    }
}