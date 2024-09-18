using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ModularCrm.Migrations
{
    /// <inheritdoc />
    public partial class Make_Order_CreationAudited : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreationTime",
                table: "Orders",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<Guid>(
                name: "CreatorId",
                table: "Orders",
                type: "uniqueidentifier",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreationTime",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "CreatorId",
                table: "Orders");
        }
    }
}
