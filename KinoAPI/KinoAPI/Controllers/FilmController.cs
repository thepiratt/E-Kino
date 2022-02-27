using AutoMapper;
using KinoAPI.CreateModels;
using KinoAPI.Helpers;
using KinoAPI.Models;
using KinoAPI.ModelViews;
using KinoAPI.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KinoAPI.Controllers
{
    [Route("api/film")]
    [ApiController]
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
       public async Task<ActionResult<FilmVM>> Get (int id)
        {
            var film = await context.Filmovi
                .Include(x => x.FilmZanr).ThenInclude(x => x.Zanr)
                .Include(x => x.FilmKino).ThenInclude(x => x.Kino)
                .Include(x => x.FilmGlumci).ThenInclude(x => x.Glumac)
                .FirstOrDefaultAsync(x => x.id == id);

            if(film==null)
            {
                return NotFound();
            }

            var dto = mapper.Map<FilmVM>(film);
            dto.Glumci = dto.Glumci.OrderBy(x=> x.Ime).ToList();

            return dto;
        }


                                                                           


        [HttpGet("PostGet")]
        public async Task<ActionResult<FilmPostGetVM>> PostGet()
        {
            var kino = await context.Kina.OrderBy(x=>x.Ime).ToListAsync();
            var zanr = await context.Zanrovi.OrderBy(x => x.name).ToListAsync();

            var kinoVM = mapper.Map<List<KinoVM>>(kino);
            var zanrVM = mapper.Map<List<ZanrMV>>(zanr);

            return new FilmPostGetVM() { Zanrovi = zanrVM, Kina = kinoVM };

        }
        [HttpPost]
        public async Task<ActionResult> Post([FromForm] FilmCreateModel x)
        {
            var film = mapper.Map<Film>(x);
            if (x.Poster != null)
            {
                film.Poster = await fileStorageService.SaveFile(container, x.Poster);
            }

            RedGlumaca(film);
            context.Add(film);
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

        public async Task<ActionResult<HomeVM>> Get()
        {

            var top = 5;
            var today = DateTime.Today;

            var upcomingReleases = await context.Filmovi
                .OrderBy(x => x.DatumIzalska)
                .Take(top)
                .ToListAsync();

            var inTheaters = await context.Filmovi
                .OrderBy(x => x.DatumIzalska)
                .Take(top)
                .ToListAsync();

            var homeDTO = new HomeVM();
            homeDTO.uskoro = mapper.Map<List<FilmVM>>(upcomingReleases);
            homeDTO.prikazuje_se = mapper.Map<List<FilmVM>>(inTheaters);
            return homeDTO;

        }



    }
}
