using KinoAPI.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace KinoAPI.Models
{
    public class Film
    {

        [Key]
        public int id { get; set; }
        [StringLength(maximumLength:75)]
        [Required]

        public string Naziv { get; set; }

        public string Opis { get; set; }

        public string Trailer { get; set; }

        public bool Prikazuje_se { get; set; }

        public DateTime DatumIzalska { get; set; }

        public string Poster { get; set; }

        public List<FilmZanr>FilmZanr{get;set;}

        public List<FilmKino> FilmKino { get; set; }

        public List<FilmGlumci> FilmGlumci { get; set; }


        public List<FilmKinoProjekcija> FilmKinoProjekcija { get; set; }

    }
}
