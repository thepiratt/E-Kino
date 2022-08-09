using KinoAPI.ModelViews;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KinoAPI.ViewModels
{
    public class FilmPostGetVM
    {
        public List<ZanrMV> Zanrovi { get; set; }
        public List <KinoVM> Kina { get; set; }
        public List<KinoProjekcijeVM> KinoProjekcije { get; set; }
    }
}
