using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TravelPlanner.Migrations
{
    /// <inheritdoc />
    public partial class Added_Transportation_Entity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppTransportations",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    TravelId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Type = table.Column<int>(type: "INTEGER", nullable: false),
                    DepartureTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    FromLocation = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    ToLocation = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    CompanyName = table.Column<string>(type: "TEXT", maxLength: 128, nullable: true),
                    TicketNumber = table.Column<string>(type: "TEXT", maxLength: 64, nullable: true),
                    Notes = table.Column<string>(type: "TEXT", maxLength: 1000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppTransportations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppTransportations_AppTravels_TravelId",
                        column: x => x.TravelId,
                        principalTable: "AppTravels",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppTransportations_TravelId",
                table: "AppTransportations",
                column: "TravelId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppTransportations");
        }
    }
}
