using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
//using System.Web.Http.Cors;
using WebApiListaTarefas.Connection;
using WebApiListaTarefas.Models;
using WebApiListaTarefas.DAO;

namespace WebApiListaTarefas.Controllers
{
    //[EnableCors(origins: "https://localhost:44382/", headers: "*", methods: "*")]
    public class PessoasController : ApiController
    {
        // GET: api/Pessoas
        public IHttpActionResult Get()
        {
            try
            {
                PessoaDAO dao = new PessoaDAO();

                return Ok(dao.getAllPessoas());
                
            }
            catch (Exception)
            {
                throw;
            }
        }

        // GET: api/Pessoas/5
        public IHttpActionResult Get(int ID)
        {
            try
            {
                PessoaDAO dao = new PessoaDAO();
                Pessoa pessoa = dao.getPessoaByID(ID);

                if(pessoa.ID == 0)
                {
                    return null;
                }
                else
                {
                    return Ok(pessoa);
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        // GET: api/Pessoas/?CPF=Nome
        public IHttpActionResult Get(Int64 CPF)
        {
            try
            {
                PessoaDAO dao = new PessoaDAO();
                Pessoa pessoa = dao.getPessoaByCPF(CPF);

                if (pessoa.ID == 0)
                {
                    return null;
                }
                else
                {
                    return Ok(pessoa);
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        // POST: api/Pessoas
        public IHttpActionResult Post([FromBody]Pessoa value)
        {
            try
            {
                PessoaDAO dao = new PessoaDAO();
                Pessoa pessoa = new Pessoa();

                pessoa.nome = value.nome;
                pessoa.email = value.email;
                pessoa.genero = value.genero;
                pessoa.senha = value.senha;
                pessoa.CPF = value.CPF;

                bool result = dao.createNewPessoa(pessoa);

                return Ok();
            }
            catch (Exception)
            {
                throw;
            }
        }

        // PUT: api/Pessoas/5
        public void Put(int id, [FromBody]Pessoa value)
        {
            try
            {
                PessoaDAO dao = new PessoaDAO();
                Pessoa pessoa = new Pessoa();
                
                pessoa.ID = id;
                pessoa.CPF = value.CPF;
                pessoa.nome = value.nome;
                pessoa.email = value.email;
                pessoa.genero = value.genero;
                pessoa.senha = value.senha;

                dao.updatePessoa(pessoa);

            }
            catch (Exception)
            {
                throw;
            }
        }

        // DELETE: api/Pessoas/5
        public void Delete(int id)
        {
            try
            {
                PessoaDAO dao = new PessoaDAO();
                Pessoa pessoa = new Pessoa();
                pessoa.ID = id;

                bool result = dao.deletePessoa(pessoa);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
