using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KinoAPI.ViewModels
{
    public class HomeVM
    {
        public List<FilmVM> prikazuje_se { get; set; }
        public List<FilmVM> uskoro { get; set; }
    }
}
