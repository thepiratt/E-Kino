using AutoMapper;
using KinoAPI.CreateModels;
using KinoAPI.Helpers;
using KinoAPI.Models;
using KinoAPI.ModelViews;
using KinoAPI.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace KinoAPI.Controllers
{
    [Route("api/glumci")]
    [ApiController]
    public class GlumacController : ControllerBase
    {
        private readonly ILogger<GlumacController> logger;
        private readonly AppDbContext context;
        private readonly IMapper mapper;
        
   

        public GlumacController(ILogger<GlumacController> logger, AppDbContext context, IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
            
        }


        [HttpGet]
        public async Task<ActionResult<List<GlumacVM>>> Get()
        {
            logger.LogInformation("Povlacenje svih glumaca");
            var glumac = await context.Glumci.ToListAsync();
            return mapper.Map<List<GlumacVM>>(glumac);
        }

        [HttpPost("searchByName")]
        public async Task<ActionResult<List<GlumacFilmVM>>> SearchByName([FromBody] string name)
        {
            if (string.IsNullOrWhiteSpace(name)) { return new List<GlumacFilmVM>(); }
            return await context.Glumci
                .Where(x => x.Ime.Contains(name))
                .OrderBy(x => x.Ime)
                .Select(x => new GlumacFilmVM { Id = x.id, Ime = x.Ime })
                .Take(5)
                .ToListAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<GlumacVM>> Get(int id)
        {
            var glumac = await context.Glumci.FirstOrDefaultAsync(x => x.id == id);
            if (glumac == null)
            {
                return NotFound();
            }
            return mapper.Map<GlumacVM>(glumac);

        }




        [HttpPost]
        public  ActionResult<Glumac> Post([FromBody] GlumacCreateModel glumacCM)
        {
            var glumac = new Glumac
            {
                Ime = glumacCM.Ime,
                DatumRodjenja = glumacCM.DatumRodjenja
            };
            context.Add(glumac);
            context.SaveChanges();
            return glumac;

        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id,[FromBody] GlumacVM glumacCM)
        {
            var glumac = mapper.Map<Glumac>(glumacCM);
            glumac.id = id;
            context.Entry(glumac).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var glumac = await context.Glumci.FindAsync(id);

            if (glumac == null)
            {
                return NotFound();
            }

            context.Glumci.Remove(glumac);
            await context.SaveChangesAsync();
            return NoContent();



        }


        //[HttpDelete("{id:int}")]
        //public async Task<ActionResult<Glumac>> Delete(int id)
        //{
        //    try
        //    {
        //        var employeeToDelete = await context.Glumci.FindAsync(id);

        //        if (employeeToDelete == null)
        //        {
        //            return NotFound($"Employee with Id = {id} not found");
        //        }

        //       context.Remove(employeeToDelete);
        //        return NoContent();
        //    }
        //    catch (Exception)
        //    {
        //        return NotFound();
        //    }
        //}



    }
}
