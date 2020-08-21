using AgendaContatosRepository.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgendaContatosRepository.Context
{
    public class ContatoContext : DbContext
    {
        //Classe necessária para o migration
        //Classe utilizada como contexto para mapear as tabelas que serão usadas no banco.
        public ContatoContext() : base("AgendaContatos")
        {
            Database.SetInitializer<ContatoContext>(null);
        }

        //DBSet Responsavel por mapear os models no banco de dados
        public DbSet<Contato> Contatos { get; set; }

    }
}
