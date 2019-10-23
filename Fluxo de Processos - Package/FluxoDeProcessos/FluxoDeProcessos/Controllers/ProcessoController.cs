using FluxoDeProcessos.DAO;
using FluxoDeProcessos.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FluxoDeProcessos.Facade;
using System.Web.Http.Cors;

namespace FluxoDeProcessos.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ProcessoController : ApiController
    {
        // GET: api/Processo
        public IHttpActionResult Get()
        {
            try
            {
                //ProcessoDAO processoDAO = new ProcessoDAO();
                ProcessoDAO_ADO processoDAO_ADO = new ProcessoDAO_ADO();
                return Ok(processoDAO_ADO.getAllProcessos());
            }
            catch (Exception)
            {

                throw;
            }
        }

        // GET: api/Processo/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Processo
        public IHttpActionResult Post([FromBody]Processo p1)
        {
            try
            {
                //for(int i=0; i<100; i++)
                //{     

                    //Cria um nome de escritório aleatorio do 0 ao 3
                    //var rand = new Random();
                    //List<int> bytes = new List<int>();
                    //bytes.Add(rand.Next(4));
                    //string nomeEscritorio = "Escritório " + bytes[0];

                    Processo processo = new Processo();
                    //ProcessoDAO processoDAO = new ProcessoDAO();
                    ProcessoDAO_ADO processoDAO_ADO = new ProcessoDAO_ADO();
                    ProcessoFacade processoFacade = new ProcessoFacade();

                    //Gera um numero de processo que nunca se repete
                    //string numProcesso = processoFacade.gerarNumProcesso();

                    if(p1.numeroDoProcesso != "")
                    {
                        processo.numeroDoProcesso = p1.numeroDoProcesso;
                        processo.dataDeCriacaoDoProcesso = p1.dataDeCriacaoDoProcesso;
                        processo.valor = p1.valor;
                        processo.escritorio = p1.escritorio;

                        //processoDAO.createNewProcesso(processo);
                        bool result = processoFacade.verificarProcessoExistente(p1.numeroDoProcesso);
                        if (result)
                        {
                            processoDAO_ADO.createNewProcesso(processo);
                            return Ok();
                        }
                        else
                        {
                            return Content(HttpStatusCode.PreconditionFailed, "Processo já existente");
                        }
                }
                else
                {
                    return Content(HttpStatusCode.PreconditionFailed, "Digite um número de processo");
                }
                    
                //}

                
            }
            catch (Exception)
            {

                throw;
            }
        }

        // PUT: api/Processo/5
        public IHttpActionResult Put(int id, Processo processo)
        {
            try
            {
                ProcessoDAO_ADO processoDAO_ADO = new ProcessoDAO_ADO();
                processo.ID = id;
                processoDAO_ADO.updateProcesso(processo);

                return Ok();
            }
            catch (Exception)
            {
                return Content(HttpStatusCode.PreconditionFailed, "Ocorreu um erro.");
                throw;
            }
        }

        // DELETE: api/Processo/5
        public IHttpActionResult Delete(int id)
        {
            try
            {
                ProcessoDAO_ADO processoDAO_ADO = new ProcessoDAO_ADO();
                Processo processo = new Processo
                {
                    ID = id
                };

                processoDAO_ADO.deleteProcesso(processo);
                return Ok();
            }
            catch (Exception)
            {
                return Content(HttpStatusCode.PreconditionFailed, "Ocorreu um erro.");
                throw;
            }
        }
    }
}
