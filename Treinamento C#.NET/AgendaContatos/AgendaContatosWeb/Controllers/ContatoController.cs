using AgendaContatosRepository.Models;
using AgendaContatosRepository.Services;
using AgendaContatosWeb.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AgendaContatosWeb.Controllers
{
    public class ContatoController : Controller
    {
        // GET: Contato
        public ActionResult Index()
        {
            ViewBag.listaContatos = ListarTodosContatos();
            return View();
        }

        public List<NovoContatoViewModel> ListarTodosContatos()
        {
            NovoContatoViewModel contatoVM;
            List<Contato> contatos = new List<Contato>();
            ContatoService contatoServico = new ContatoService();
            List<NovoContatoViewModel> contatosVM = new List<NovoContatoViewModel>();

            contatos = contatoServico.ListarTodos();

            foreach (Contato contato in contatos)
            {
                contatoVM = new NovoContatoViewModel();

                contatoVM.Nome = contato.Nome;
                contatoVM.Email = contato.Email;
                contatoVM.Id = contato.Id;
                contatoVM.Telefone = contato.Telefone;

                contatosVM.Add(contatoVM);
            }
            return contatosVM;
        }

        public ActionResult NovoContato()
        {
            return View();
        }

        [HttpPost]
        public ActionResult GravarNovoContato(NovoContatoViewModel novoContatoVM)
        {
            try
            {
                ContatoService contatoServico = new ContatoService();

                string msgErro = string.Empty;
                if(string.IsNullOrEmpty(novoContatoVM.Nome))
                {
                    msgErro += "Nome não preenchido";
                }

                if (string.IsNullOrEmpty(novoContatoVM.Telefone))
                {
                    msgErro += "Nome não preenchido";
                }

                if (string.IsNullOrEmpty(novoContatoVM.Email))
                {
                    msgErro += "Nome não preenchido";
                }

                if(!string.IsNullOrEmpty(msgErro))
                {
                    ViewBag.Error = msgErro;
                    ViewData["Erro"] = msgErro;
                    TempData["Erro"] = msgErro;
                    novoContatoVM.msgErro = msgErro;

                    return View("NovoContato", novoContatoVM);
                }

                contatoServico.Inserir(new Contato { Email = novoContatoVM.Email, Nome = novoContatoVM.Nome, Telefone = novoContatoVM.Telefone });

                ViewBag.listaContatos = ListarTodosContatos();
                return View("Index");
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult EditarContato(int id)
        {
            ContatoService contatoService = new ContatoService();
            Contato contato = new Contato();

            contato = contatoService.listarPorId(id);

            return View("EditarContato",contato);
        }

        public ActionResult SalvarAlteracoesNovoContato(NovoContatoViewModel contatoEditVM)
        {
            try
            {
                List<NovoContatoViewModel> contatosVM = new List<NovoContatoViewModel>();
                ContatoService contatoService = new ContatoService();
                Contato contato = new Contato();

                contato.Id = contatoEditVM.Id;
                contato.Nome = contatoEditVM.Nome;
                contato.Email = contatoEditVM.Email;
                contato.Telefone = contatoEditVM.Telefone;

                contatoService.EditarContato(contato);
                ViewBag.listaContatos = ListarTodosContatos();

                return View("Index");
                
            }catch(Exception)
            {
                throw;
            }
        }

        public ActionResult DeletarContato(int id)
        {
            try
            {
                ContatoService contatoService = new ContatoService();
                if (contatoService.DeletarContato(id))
                {
                    ViewBag.listaContatos = ListarTodosContatos();
                    return View("Index");
                }
                return View("Erro");
            }
            catch(Exception)
            {
                throw;
            }

        }
    }
}