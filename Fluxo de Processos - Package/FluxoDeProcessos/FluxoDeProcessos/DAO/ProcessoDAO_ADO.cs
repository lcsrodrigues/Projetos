using FluxoDeProcessos.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace FluxoDeProcessos.DAO
{
    public class ProcessoDAO_ADO
    {
        string connectionString = ConfigurationManager.ConnectionStrings["LaboratorioConnectionString"].ConnectionString;

        public bool deleteProcesso(Processo processoParam)
        {
            try
            {
                using(SqlConnection con = new SqlConnection(connectionString))
                {
                    string strCommand = "DELETE FROM PROCESSO " +
                                        "WHERE ID = '" + processoParam.ID + "'";

                    SqlCommand cmd = new SqlCommand(strCommand, con);
                    cmd.CommandType = CommandType.Text;

                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    con.Close();
                    return true;
                }
            }
            catch (Exception)
            {
                return false;
                throw;
            }
        }
        public List<Processo> getAllProcessos()
        {
            try
            {
                List<Processo> lstProcesso = new List<Processo>();

                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string strCommand = "SELECT ID, NUMERO_PROCESSO, VALOR, ESCRITORIO, DATA_CRIACAO " +
                                        "FROM PROCESSO " +
                                        "ORDER BY ID DESC";

                    SqlCommand cmd = new SqlCommand(strCommand, con);
                    cmd.CommandType = CommandType.Text;

                    con.Open();

                    SqlDataReader rdr = cmd.ExecuteReader();

                    while (rdr.Read())
                    {
                        Processo processo = new Processo();

                        processo.ID = Convert.ToInt32(rdr["ID"]);
                        processo.numeroDoProcesso = rdr["NUMERO_PROCESSO"].ToString();
                        processo.valor = Convert.ToDecimal(rdr["VALOR"]);
                        processo.escritorio = rdr["ESCRITORIO"].ToString();
                        processo.dataDeCriacaoDoProcesso = Convert.ToDateTime(rdr["DATA_CRIACAO"]);

                        lstProcesso.Add(processo);
                    }

                    con.Close();
                }
                return lstProcesso;
            }
            catch (Exception)
            {

                throw;
            }
        }
        public List<Processo> getProcessosByNum(string numeroProcesso)
        {
            try
            {
                List<Processo> lstProcesso = new List<Processo>();

                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string strCommand = "SELECT ID, NUMERO_PROCESSO, VALOR, ESCRITORIO, DATA_CRIACAO " +
                                        "FROM PROCESSO " +
                                        "WHERE NUMERO_PROCESSO = '"+ numeroProcesso + "'";

                    SqlCommand cmd = new SqlCommand(strCommand, con);
                    cmd.CommandType = CommandType.Text;

                    con.Open();

                    SqlDataReader rdr = cmd.ExecuteReader();

                    while (rdr.Read())
                    {
                        Processo processo = new Processo();

                        processo.ID = Convert.ToInt32(rdr["ID"]);
                        processo.numeroDoProcesso = rdr["NUMERO_PROCESSO"].ToString();
                        processo.valor = Convert.ToDecimal(rdr["VALOR"]);
                        processo.escritorio = rdr["ESCRITORIO"].ToString();
                        processo.dataDeCriacaoDoProcesso = Convert.ToDateTime(rdr["DATA_CRIACAO"]);

                        lstProcesso.Add(processo);
                    }

                    con.Close();
                }
                return lstProcesso;
            }
            catch (Exception)
            {

                throw;
            }
        }
        public bool createNewProcesso(Processo p1)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string strCommand = "INSERT INTO PROCESSO(NUMERO_PROCESSO, VALOR, ESCRITORIO, DATA_CRIACAO)"+
                                        "VALUES(@NUMERO_PROCESSO, @VALOR, @ESCRITORIO, @DATA_CRIACAO)";

                    SqlCommand cmd = new SqlCommand(strCommand, con);
                    cmd.CommandType = CommandType.Text;

                    cmd.Parameters.AddWithValue("@NUMERO_PROCESSO", p1.numeroDoProcesso);
                    cmd.Parameters.AddWithValue("@VALOR", p1.valor);
                    cmd.Parameters.AddWithValue("@ESCRITORIO", p1.escritorio);
                    cmd.Parameters.AddWithValue("@DATA_CRIACAO", p1.dataDeCriacaoDoProcesso);

                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();

                    return true;
                }
            }
            catch (Exception)
            {

                return false;
                throw;
            }
        }
        public bool updateProcesso(Processo p1)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string strCommand = "UPDATE PROCESSO " +
                                    "SET VALOR = @VALOR, DATA_CRIACAO = @DATA_CRIACAO, ESCRITORIO = @ESCRITORIO " +
                                    "WHERE ID = @ID";

                    SqlCommand cmd = new SqlCommand(strCommand, con);
                    cmd.CommandType = CommandType.Text;

                    cmd.Parameters.AddWithValue("@VALOR", p1.valor);
                    cmd.Parameters.AddWithValue("@DATA_CRIACAO", p1.dataDeCriacaoDoProcesso);
                    cmd.Parameters.AddWithValue("@ESCRITORIO", p1.escritorio);
                    cmd.Parameters.AddWithValue("@ID", p1.ID);
                    
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();

                    return true;
                }
            }
            catch (Exception)
            {
                return false;
                throw;
            }
        }
    }
}