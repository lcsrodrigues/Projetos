using FluxoDeProcessos.DAO;
using FluxoDeProcessos.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FluxoDeProcessos.Facade
{
    public class ProcessoFacade
    {
        public string gerarNumProcesso()
        {
            string numProcesso;
            List<Processo> lstProcesso;
            do
            {
                var rand = new Random();
                var bytes = new byte[1];

                rand.NextBytes(bytes);
                numProcesso = "PR" + bytes[0];

                ProcessoDAO processoDAO = new ProcessoDAO();
                
                lstProcesso = processoDAO.getProcessosByNum(numProcesso);

            } while (lstProcesso.Count > 0);

            return numProcesso;
        }

        public bool verificarProcessoExistente(string num_processo)
        {
            List<Processo> lstProcesso = new List<Processo>();
            ProcessoDAO_ADO processoDAO_ADO = new ProcessoDAO_ADO();

            lstProcesso = processoDAO_ADO.getProcessosByNum(num_processo);

            if(lstProcesso.Count > 0)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
    }
}