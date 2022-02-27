using Microsoft.EntityFrameworkCore.Migrations;

namespace KinoAPI.Migrations
{
    public partial class FilmAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Film",
                newName: "id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "id",
                table: "Film",
                newName: "Id");
        }
    }
}
