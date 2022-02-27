using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace KinoAPI.CreateModels
{
    public class KinoCreateModel
    {
        [Required]
        [StringLength(maximumLength: 75)]
        public string Ime { get; set; }
        [Range(-90, 90)]
        public double Latitude { get; set; }
        [Range(-180, 180)]
        public double Longitude { get; set; }
    }
}
