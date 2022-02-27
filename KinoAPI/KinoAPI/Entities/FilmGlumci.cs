using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace KinoAPI.Models
{
    public class FilmGlumci
    {
        public int GlumacId { get; set; }

        public int FilmId { get; set; }
        [StringLength(maximumLength:75)]

        public string Uloga { get; set; }

        public int Red { get; set; }

        public Glumac Glumac { get; set; }

        public Film Film { get; set; }
    }
}
