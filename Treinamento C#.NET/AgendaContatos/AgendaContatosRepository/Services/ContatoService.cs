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
                List<Contato> contatos = new List<Contato>();
                return context.Contatos.ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
