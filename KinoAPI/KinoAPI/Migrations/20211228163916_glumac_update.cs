using Microsoft.EntityFrameworkCore.Migrations;

namespace KinoAPI.Migrations
{
    public partial class glumac_update : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Biografija",
                table: "Glumci");

            migrationBuilder.DropColumn(
                name: "Slika",
                table: "Glumci");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Biografija",
                table: "Glumci",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Slika",
                table: "Glumci",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
