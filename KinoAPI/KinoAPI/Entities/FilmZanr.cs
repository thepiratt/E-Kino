using KinoAPI.Entiteti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KinoAPI.Models
{
    public class FilmZanr
    {
        public int ZanrId { get; set; }

        public int FilmId { get; set; }

        public Zanr Zanr { get; set; }

        public Film Film { get; set; }
    }
}
