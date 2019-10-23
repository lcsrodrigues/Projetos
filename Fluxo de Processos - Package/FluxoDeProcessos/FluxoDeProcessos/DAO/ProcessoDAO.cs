using FluxoDeProcessos.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using FluxoDeProcessos.Connection;

namespace FluxoDeProcessos.DAO
{
    public class ProcessoDAO
    {
        ConnectionDataContext cdc;
        public List<Processo> getAllProcessos()
        {
            try
            {
                cdc = new ConnectionDataContext();
                Processo processo;
                List<Processo> lstProcesso = new List<Processo>();

                var dataSourceProcesso = from p in cdc.PROCESSO
                                         orderby p.ID descending
                                         select p;

                foreach(var p1 in dataSourceProcesso)
                {
                    processo = new Processo
                    {
                        ID = p1.ID,
                        numeroDoProcesso = p1.NUMERO_PROCESSO,
                        valor =  Convert.ToDecimal(p1.VALOR),
                        escritorio = p1.ESCRITORIO,
                        dataDeCriacaoDoProcesso = p1.DATA_CRIACAO
                    };

                    lstProcesso.Add(processo);
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
                cdc = new ConnectionDataContext();
                Processo processo;
                List<Processo> lstProcesso = new List<Processo>();

                var dataSourceProcesso = from p in cdc.PROCESSO
                                         where p.NUMERO_PROCESSO == numeroProcesso
                                         select p;

                foreach (var p1 in dataSourceProcesso)
                {
                    processo = new Processo
                    {
                        ID = p1.ID,
                        numeroDoProcesso = p1.NUMERO_PROCESSO,
                        valor = Convert.ToDecimal(p1.VALOR),
                        escritorio = p1.ESCRITORIO,
                        dataDeCriacaoDoProcesso = p1.DATA_CRIACAO
                    };

                    lstProcesso.Add(processo);
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
                ConnectionDataContext cdc = new ConnectionDataContext();
                PROCESSO processo = new PROCESSO();

                processo.NUMERO_PROCESSO = p1.numeroDoProcesso;
                processo.DATA_CRIACAO = p1.dataDeCriacaoDoProcesso;
                processo.VALOR = Math.Round(Convert.ToDecimal(p1.valor), 2);


                processo.ESCRITORIO = p1.escritorio;
                
                cdc.PROCESSO.InsertOnSubmit(processo);
                cdc.SubmitChanges();

                return true;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}