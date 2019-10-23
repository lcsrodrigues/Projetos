using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ListaDeTarefas.model
{
    public class Pessoa
    {
        public int ID { get; set; }
        public String nome { get; set; }
        public String email { get; set; }
        public String genero { get; set; }
        public String senha { get; set; }
        public Int64 CPF { get; set; }
    }
}