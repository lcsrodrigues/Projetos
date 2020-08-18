using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;
using Treinamento_aspnet_mvc.Models;

namespace Treinamento_aspnet_mvc.AcessoDados
{
    public class LivroContexto
    {
        public DbSet<Genero> Generos { get; set; }
        public DbSet<Livro> Livros { get; set; }
    }
}