using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FluxoDeProcessos.Models
{
    public class Processo
    {
        public int ID { get; set; }
        public string numeroDoProcesso { get; set; }
        public DateTime dataDeCriacaoDoProcesso { get; set; }
        public decimal valor { get; set; }
        public string escritorio { get; set; }
    }
}