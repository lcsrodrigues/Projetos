using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ListaDeTarefas.model;
using ListaDeTarefas.connection;

namespace ListaDeTarefas.dao
{
    public class TarefaDAO
    {
        connectionDataContext cdc;
        public List<Tarefa> getAllTarefas()
        {
            try
            {
                cdc = new connectionDataContext();

                List<Tarefa> tarefas = new List<Tarefa>();
                Tarefa tarefa;
                Pessoa pessoa;
                
                var sourceTarefa = from t in cdc.TAREFA
                                   select t;

                foreach (var t1 in sourceTarefa)
                {
                    tarefa = new Tarefa();
                    
                    tarefa.ID = t1.ID;
                    tarefa.titulo = t1.TITULO;
                    tarefa.descricao = t1.DESCRICAO;
                    tarefa.dtInicio = t1.DT_INICIO;
                    tarefa.dtFim = Convert.ToDateTime(t1.DT_FIM);

                    pessoa = new Pessoa();
                    pessoa.ID = t1.RESPONSAVEL_ID;

                    tarefa.responsavelTarefa = pessoa;

                    tarefas.Add(tarefa);
                }

                return tarefas;

            }
            catch (Exception)
            {

                throw;
            }
            finally
            {
                cdc.Dispose();
            }
        }

        public Tarefa getTarefaByID(int ID)
        {
            try
            {
                cdc = new connectionDataContext();

                Tarefa tarefa = new Tarefa();

                var sourceTarefa = from t in cdc.TAREFA
                                   where t.ID == ID
                                   select t;

                foreach (var t1 in sourceTarefa)
                {
                    tarefa.ID = t1.ID;
                    tarefa.descricao = t1.DESCRICAO;
                    tarefa.dtInicio = t1.DT_INICIO;
                    tarefa.dtFim = Convert.ToDateTime(t1.DT_FIM);
                    tarefa.responsavelTarefa.ID = t1.RESPONSAVEL_ID;
                }

                return tarefa;

            }
            catch (Exception)
            {

                throw;
            }
            finally
            {
                cdc.Dispose();
            }
        }

        public bool createNewTarefa(Tarefa tarefa)
        {
            try
            {
                cdc = new connectionDataContext();
                TAREFA oTarefa = new TAREFA();

                oTarefa.TITULO = tarefa.titulo;
                oTarefa.DESCRICAO = tarefa.descricao;
                oTarefa.DT_INICIO = tarefa.dtInicio;
                oTarefa.DT_FIM = tarefa.dtFim;
                oTarefa.RESPONSAVEL_ID = tarefa.responsavelTarefa.ID;
                
                cdc.TAREFA.InsertOnSubmit(oTarefa);
                cdc.SubmitChanges();

                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
            finally
            {
                cdc.Dispose();
            }
        }

        //public bool deleteTarefa(Tarefa tarefa)
        //{
        //    cdc = new connectionDataContext();
        //    try
        //    {
        //        var p1 = cdc.PESSOA.First(p => p.ID == pessoa.ID);
        //        cdc.PESSOA.DeleteOnSubmit(p1);
        //        cdc.SubmitChanges();

        //        return true;
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }

        //}

        //public bool updateTarefa(Tarefa tarefa)
        //{
        //    cdc = new connectionDataContext();
        //    try
        //    {
        //        var p1 = cdc.PESSOA.First(p => p.ID == pessoa.ID);
        //        p1.NOME = pessoa.nome;
        //        p1.CPF = pessoa.CPF;
        //        p1.GENERO = pessoa.genero;
        //        p1.SENHA = pessoa.senha;
        //        p1.EMAIL = pessoa.email;

        //        cdc.SubmitChanges();

        //        return true;
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }
        //}
    }
}