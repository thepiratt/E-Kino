using AutoMapper;
using KinoAPI.CreateModels;
using KinoAPI.Entiteti;
using KinoAPI.ModelViews;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace KinoAPI.Controllers
{

    [Route("api/zanrovi")]
    [ApiController]
    public class ZanrController : ControllerBase
    {
        private readonly ILogger<ZanrController> logger;
        private readonly AppDbContext context;
        private readonly IMapper mapper;

        public ZanrController(ILogger<ZanrController> logger, AppDbContext context, IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }
        [HttpGet]
        public async Task<ActionResult<List<ZanrMV>>> Get()
        {
            logger.LogInformation("Povlacenje svih zanrova");
            var zanrovi = await context.Zanrovi.ToListAsync();
            return mapper.Map<List<ZanrMV>>(zanrovi);

        }
        [HttpGet("{Id:int}", Name = "getZanr")]
        public async Task<ActionResult<ZanrMV>> Get(int Id)
        {
            var zanr = await context.Zanrovi.FirstOrDefaultAsync(x => x.id == Id);
            if(zanr==null)
            {
                return NotFound();
            }
            return mapper.Map<ZanrMV>(zanr);
             
        }
        [HttpPost]
        public ActionResult<Zanr> Post([FromBody] ZanrCreateModel x)
        {
            var newZanr = new Zanr
            {
                name = x.name,
            };
            context.Add(newZanr);
            context.SaveChanges();
            return newZanr;



        }


        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromBody] ZanrMV zanrCM)
        {
            var zanr = mapper.Map<Zanr>(zanrCM);
            zanr.id = id;
            context.Entry(zanr).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();


            //try
            //{
            //    if(id!=zanrCM.)
            //}
            //catch (Exception)
            //{

            //    throw;
            //}
        }

        [HttpDelete("{id:int}")]
        public async Task <ActionResult> Delete(int Id)
        {
            var zanr = await context.Zanrovi.FirstOrDefaultAsync(x => x.id == Id);
            
            if(zanr==null)
            {
                return NotFound();
            }

            context.Remove(zanr);
            await context.SaveChangesAsync();
            return NoContent();

           

        }

    }
}
