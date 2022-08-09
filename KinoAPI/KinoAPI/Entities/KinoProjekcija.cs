using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace KinoAPI.Entities
{
    public class KinoProjekcija
    {
        [Key]
        public int id { get; set; }

        public string dan { get; set; }
        public string termin { get; set; }
      
       

        public List<KinoProjekcija> FilmKinoProjekcija { get; set; }
    }
}
