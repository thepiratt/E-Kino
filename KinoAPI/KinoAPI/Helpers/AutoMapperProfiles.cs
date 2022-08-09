 using AutoMapper;
using KinoAPI.Entiteti;
using KinoAPI.ModelViews;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KinoAPI.CreateModels;
using KinoAPI.Models;
using KinoAPI.ViewModels;
using KinoAPI.Entities;
using NetTopologySuite.Geometries;

namespace KinoAPI.Helpers
{
    public class AutoMapperProfiles : Profile
    {

        public AutoMapperProfiles(GeometryFactory geometryFactory)
        {
            CreateMap<ZanrMV, Zanr>().ReverseMap();
            CreateMap<ZanrCreateModel, Zanr>();
            CreateMap<KinoProjekcijeVM, KinoProjekcija>().ReverseMap();
            CreateMap<KinoProjekcijaCreateModel, KinoProjekcija>();

            CreateMap<EventVM, Event>().ReverseMap();
            CreateMap<EventCreateModel, Event>();

            CreateMap<ArtikalVM, Artikal>().ReverseMap();
            CreateMap<ArtikalCreateModel, Artikal>();

            CreateMap<GlumacVM, Glumac>().ReverseMap();
            CreateMap<GlumacCreateModel, Glumac>();
            CreateMap<Kino, KinoVM>()
               .ForMember(x => x.Latitude, dto => dto.MapFrom(prop => prop.Lokacija.Y))
               .ForMember(x => x.Longitude, dto => dto.MapFrom(prop => prop.Lokacija.X));
            CreateMap<KinoCreateModel, Kino>()
               .ForMember(x => x.Lokacija, x => x.MapFrom(dto =>
               geometryFactory.CreatePoint(new Coordinate(dto.Longitude, dto.Latitude))));


            CreateMap<FilmCreateModel, Film>()
                .ForMember(x => x.Poster, options => options.Ignore())
                .ForMember(x => x.FilmZanr, options => options.MapFrom(MapFilmZanr))
                .ForMember(x=>x.FilmKino,options=>options.MapFrom(MapFilmKino))
                .ForMember(x=>x.FilmKinoProjekcija,options=>options.MapFrom(MapFilmKinoProjekcije))
                .ForMember(x => x.FilmGlumci, options => options.MapFrom(MapFilmGlumci));

            CreateMap<Film, FilmVM>()
                .ForMember(x => x.Zanrovi, options => options.MapFrom(MapFilmZanr))
                 .ForMember(x => x.Kina, options => options.MapFrom(MapFilmKina))
                 .ForMember(x => x.KinoProjekcije, options => options.MapFrom(MapFilmKinoProjekcija))
                 .ForMember(x => x.Glumci, options => options.MapFrom(MapFilmGlumci));




        }


        private List<GlumacFilmVM> MapFilmGlumci(Film film,FilmVM filmVM)
        {
            var result = new List<GlumacFilmVM>();
            if (film.FilmGlumci != null)
            {
                foreach (var glumac in film.FilmGlumci)
                {
                    result.Add(new GlumacFilmVM() { Id = glumac.GlumacId, Ime = glumac.Glumac.Ime, Uloga=glumac.Uloga,Red=glumac.Red });
                }
            }

            return result;
        }
        private List<KinoVM> MapFilmKina(Film film, FilmVM filmVM)
        {
            var result = new List<KinoVM>();
            if (film.FilmKino != null)
            {
                foreach (var kino in film.FilmKino)
                {
                    result.Add(new KinoVM() { id = kino.KinoId, Ime = kino.Kino.Ime, Latitude=kino.Kino.Lokacija.Y,Longitude=kino.Kino.Lokacija.X });
                }
            }

            return result;
        }
        private List<KinoProjekcijeVM> MapFilmKinoProjekcija(Film film, FilmVM filmVM)
        {
            var result = new List<KinoProjekcijeVM>();
            if (film.FilmKinoProjekcija != null)
            {
                foreach (var kinoProjekcija in film.FilmKinoProjekcija)
                {
                    result.Add(new KinoProjekcijeVM() { id = kinoProjekcija.KinoProjekcijaId, dan = kinoProjekcija.KinoProjekcija.dan, termin=kinoProjekcija.KinoProjekcija.termin });
                }
            }

            return result;
        }
        private List<ZanrMV> MapFilmZanr(Film film,FilmVM filmVM)
        {
            var result = new List<ZanrMV>();
            if(film.FilmZanr!= null)
            {
                foreach(var zanr in film.FilmZanr)
                {
                    result.Add(new ZanrMV() { id = zanr.ZanrId, name = zanr.Zanr.name });
                }
            }

            return result;
        }
        private List<FilmZanr> MapFilmZanr(FilmCreateModel filmCreateModel, Film film)
        {
            var result = new List<FilmZanr>();
            if (filmCreateModel.Zanrovi == null) { return result; }
            foreach (var id in filmCreateModel.Zanrovi)
            {
                result.Add(new FilmZanr() { ZanrId = id });
            }
            return result;
        }
        private List<FilmKino> MapFilmKino(FilmCreateModel filmCreateModel, Film film)
        {
            var result = new List<FilmKino>();
            if (filmCreateModel.Kina == null) { return result; }
            foreach (var id in filmCreateModel.Kina)
            {
                result.Add(new FilmKino() { KinoId = id });
            }
            return result;
        }

        private List<FilmKinoProjekcija> MapFilmKinoProjekcije(FilmCreateModel filmCreateModel, Film film)
        {
            var result = new List<FilmKinoProjekcija>();
            if (filmCreateModel.KinoProjekcije == null) { return result; }
            foreach (var id in filmCreateModel.KinoProjekcije)
            {
                result.Add(new FilmKinoProjekcija() { KinoProjekcijaId = id });
            }
            return result;
        }


        private List<FilmGlumci> MapFilmGlumci(FilmCreateModel filmCreateModel, Film film)
        {
            var result = new List<FilmGlumci>();
            if (filmCreateModel.Glumci == null) { return result; }
            foreach (var glumac in filmCreateModel.Glumci)
            {
                result.Add(new FilmGlumci() { GlumacId = glumac.Id, Uloga = glumac.Uloga });
            }
            return result;
        }

        //HARUN
        




    }


   
}
