using KinoAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KinoAPI.Entities
{
    public class FilmKinoProjekcija
    {
        public int FilmId { get; set; }
        public int KinoProjekcijaId { get; set; }
        public Film Film { get; set; }
        public KinoProjekcija KinoProjekcija { get; set; }
    }
}
