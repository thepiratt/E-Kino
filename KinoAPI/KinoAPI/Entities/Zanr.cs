using KinoAPI.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace KinoAPI.Entiteti
{
    public class Zanr
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public List<FilmZanr> FilmZanr { get; set; }
    }
}
