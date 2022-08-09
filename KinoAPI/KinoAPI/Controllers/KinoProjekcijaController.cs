using AutoMapper;
using KinoAPI.CreateModels;
using KinoAPI.Entiteti;
using KinoAPI.Entities;
using KinoAPI.ModelViews;
using KinoAPI.ViewModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KinoAPI.Controllers
{
    [Route("api/projekcije")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "IsAdmin")]
    public class KinoProjekcijaController : ControllerBase
    {

        private readonly AppDbContext context;
        private readonly IMapper mapper;
        public KinoProjekcijaController( AppDbContext context, IMapper mapper)
        {
           
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<KinoProjekcijeVM>>> Get()
        {
          
            var kinoProjekcije = await context.KinoProjekcije.ToListAsync();
            return mapper.Map<List<KinoProjekcijeVM>>(kinoProjekcije);

        }
        [HttpGet("{Id:int}", Name = "getProjekcija")]
        public async Task<ActionResult<KinoProjekcijeVM>> Get(int Id)
        {
            var kinoProjekcija = await context.KinoProjekcije.FirstOrDefaultAsync(x => x.id == Id);
            if (kinoProjekcija == null)
            {
                return NotFound();
            }
            return mapper.Map<KinoProjekcijeVM>(kinoProjekcija);

        }
        [HttpPost]
        public ActionResult<KinoProjekcija> Post([FromBody] KinoProjekcijaCreateModel x)
        {
            var newKinoProjekcija = new KinoProjekcija
            {
               dan=x.dan,
               termin=x.termin
            };
            context.Add(newKinoProjekcija);
            context.SaveChanges();
            return newKinoProjekcija;



        }


        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromBody] KinoProjekcijeVM x)
        {
            var kinoProjekcija = mapper.Map<KinoProjekcija>(x);
            kinoProjekcija.id = id;
            context.Entry(kinoProjekcija).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();

        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int Id)
        {
            var kinoProjekcija = await context.KinoProjekcije.FirstOrDefaultAsync(x => x.id == Id);

            if (kinoProjekcija == null)
            {
                return NotFound();
            }

            context.Remove(kinoProjekcija);
            await context.SaveChangesAsync();
            return NoContent();



        }
    }
}
