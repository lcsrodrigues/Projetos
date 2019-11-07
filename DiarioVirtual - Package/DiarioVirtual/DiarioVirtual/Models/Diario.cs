using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DiarioVirtual.Models
{
    public class Diario
    {
        public int ID { get; set; }
        public string titulo { get; set; }
        public string nome { get; set; }
        public DateTime dataCriacao { get; set; }
        public string descricao { get; set; }
        public Byte arquivo { get; set; }
    }
}