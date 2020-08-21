using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgendaContatosRepository.Models
{
    [Table("Contatos")]
    public class Contato
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(50)]
        public string Nome { get; set; }
        [MaxLength(20)]
        public string Telefone { get; set; }
        [MaxLength(50)]
        public string Email { get; set; }
    }
}
