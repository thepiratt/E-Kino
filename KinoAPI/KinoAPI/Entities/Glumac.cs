using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace KinoAPI.Models
{
    public class Glumac
    {
        [Key]
        public int id { get; set; }

        public string Ime { get; set; }

        public DateTime DatumRodjenja { get; set; }

      
    }
}
