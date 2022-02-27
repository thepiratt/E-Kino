using NetTopologySuite.Geometries;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;


namespace KinoAPI.Entities
{
    public class Kino
    {
        public int id { get; set; }
        [Required]
        [StringLength(maximumLength: 75)]
        public string Ime { get; set; }
        public Point Lokacija { get; set; }
    }
}
