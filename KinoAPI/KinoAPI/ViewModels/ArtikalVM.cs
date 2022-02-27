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
    public class ArtikalVM
    {

        public int id { get; set; }
        public string Naziv { get; set; }

        public string Opis { get; set; }

        public string Cijena { get; set; }
    }
}
