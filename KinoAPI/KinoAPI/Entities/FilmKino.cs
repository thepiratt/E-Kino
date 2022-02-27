using KinoAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KinoAPI.Entities
{
    public class FilmKino
    {
        public int KinoId { get; set; }

        public int FilmId { get; set; }

        public Film Film { get; set; }

        public Kino Kino { get; set; }
    }
}
