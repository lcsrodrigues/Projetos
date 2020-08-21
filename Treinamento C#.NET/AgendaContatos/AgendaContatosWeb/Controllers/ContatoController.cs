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
            ContatoService contatoServico = new ContatoService();
            List<NovoContatoViewModel> contatosVM = new List<NovoContatoViewModel>();
            List<Contato> contatos = new List<Contato>();
            NovoContatoViewModel contatoVM;

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
            ViewBag.listaContatos = contatosVM;
            return View();
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

                return View("SuccessoNovoContato");
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}