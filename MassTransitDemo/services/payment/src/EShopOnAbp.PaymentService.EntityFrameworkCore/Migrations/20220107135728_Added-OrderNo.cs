using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EShopOnAbp.PaymentService.Migrations
{
    public partial class AddedOrderNo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "OrderNo",
                table: "PaymentRequests",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OrderNo",
                table: "PaymentRequests");
        }
    }
}
