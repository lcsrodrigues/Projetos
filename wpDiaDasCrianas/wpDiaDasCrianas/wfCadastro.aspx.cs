using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Model;

namespace wpDiaDasCrianas
{
    public partial class wfCadastro : System.Web.UI.Page
    {
        private ModelDataContext mdc;

        protected void Page_Load(object sender, EventArgs e)
        {
            if(!IsPostBack)
            {

            }
        }

        protected void btnConsultaMatricula_Click(object sender, EventArgs e)
        {
            mdc = new ModelDataContext();

            var sourceFunc = from func in mdc.FUNCIONARIOS
                             where func.MATRICULA == int.Parse(iptMatricula.Text.Trim())
                             select func;

            foreach(FUNCIONARIOS func in sourceFunc)
            {
                iptNomeEmpregado.Text = func.NOME.Trim();
                iptEmailEmpregado.Text = func.EMAIL.Trim();
                iptContatoEmpregado.Text = func.TELEFONE.Trim();

                detalhesEmpregado.Visible = true;
            }
        }

        protected void btnEnviarFormulario_Click(object sender, EventArgs e)
        {
            mdc = new ModelDataContext();
            try
            {
                int totalDependentes = Convert.ToInt32(levarQuantosFilhos.SelectedValue);
                COLABORADOR colaboradores = new COLABORADOR();
                FILHO filho;

                colaboradores.NOME = iptNomeEmpregado.Text.Trim();
                colaboradores.MATRICULA = Convert.ToInt32(iptMatricula.Text.Trim());
                colaboradores.TELEFONE = iptContatoEmpregado.Text.Trim();
                colaboradores.EMAIL = iptEmailEmpregado.Text.Trim();
                colaboradores.CONJUGE = iptNomeConjuge.Text.Trim();

                mdc.COLABORADOR.InsertOnSubmit(colaboradores);
                mdc.SubmitChanges();

                foreach (RepeaterItem item in this.dependentes.Items)
                {
                    filho = new FILHO();

                    TextBox nomeFilho = (TextBox)item.FindControl("iptNomeDependente");
                    filho.NOME = nomeFilho.Text.Trim();
                    DropDownList sltFaixaEtaria = new DropDownList();
                    sltFaixaEtaria = (DropDownList)item.FindControl("sltFaixaEtaria");
                    filho.FAIXA_ETARIA = sltFaixaEtaria.SelectedValue.Trim();
                    filho.PAI = Convert.ToInt32(iptMatricula.Text.Trim());
                    mdc.FILHO.InsertOnSubmit(filho);
                    mdc.SubmitChanges();
                }

                detalhesEmpregado.Visible = false;

                //Response.Redirect("Sucesso.aspx");

            }
            catch(Exception ex)
            {
                Console.WriteLine(ex);
                throw;
            }
            finally
            {
                mdc.Dispose();
            }
        }

        protected void levarQuantosFilhos_SelectedIndexChanged(object sender, EventArgs e)
        {
            if(levarQuantosFilhos.SelectedValue != "")
            { 
                int totalDependentes = Convert.ToInt32(levarQuantosFilhos.SelectedValue);
                List<int> lstDependentes = new List<int>();

                for(int I = 0; I< totalDependentes; I++)
                {
                    lstDependentes.Add(I);
                }

                dependentes.DataSource = lstDependentes;
                dependentes.DataBind();
                dependentes.Visible = true;
            }
            else
            {
                dependentes.Visible = false;
            }
        }

        protected void levarConjuge_SelectedIndexChanged(object sender, EventArgs e)
        {
            if(levarConjuge.SelectedValue == "Sim")
            {
                divConjuge.Visible = true;
            }
            else
            {
                divConjuge.Visible = false;
            }
        }
    }
}