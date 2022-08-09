using KinoAPI.ModelViews;
using System.Collections.Generic;

namespace KinoAPI.ViewModels
{
    public class FilmPutGetVM
    {
        public FilmVM Film { get; set; }
        public List<ZanrMV> OdabraniZanrovi { get; set; }
        public List<ZanrMV> NeOdabraniZanrovi { get; set; }
        public List<KinoVM> OdabranaKina { get; set; }
        public List<KinoVM> NeOdabranaKina { get; set; }
        public List<GlumacFilmVM> Glumci { get; set; }
        public List<KinoProjekcijeVM> OdabraneProjekcije { get; set; }
        public List<KinoProjekcijeVM> NeOdabraneProjekcije { get; set; }
    }
}
