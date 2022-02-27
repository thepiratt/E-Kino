
using KinoAPI.Entiteti;
using KinoAPI.Entities;
using KinoAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;


namespace KinoAPI
{
    public class AppDbContext : DbContext
    {
        public AppDbContext([NotNullAttribute] DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<FilmZanr>().HasKey(x => new { x.FilmId, x.ZanrId });
            modelBuilder.Entity<FilmKino>().HasKey(x => new { x.FilmId, x.KinoId });
            modelBuilder.Entity<FilmGlumci>().HasKey(x => new { x.FilmId, x.GlumacId });

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Zanr> Zanrovi { get; set; }
        public DbSet<Glumac> Glumci { get; set; }
        public DbSet<Kino> Kina { get; set; }
        public DbSet<Film> Filmovi { get; set; }
        public DbSet<FilmZanr> FilmZanrovi { get; set; }
        public DbSet<FilmKino> FilmKina { get; set; }
        public DbSet<FilmGlumci> FilmGlumci { get; set; }
        public DbSet<Artikal> Artikli { get; set; }
        public DbSet<Event> Eventi { get; set; }






    }
}
