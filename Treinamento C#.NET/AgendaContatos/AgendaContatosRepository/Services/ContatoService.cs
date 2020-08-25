using AgendaContatosRepository.Context;
using AgendaContatosRepository.Models;
using System;
using System.Collections.Generic;
using System.Linq;

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

        public Contato listarPorId(int id)
        {
            Contato contato = new Contato();
            try
            {
                var listContatos = context.Contatos.Where(x => x.Id == id).ToList();

                if( listContatos.Count > 0)
                {
                    foreach (var item in listContatos)
                    {
                        contato.Nome = item.Nome;
                        contato.Id = item.Id;
                        contato.Telefone = item.Telefone;
                        contato.Email = item.Email;
                    }

                    return contato;
                }

                return null;

            }
            catch(Exception)
            {
                throw;
            }
        }

        public bool DeletarContato(int id)
        {
            try
            {
                var contato = context.Contatos.SingleOrDefault(x => x.Id == id);
                context.Contatos.Remove(contato);
                context.SaveChanges();

                return true;

            }catch(Exception)
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

        public bool EditarContato(Contato contato)
        {
            try
            {
                var result = context.Contatos.SingleOrDefault(c => c.Id == contato.Id);

                result.Id = contato.Id;
                result.Email = contato.Email;
                result.Telefone = contato.Telefone;
                result.Nome = contato.Nome;

                context.SaveChanges();
                return true;

            }
            catch(Exception)
            {
                throw;
            }
        }
    }
}
