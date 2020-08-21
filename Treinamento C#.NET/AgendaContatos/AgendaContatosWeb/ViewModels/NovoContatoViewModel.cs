using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AgendaContatosWeb.ViewModels
{
    public class NovoContatoViewModel
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }

        public string msgErro { get; set; }
    }
}