using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace KinoAPI.CreateModels
{
    public class GlumacCreateModel
    {
        [Required]
        [StringLength(120)]
        public string Ime { get; set; }

        public DateTime DatumRodjenja { get; set; }

       
    }
}
