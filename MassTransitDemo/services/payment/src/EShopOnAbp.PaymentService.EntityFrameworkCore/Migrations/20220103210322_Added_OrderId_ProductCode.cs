using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EShopOnAbp.PaymentService.Migrations
{
    public partial class Added_OrderId_ProductCode : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "OrderId",
                table: "PaymentRequests",
                type: "character varying(36)",
                maxLength: 36,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "PaymentRequestProduct",
                type: "character varying(256)",
                maxLength: 256,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Code",
                table: "PaymentRequestProduct",
                type: "character varying(32)",
                maxLength: 32,
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_PaymentRequests_OrderId",
                table: "PaymentRequests",
                column: "OrderId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_PaymentRequests_OrderId",
                table: "PaymentRequests");

            migrationBuilder.DropColumn(
                name: "OrderId",
                table: "PaymentRequests");

            migrationBuilder.DropColumn(
                name: "Code",
                table: "PaymentRequestProduct");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "PaymentRequestProduct",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "character varying(256)",
                oldMaxLength: 256);
        }
    }
}
