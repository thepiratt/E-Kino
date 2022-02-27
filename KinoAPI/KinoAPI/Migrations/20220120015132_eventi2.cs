using Microsoft.EntityFrameworkCore.Migrations;

namespace KinoAPI.Migrations
{
    public partial class eventi2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "KinoId",
                table: "Eventi");

            migrationBuilder.AddColumn<int>(
                name: "Kino",
                table: "Eventi",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Eventi_Kino",
                table: "Eventi",
                column: "Kino");

            migrationBuilder.AddForeignKey(
                name: "FK_Eventi_Kina_Kino",
                table: "Eventi",
                column: "Kino",
                principalTable: "Kina",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Eventi_Kina_Kino",
                table: "Eventi");

            migrationBuilder.DropIndex(
                name: "IX_Eventi_Kino",
                table: "Eventi");

            migrationBuilder.DropColumn(
                name: "Kino",
                table: "Eventi");

            migrationBuilder.AddColumn<int>(
                name: "KinoId",
                table: "Eventi",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
