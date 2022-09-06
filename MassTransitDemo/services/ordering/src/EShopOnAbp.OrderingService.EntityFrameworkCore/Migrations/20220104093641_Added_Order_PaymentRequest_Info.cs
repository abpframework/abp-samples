using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EShopOnAbp.OrderingService.Migrations
{
    public partial class Added_Order_PaymentRequest_Info : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PaymentMethodToken",
                table: "Orders");

            migrationBuilder.AddColumn<Guid>(
                name: "PaymentRequestId",
                table: "Orders",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PaymentStatus",
                table: "Orders",
                type: "character varying(256)",
                maxLength: 256,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PaymentRequestId",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "PaymentStatus",
                table: "Orders");

            migrationBuilder.AddColumn<string>(
                name: "PaymentMethodToken",
                table: "Orders",
                type: "text",
                nullable: true);
        }
    }
}
