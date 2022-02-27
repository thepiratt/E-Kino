﻿// <auto-generated />
using System;
using KinoAPI;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace KinoAPI.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20211230174249_FilmGlumci")]
    partial class FilmGlumci
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.12")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("KinoAPI.Entiteti.Zanr", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Zanrovi");
                });

            modelBuilder.Entity("KinoAPI.Models.Film", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DatumIzalska")
                        .HasColumnType("datetime2");

                    b.Property<string>("Naziv")
                        .IsRequired()
                        .HasMaxLength(75)
                        .HasColumnType("nvarchar(75)");

                    b.Property<string>("Opis")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Poster")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Prikazuje_se")
                        .HasColumnType("bit");

                    b.Property<string>("Trailer")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Film");
                });

            modelBuilder.Entity("KinoAPI.Models.FilmGlumci", b =>
                {
                    b.Property<int>("FilmId")
                        .HasColumnType("int");

                    b.Property<int>("GlumacId")
                        .HasColumnType("int");

                    b.Property<int>("Red")
                        .HasColumnType("int");

                    b.Property<string>("Uloga")
                        .HasMaxLength(75)
                        .HasColumnType("nvarchar(75)");

                    b.HasKey("FilmId", "GlumacId");

                    b.HasIndex("GlumacId");

                    b.ToTable("FilmGlumci");
                });

            modelBuilder.Entity("KinoAPI.Models.FilmZanr", b =>
                {
                    b.Property<int>("FilmId")
                        .HasColumnType("int");

                    b.Property<int>("ZanrId")
                        .HasColumnType("int");

                    b.HasKey("FilmId", "ZanrId");

                    b.HasIndex("ZanrId");

                    b.ToTable("FilmZanr");
                });

            modelBuilder.Entity("KinoAPI.Models.Glumac", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DatumRodjenja")
                        .HasColumnType("datetime2");

                    b.Property<string>("Ime")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Glumci");
                });

            modelBuilder.Entity("KinoAPI.Models.FilmGlumci", b =>
                {
                    b.HasOne("KinoAPI.Models.Film", "Film")
                        .WithMany("FilmGlumci")
                        .HasForeignKey("FilmId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("KinoAPI.Models.Glumac", "Glumac")
                        .WithMany()
                        .HasForeignKey("GlumacId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Film");

                    b.Navigation("Glumac");
                });

            modelBuilder.Entity("KinoAPI.Models.FilmZanr", b =>
                {
                    b.HasOne("KinoAPI.Models.Film", "Film")
                        .WithMany("FilmZanr")
                        .HasForeignKey("FilmId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("KinoAPI.Entiteti.Zanr", "Zanr")
                        .WithMany("FilmZanr")
                        .HasForeignKey("ZanrId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Film");

                    b.Navigation("Zanr");
                });

            modelBuilder.Entity("KinoAPI.Entiteti.Zanr", b =>
                {
                    b.Navigation("FilmZanr");
                });

            modelBuilder.Entity("KinoAPI.Models.Film", b =>
                {
                    b.Navigation("FilmGlumci");

                    b.Navigation("FilmZanr");
                });
#pragma warning restore 612, 618
        }
    }
}
