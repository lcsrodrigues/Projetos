using AgendaContatosRepository.Context;
using AgendaContatosRepository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgendaContatosRepository.Services
{
    public class ContatoService
    {
        private ContatoContext context;

        public ContatoService()
        {
            context = new ContatoContext();
        }

        public void Inserir(Contato contato)
        {
            try
            {
                context.Contatos.Add(contato);
                context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<Contato> ListarTodos()
        {
            try
            {
                //return context.Contatos.Where(x => x.Id == 1).ToList(); //expressões LAMBDA
               return context.Contatos.ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
