using AutoMapper;
using KinoAPI.CreateModels;
using KinoAPI.Helpers;
using KinoAPI.Models;
using KinoAPI.ModelViews;
using KinoAPI.ViewModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesAPI.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KinoAPI.Controllers
{
    [Route("api/film")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "IsAdmin")]
    public class FilmController : ControllerBase
    {
        private readonly AppDbContext context;
        private readonly IMapper mapper;
        private readonly IFileStorageService fileStorageService;
        private  readonly string container = "filmovi";
       

        public FilmController(AppDbContext context,IMapper mapper, IFileStorageService fileStorageService)
        {
            this.context = context;
            this.mapper = mapper;
            this.fileStorageService = fileStorageService;
        }
       [HttpGet("{id:int}")]
       [AllowAnonymous]
       public async Task<ActionResult<FilmVM>> Get (int id)
        {
            var film = await context.Filmovi
                .Include(x => x.FilmZanr).ThenInclude(x => x.Zanr)
                .Include(x => x.FilmKino).ThenInclude(x => x.Kino)
                .Include(x => x.FilmGlumci).ThenInclude(x => x.Glumac)
                .Include(x=>x.FilmKinoProjekcija).ThenInclude(x=>x.KinoProjekcija)
                .FirstOrDefaultAsync(x => x.id == id);

            if(film==null)
            {
                return NotFound();
            }

            var dto = mapper.Map<FilmVM>(film);
            dto.Glumci = dto.Glumci.OrderBy(x=> x.Ime).ToList();

            return dto;
        }

       

        [HttpGet("filter")]
        [AllowAnonymous]
        public async Task<ActionResult<List<FilmVM>>> Filter([FromQuery] FilterFilmVM filterFilm)
        {
            var filmQueryable = context.Filmovi.Include(x=>x.FilmKinoProjekcija).ThenInclude(y=>y.KinoProjekcija).AsQueryable();

            if (!string.IsNullOrEmpty(filterFilm.Naslov))
            {
                filmQueryable = filmQueryable.Where(x => x.Naziv.Contains(filterFilm.Naslov));
            }




            if (filterFilm.Prikazuje_Se)
            {
                filmQueryable = filmQueryable.Where(x => x.Prikazuje_se);
            }

            if (filterFilm.Uskoro_se_prikazuje)
            {
                var today = DateTime.Today;
                filmQueryable = filmQueryable.Where(x => x.DatumIzalska > today);
            }

            //if (filterFilm.KinoProjekcijaId != 0)
            //{
            //    filmQueryable = filmQueryable
            //       .Where(x => x.FilmKinoProjekcija.Select(y => y.KinoProjekcijaId)
            //       .Contains(filterFilm.KinoProjekcijaId));
            //}

            if (!string.IsNullOrEmpty(filterFilm.Dan))
            {

                foreach (var i in filmQueryable)
                {
                    if (i.FilmKinoProjekcija != null)
                    {
                        foreach (var j in i.FilmKinoProjekcija)
                        {
                            if (j.KinoProjekcija != null)

                            {
                                int provjera = j.KinoProjekcija.dan.CompareTo(filterFilm.Dan);
                                if (provjera==0)
                                {
                                     filmQueryable = filmQueryable.Where(x => x.FilmKinoProjekcija.Select(y => y.KinoProjekcijaId).Contains(j.KinoProjekcijaId));
                                   
                                   
                                }
                               

                             }
                           
                        }
                        
                    }
                   
                }
            }
             


            if (filterFilm.ZanrId != 0)
            {
                filmQueryable = filmQueryable
                    .Where(x => x.FilmZanr.Select(y => y.ZanrId)
                    .Contains(filterFilm.ZanrId));
            }

          //  await HttpContext.InsertParametersPaginationInHeader(filmQueryable);
            var movies = await filmQueryable.OrderBy(x => x.Naziv)
                .ToListAsync();
            return mapper.Map<List<FilmVM>>(movies);
        }





        [HttpGet("PostGet")]
        public async Task<ActionResult<FilmPostGetVM>> PostGet()
        {
            var kino = await context.Kina.OrderBy(x=>x.Ime).ToListAsync();
            var zanr = await context.Zanrovi.OrderBy(x => x.name).ToListAsync();
            var projekcija = await context.KinoProjekcije.OrderBy(x => x.dan).ToListAsync();

            var kinoVM = mapper.Map<List<KinoVM>>(kino);
            var zanrVM = mapper.Map<List<ZanrMV>>(zanr);
            var projekcijaVM = mapper.Map<List<KinoProjekcijeVM>>(projekcija);

            return new FilmPostGetVM() { Zanrovi = zanrVM, Kina = kinoVM,KinoProjekcije=projekcijaVM };

        }
        [HttpPost]
        public async Task<ActionResult<int>> Post([FromForm] FilmCreateModel x)
        {
            var film = mapper.Map<Film>(x);
            if (x.Poster != null)
            {
                film.Poster = await fileStorageService.SaveFile(container, x.Poster);
            }

            RedGlumaca(film);
            context.Add(film);
            await context.SaveChangesAsync();
            return film.id;

        }

        [HttpGet("putget/{id:int}")]
        public async Task<ActionResult<FilmPutGetVM>> PutGet(int id)
        {
            var filmActionResult = await Get(id);
            if(filmActionResult == null)
            {
                return NotFound();
            }

            var film = filmActionResult.Value;


            var zanrOdabraniIds = film.Zanrovi.Select(x => x.id).ToList();
            var neOdabraniZanrovi = await context.Zanrovi.Where(x => !zanrOdabraniIds.Contains(x.id)).ToListAsync();

            var kinaOdabraniIds = film.Kina.Select(x => x.id).ToList();
            var neOdabranaKina = await context.Kina.Where(x => !kinaOdabraniIds.Contains(x.id)).ToListAsync();

            var projekcijeOdabraneIds = film.KinoProjekcije.Select(x => x.id).ToList();
            var neOdabraneProejkcije = await context.KinoProjekcije.Where(x => !projekcijeOdabraneIds.Contains(x.id)).ToListAsync();


            var neOdabraniZanroviVMs = mapper.Map<List<ZanrMV>>(neOdabraniZanrovi);
            var neOdabranaKinaVMs = mapper.Map<List<KinoVM>>(neOdabranaKina);
            var neOdabraneProjekcijeVMs = mapper.Map<List<KinoProjekcijeVM>>(neOdabraneProejkcije);
            
            var response = new FilmPutGetVM();

            response.Film = film;
            response.OdabraniZanrovi=film.Zanrovi;
            response.NeOdabraniZanrovi = neOdabraniZanroviVMs;
            response.OdabranaKina = film.Kina;
            response.NeOdabranaKina = neOdabranaKinaVMs;
            response.OdabraneProjekcije = film.KinoProjekcije;
            response.NeOdabraneProjekcije = neOdabraneProjekcijeVMs;
            response.Glumci = film.Glumci;
            return response;



        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id,[FromForm] FilmCreateModel filmCM)
        {
            var film = await context.Filmovi.Include(x=> x.FilmGlumci).Include(x=>x.FilmKino).Include(x=> x.FilmZanr).Include(x=>x.FilmKinoProjekcija).FirstOrDefaultAsync(x=> x.id==id);
            if (film == null)
            {
                return NotFound();
            }

            film = mapper.Map(filmCM, film);

            if(filmCM.Poster!=null)
            {
                film.Poster = await fileStorageService.EditFile(container, filmCM.Poster, film.Poster);
            }
            RedGlumaca(film);
            await context.SaveChangesAsync();
            return NoContent();
        }




        private void RedGlumaca(Film film)
        {
            if (film.FilmGlumci != null)
            {
                for (int i = 0; i < film.FilmGlumci.Count; i++)
                {
                    film.FilmGlumci[i].Red = i;
                }
            }
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<HomeVM>> Get()
        {

            var top = 5;
            var today = DateTime.Today;

            var upcomingReleases = await context.Filmovi
                .Where(x=>x.DatumIzalska>today)
                .OrderBy(x => x.DatumIzalska)
                .Take(top)
                .ToListAsync();

            var inTheaters = await context.Filmovi
                .Where(x=>x.DatumIzalska<today)
                .OrderBy(x => x.DatumIzalska)
                .Take(top)
                .ToListAsync();

            var homeDTO = new HomeVM();
            homeDTO.uskoro = mapper.Map<List<FilmVM>>(upcomingReleases);
            homeDTO.prikazuje_se = mapper.Map<List<FilmVM>>(inTheaters);
            return homeDTO;

        }


        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var film = await context.Filmovi.FirstOrDefaultAsync(x => x.id == id);

            if (film == null)
            {
                return NotFound();
            }

            context.Remove(film);
            await context.SaveChangesAsync();
            await fileStorageService.DeleteFile(film.Poster, container);
            return NoContent();
        }



    }
}
