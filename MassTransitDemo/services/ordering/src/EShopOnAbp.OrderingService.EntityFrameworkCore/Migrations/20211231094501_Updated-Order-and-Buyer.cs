using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EShopOnAbp.OrderingService.Migrations
{
    public partial class UpdatedOrderandBuyer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "PaymentId",
                table: "Buyers");

            migrationBuilder.RenameColumn(
                name: "UserName",
                table: "Buyers",
                newName: "Email");

            migrationBuilder.AddColumn<int>(
                name: "PaymentTypeId",
                table: "Buyers",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "PaymentTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false, defaultValue: 1),
                    Name = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentTypes", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Buyers_PaymentTypeId",
                table: "Buyers",
                column: "PaymentTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Buyers_PaymentTypes_PaymentTypeId",
                table: "Buyers",
                column: "PaymentTypeId",
                principalTable: "PaymentTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Buyers_PaymentTypes_PaymentTypeId",
                table: "Buyers");

            migrationBuilder.DropTable(
                name: "PaymentTypes");

            migrationBuilder.DropIndex(
                name: "IX_Buyers_PaymentTypeId",
                table: "Buyers");

            migrationBuilder.DropColumn(
                name: "PaymentTypeId",
                table: "Buyers");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Buyers",
                newName: "UserName");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Orders",
                type: "character varying(1024)",
                maxLength: 1024,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PaymentId",
                table: "Buyers",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
