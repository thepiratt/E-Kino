﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KinoAPI.Migrations
{
    public partial class termini : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "vrijeme",
                table: "KinoProjekcije");

            migrationBuilder.AddColumn<string>(
                name: "termin",
                table: "KinoProjekcije",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "termin",
                table: "KinoProjekcije");

            migrationBuilder.AddColumn<DateTime>(
                name: "vrijeme",
                table: "KinoProjekcije",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
