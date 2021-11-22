using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Acme.BookStore.BookManagement.Migrations
{
    public partial class Added_AuthorId_To_Book : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "AuthorId",
                table: "BmBooks",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_BmBooks_AuthorId",
                table: "BmBooks",
                column: "AuthorId");

            migrationBuilder.AddForeignKey(
                name: "FK_BmBooks_BmAuthors_AuthorId",
                table: "BmBooks",
                column: "AuthorId",
                principalTable: "BmAuthors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BmBooks_BmAuthors_AuthorId",
                table: "BmBooks");

            migrationBuilder.DropIndex(
                name: "IX_BmBooks_AuthorId",
                table: "BmBooks");

            migrationBuilder.DropColumn(
                name: "AuthorId",
                table: "BmBooks");
        }
    }
}
