using AutoMapper;
using KinoAPI.CreateModels;
using KinoAPI.Helpers;
using KinoAPI.Models;
using KinoAPI.ModelViews;
using KinoAPI.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace KinoAPI.Controllers
{
    [Route("api/artikli")]
    [ApiController]
    public class ArtikalController : ControllerBase
    {
        private readonly ILogger<ArtikalController> logger;
        private readonly AppDbContext context;
        private readonly IMapper mapper;



        public ArtikalController(ILogger<ArtikalController> logger, AppDbContext context, IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;

        }


        //[HttpGet]
        //public async Task<ActionResult<List<ArtikalVM>>> Get()
        //{
        //    logger.LogInformation("Povlacenje svih artikala");
        //    var artikal = await context.Artikli.ToListAsync();
        //    return mapper.Map<List<ArtikalVM>>(artikal);
        //}

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Artikal>>> Get()
        {
            return await context.Artikli.ToListAsync();
        }



        //[HttpGet]
        //public async Task<ActionResult<List<ArtikalVM>>> Get()
        //{
        //    var entities = await context.Artikli.OrderBy(x => x.Naziv).ToListAsync();
        //    return mapper.Map<List<ArtikalVM>>(entities);
        //}


        //[HttpGet("{id:int}")]
        //public async Task<ActionResult<ArtikalVM>> Get(int id)
        //{
        //    var artikal = await context.Artikli.FirstOrDefaultAsync(x => x.id == id);
        //    if (artikal == null)
        //    {
        //        return NotFound();
        //    }
        //    return mapper.Map<ArtikalVM>(artikal);

        //}


        [HttpGet("{id:int}")]
        public async Task<ActionResult<ArtikalVM>> Get(int id)
        {
            try
            {
                var artikal = await context.Artikli.FirstOrDefaultAsync(x => x.id == id);

                if (artikal == null) return NotFound();

                return mapper.Map<ArtikalVM>(artikal);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database");
            }
        }




        [HttpPost]
        public ActionResult<Artikal> Post([FromBody] ArtikalCreateModel artikalCM)
        {
            var artikal = new Artikal
            {
                Naziv = artikalCM.Naziv,
                Opis = artikalCM.Opis,
                Cijena = artikalCM.Cijena
            };
            context.Add(artikal);
            context.SaveChanges();
            return artikal;

        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromBody] ArtikalVM artikalCM)
        {
            var artikal = mapper.Map<Artikal>(artikalCM);
            artikal.id = id;
            context.Entry(artikal).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var artikal = await context.Artikli.FindAsync(id);

            if (artikal == null)
            {
                return NotFound();
            }

            context.Artikli.Remove(artikal);
            await context.SaveChangesAsync();
            return NoContent();



        }


 



    }
}
