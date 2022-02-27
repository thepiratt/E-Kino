using KinoAPI.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KinoAPI.CreateModels
{
    public class FilmCreateModel
    {
        public string Naziv { get; set; }

        public string Opis { get; set; }

        public string Trailer { get; set; }

        public bool Prikazuje_se { get; set; }

        public DateTime DatumIzalska { get; set; }

        public IFormFile Poster { get; set; }

        [ModelBinder(BinderType = typeof(TypeBinder<List<int>>))]
        public List<int> Zanrovi { get; set; }
        [ModelBinder(BinderType = typeof(TypeBinder<List<int>>))]
        public List<int> Kina { get; set; }
        [ModelBinder(BinderType = typeof(TypeBinder<List<FilmGlumciCreateModel>>))]
        public List<FilmGlumciCreateModel> Glumci { get; set; }
    }
}
