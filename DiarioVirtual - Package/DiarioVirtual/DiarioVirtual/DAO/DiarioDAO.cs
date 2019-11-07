using DiarioVirtual.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace DiarioVirtual.DAO
{
    public class DiarioDAO
    {
        string connectionString = ConfigurationManager.ConnectionStrings["DiarioConnectionString"].ConnectionString;

        public bool createDiario(Diario d1 )
        {
            try
            {
                using(SqlConnection con = new SqlConnection(connectionString))
                {

                    string strCommand = "INSERT INTO DIARIO(TITULO, NOME, DATA_CRIACAO, DESCRICAO, ARQUIVO) VALUES(@TITULO, @NOME, @DATA_CRIACAO, @DESCRICAO, @ARQUIVO)";

                    SqlCommand cmd = new SqlCommand(strCommand, con);

                    cmd.CommandType = CommandType.Text;

                    cmd.Parameters.AddWithValue("@TITULO",d1.titulo);
                    cmd.Parameters.AddWithValue("@NOME", d1.nome);
                    cmd.Parameters.AddWithValue("@DATA_CRIACAO", d1.dataCriacao);
                    cmd.Parameters.AddWithValue("@DESCRICAO", d1.descricao);
                    cmd.Parameters.AddWithValue("@ARQUIVO",d1.arquivo);

                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();

                    return true;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        public List<Diario> readerAllDiario()
        {
            try
            {
                using(SqlConnection con = new SqlConnection(connectionString))
                {
                    List<Diario> lstDiario = new List<Diario>();
                    Diario diario;

                    string strCommand = "SELECT * FROM DIARIO ORDER BY ID DESC";

                    SqlCommand cmd = new SqlCommand(strCommand, con);
                    cmd.CommandType = CommandType.Text;

                    con.Open();

                    SqlDataReader sdr = cmd.ExecuteReader();

                    while(sdr.Read())
                    {
                         diario = new Diario();

                        diario.ID = Convert.ToInt32(sdr["ID"]);
                        diario.titulo = sdr["TITULO"].ToString();
                        diario.nome = sdr["NOME"].ToString();
                        diario.descricao = sdr["DESCRICAO"].ToString();
                        diario.dataCriacao = Convert.ToDateTime(sdr["DATA_CRIACAO"].ToString());
                        //diario.arquivo = Convert.ToSByte(sdr["ARQUIVO"]);

                        lstDiario.Add(diario);
                    }

                    con.Close();

                    return lstDiario;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        public Diario readerDiarioByID(int id)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    Diario diario = new Diario();

                    string strCommand = "SELECT * FROM DIARIO WHERE ID = "+id+"";

                    SqlCommand cmd = new SqlCommand(strCommand, con);
                    cmd.CommandType = CommandType.Text;

                    con.Open();

                    SqlDataReader sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {
                        diario.ID = Convert.ToInt32(sdr["ID"]);
                        diario.titulo = sdr["TITULO"].ToString();
                        diario.nome = sdr["NOME"].ToString();
                        diario.descricao = sdr["DESCRICAO"].ToString();
                        diario.dataCriacao = Convert.ToDateTime(sdr["DATA_CRIACAO"].ToString());
                        //diario.arquivo = Convert.ToByte(sdr["ARQUIVO"]);
                    }

                    con.Close();

                    return diario;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}