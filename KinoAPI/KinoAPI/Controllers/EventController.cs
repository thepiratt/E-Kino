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
    [Route("api/eventi")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly ILogger<EventController> logger;
        private readonly AppDbContext context;
        private readonly IMapper mapper;



        public EventController(ILogger<EventController> logger, AppDbContext context, IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;

        }




        [HttpGet]
        public async Task<ActionResult<List<EventVM>>> Get()
        {
            var entities = await context.Eventi.ToListAsync();
            return mapper.Map<List<EventVM>>(entities);
        }


        [HttpGet("{Id:int}")]
        public async Task<ActionResult<EventVM>> Get(int Id)
        {
            var Event = await context.Eventi.FirstOrDefaultAsync(x => x.Id == Id);
            if (Event == null)
            {
            return NotFound();
        }
            return mapper.Map<EventVM>(Event);
        }

        [HttpPost]
        public ActionResult<Event> Post([FromBody] EventCreateModel x)
        {
            var newEvent = new Event
            {
                Naziv = x.Naziv,
                Opis = x.Opis
            };
            context.Add(newEvent);
            context.SaveChanges();
            return newEvent;



        }


        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromBody] EventVM eventCM)
        {
            var Event = mapper.Map<Event>(eventCM);
            Event.Id = id;
            context.Entry(Event).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();

        }

    [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int Id)
        {
            var Event = await context.Eventi.FirstOrDefaultAsync(x => x.Id == Id);
            if (Event == null)
            {
                return NotFound();
            }

            context.Remove(Event);
            await context.SaveChangesAsync();
            return NoContent();
        }

    }

}
