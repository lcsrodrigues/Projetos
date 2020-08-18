using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Treinamento_aspnet_mvc.Models
{
    public class Livro
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public int anoEdicao { get; set; }
        public decimal Valor { get; set; }

        public Genero Genero { get; set; }
        public int GeneroId { get; set; }
    }
}