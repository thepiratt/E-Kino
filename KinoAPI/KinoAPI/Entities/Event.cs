using KinoAPI.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace KinoAPI.Models
{
    public class Event
    {

        [Key]
        public int Id { get; set; }
        [Required]

        [Column(TypeName = "nvarchar(100)")]
        public string Naziv { get; set; }

        public string Opis { get; set; }


        [ForeignKey("Kino")]
        public Kino KinoId { get; set; }



    }
}
