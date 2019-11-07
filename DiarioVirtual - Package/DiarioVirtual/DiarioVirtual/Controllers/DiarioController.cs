using DiarioVirtual.DAO;
using DiarioVirtual.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace DiarioVirtual.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class DiarioController : ApiController
    {
        // GET: api/Diario
        public IHttpActionResult Get()
        {
            try
            {
                DiarioDAO diarioDAO = new DiarioDAO();
                return Ok( diarioDAO.readerAllDiario() );
            }
            catch (Exception)
            {
                throw;
            }
        }

        // GET: api/Diario/5
        public IHttpActionResult Get(int id)
        {
            try
            {
                DiarioDAO diarioDAO = new DiarioDAO();

                return Ok( diarioDAO.readerDiarioByID(id) );
            }
            catch (Exception)
            {

                throw;
            }
        }

        // POST: api/Diario
        public IHttpActionResult Post([FromBody]Diario d1)
        {
            try
            {
                Diario diario = new Diario();
                DiarioDAO diarioDAO = new DiarioDAO();

                diario.titulo = d1.titulo;
                diario.nome = d1.nome;
                diario.dataCriacao = d1.dataCriacao;
                diario.descricao = d1.descricao;
                diario.arquivo = d1.arquivo;

                diarioDAO.createDiario(diario);

                return Ok();
            }
            catch (Exception)
            {
                throw;
            }
        }

        // PUT: api/Diario/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Diario/5
        public void Delete(int id)
        {
        }
    }
}
