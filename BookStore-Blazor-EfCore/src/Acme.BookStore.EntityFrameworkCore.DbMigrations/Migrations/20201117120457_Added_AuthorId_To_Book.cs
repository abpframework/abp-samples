using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Acme.BookStore.Migrations
{
    public partial class Added_AuthorId_To_Book : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "AuthorId",
                table: "AppBooks",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_AppBooks_AuthorId",
                table: "AppBooks",
                column: "AuthorId");

            migrationBuilder.AddForeignKey(
                name: "FK_AppBooks_AppAuthors_AuthorId",
                table: "AppBooks",
                column: "AuthorId",
                principalTable: "AppAuthors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppBooks_AppAuthors_AuthorId",
                table: "AppBooks");

            migrationBuilder.DropIndex(
                name: "IX_AppBooks_AuthorId",
                table: "AppBooks");

            migrationBuilder.DropColumn(
                name: "AuthorId",
                table: "AppBooks");
        }
    }
}
