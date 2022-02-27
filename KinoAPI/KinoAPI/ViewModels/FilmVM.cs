using KinoAPI.Entities;
using KinoAPI.Migrations;
using KinoAPI.ModelViews;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace KinoAPI.ViewModels
{
    public class FilmVM
    {
        public int id { get; set; }
       
        public string Naziv { get; set; }

        public string Opis { get; set; }

        public string Trailer { get; set; }

        public bool Prikazuje_se { get; set; }

        public DateTime DatumIzalska { get; set; }

        public string Poster { get; set; }

        public List<ZanrMV> Zanrovi { get; set; }
        public List<KinoVM> Kina { get; set; }
        public List<GlumacFilmVM> Glumci { get; set; }
    }
}
