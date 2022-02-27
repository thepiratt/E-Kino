using AutoMapper;
using KinoAPI.CreateModels;
using KinoAPI.Entities;
using KinoAPI.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KinoAPI.Controllers
{
    [ApiController]
    [Route("api/kina")]
    public class KinoController : ControllerBase
    {
        private readonly AppDbContext context;
        private readonly IMapper mapper;

        public KinoController(AppDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<KinoVM>>> Get()
        {
            var entities = await context.Kina.OrderBy(x => x.Ime).ToListAsync();
            return mapper.Map<List<KinoVM>>(entities);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<KinoVM>> Get(int id)
        {
            var kino = await context.Kina.FirstOrDefaultAsync(x => x.id == id);

            if (kino == null)
            {
                return NotFound();
            }

            return mapper.Map<KinoVM>(kino);
        }

        [HttpPost]
        public async Task<ActionResult> Post(KinoCreateModel kinoCreateModel)
        {
            var kino = mapper.Map<Kino>(kinoCreateModel);
            context.Add(kino);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, KinoCreateModel kinoCreateModel)
        {
            var kino = await context.Kina.FirstOrDefaultAsync(x => x.id == id);

            if (kino == null)
            {
                return NotFound();
            }

            kino = mapper.Map(kinoCreateModel, kino);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var kino = await context.Kina.FirstOrDefaultAsync(x => x.id == id);

            if (kino == null)
            {
                return NotFound();
            }

            context.Remove(kino);
            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
