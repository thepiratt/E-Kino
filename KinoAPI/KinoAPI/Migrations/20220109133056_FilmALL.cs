using Microsoft.EntityFrameworkCore.Migrations;

namespace KinoAPI.Migrations
{
    public partial class FilmALL : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FilmGlumci_Film_FilmId",
                table: "FilmGlumci");

            migrationBuilder.DropForeignKey(
                name: "FK_FilmZanr_Film_FilmId",
                table: "FilmZanr");

            migrationBuilder.DropForeignKey(
                name: "FK_FilmZanr_Zanrovi_ZanrId",
                table: "FilmZanr");

            migrationBuilder.DropPrimaryKey(
                name: "PK_FilmZanr",
                table: "FilmZanr");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Film",
                table: "Film");

            migrationBuilder.RenameTable(
                name: "FilmZanr",
                newName: "FilmZanrovi");

            migrationBuilder.RenameTable(
                name: "Film",
                newName: "Filmovi");

            migrationBuilder.RenameIndex(
                name: "IX_FilmZanr_ZanrId",
                table: "FilmZanrovi",
                newName: "IX_FilmZanrovi_ZanrId");

            migrationBuilder.AddColumn<string>(
                name: "Opis",
                table: "Filmovi",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_FilmZanrovi",
                table: "FilmZanrovi",
                columns: new[] { "FilmId", "ZanrId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_Filmovi",
                table: "Filmovi",
                column: "id");

            migrationBuilder.CreateTable(
                name: "FilmKina",
                columns: table => new
                {
                    KinoId = table.Column<int>(type: "int", nullable: false),
                    FilmId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FilmKina", x => new { x.FilmId, x.KinoId });
                    table.ForeignKey(
                        name: "FK_FilmKina_Filmovi_FilmId",
                        column: x => x.FilmId,
                        principalTable: "Filmovi",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FilmKina_Kina_KinoId",
                        column: x => x.KinoId,
                        principalTable: "Kina",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FilmKina_KinoId",
                table: "FilmKina",
                column: "KinoId");

            migrationBuilder.AddForeignKey(
                name: "FK_FilmGlumci_Filmovi_FilmId",
                table: "FilmGlumci",
                column: "FilmId",
                principalTable: "Filmovi",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_FilmZanrovi_Filmovi_FilmId",
                table: "FilmZanrovi",
                column: "FilmId",
                principalTable: "Filmovi",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_FilmZanrovi_Zanrovi_ZanrId",
                table: "FilmZanrovi",
                column: "ZanrId",
                principalTable: "Zanrovi",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FilmGlumci_Filmovi_FilmId",
                table: "FilmGlumci");

            migrationBuilder.DropForeignKey(
                name: "FK_FilmZanrovi_Filmovi_FilmId",
                table: "FilmZanrovi");

            migrationBuilder.DropForeignKey(
                name: "FK_FilmZanrovi_Zanrovi_ZanrId",
                table: "FilmZanrovi");

            migrationBuilder.DropTable(
                name: "FilmKina");

            migrationBuilder.DropPrimaryKey(
                name: "PK_FilmZanrovi",
                table: "FilmZanrovi");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Filmovi",
                table: "Filmovi");

            migrationBuilder.DropColumn(
                name: "Opis",
                table: "Filmovi");

            migrationBuilder.RenameTable(
                name: "FilmZanrovi",
                newName: "FilmZanr");

            migrationBuilder.RenameTable(
                name: "Filmovi",
                newName: "Film");

            migrationBuilder.RenameIndex(
                name: "IX_FilmZanrovi_ZanrId",
                table: "FilmZanr",
                newName: "IX_FilmZanr_ZanrId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_FilmZanr",
                table: "FilmZanr",
                columns: new[] { "FilmId", "ZanrId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_Film",
                table: "Film",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_FilmGlumci_Film_FilmId",
                table: "FilmGlumci",
                column: "FilmId",
                principalTable: "Film",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_FilmZanr_Film_FilmId",
                table: "FilmZanr",
                column: "FilmId",
                principalTable: "Film",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_FilmZanr_Zanrovi_ZanrId",
                table: "FilmZanr",
                column: "ZanrId",
                principalTable: "Zanrovi",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
