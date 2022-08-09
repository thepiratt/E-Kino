using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KinoAPI.Migrations
{
    public partial class projekcije : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Artikli",
                newName: "id");

            migrationBuilder.CreateTable(
                name: "KinoProjekcije",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    dan = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    vrijeme = table.Column<DateTime>(type: "datetime2", nullable: false),
                    KinoProjekcijaid = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KinoProjekcije", x => x.id);
                    table.ForeignKey(
                        name: "FK_KinoProjekcije_KinoProjekcije_KinoProjekcijaid",
                        column: x => x.KinoProjekcijaid,
                        principalTable: "KinoProjekcije",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "FilmKinoProjekcija",
                columns: table => new
                {
                    FilmId = table.Column<int>(type: "int", nullable: false),
                    KinoProjekcijaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FilmKinoProjekcija", x => new { x.FilmId, x.KinoProjekcijaId });
                    table.ForeignKey(
                        name: "FK_FilmKinoProjekcija_Filmovi_FilmId",
                        column: x => x.FilmId,
                        principalTable: "Filmovi",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FilmKinoProjekcija_KinoProjekcije_KinoProjekcijaId",
                        column: x => x.KinoProjekcijaId,
                        principalTable: "KinoProjekcije",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FilmKinoProjekcija_KinoProjekcijaId",
                table: "FilmKinoProjekcija",
                column: "KinoProjekcijaId");

            migrationBuilder.CreateIndex(
                name: "IX_KinoProjekcije_KinoProjekcijaid",
                table: "KinoProjekcije",
                column: "KinoProjekcijaid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FilmKinoProjekcija");

            migrationBuilder.DropTable(
                name: "KinoProjekcije");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Artikli",
                newName: "Id");
        }
    }
}
