using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ListaDeTarefas.model
{
    public class Tarefa
    {
        public int ID { get; set; }
        public string titulo { get; set; }
        public string descricao { get; set; }
        public DateTime dtInicio { get; set; }
        public DateTime dtFim { get; set; }
        public Pessoa responsavelTarefa { get; set; }
    }
}