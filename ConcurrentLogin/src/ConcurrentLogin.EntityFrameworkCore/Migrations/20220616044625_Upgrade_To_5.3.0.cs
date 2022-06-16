using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ConcurrentLogin.Migrations
{
    public partial class Upgrade_To_530 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "ConcurrentLogin",
                table: "AbpUsers",
                type: "nvarchar(128)",
                maxLength: 128,
                nullable: true,
                defaultValue: "11220e28ce5848d587c10eda8ba4bda8",
                oldClrType: typeof(string),
                oldType: "nvarchar(128)",
                oldMaxLength: 128,
                oldNullable: true,
                oldDefaultValue: "968598e88675403db9460b59465ff5e4");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "ConcurrentLogin",
                table: "AbpUsers",
                type: "nvarchar(128)",
                maxLength: 128,
                nullable: true,
                defaultValue: "968598e88675403db9460b59465ff5e4",
                oldClrType: typeof(string),
                oldType: "nvarchar(128)",
                oldMaxLength: 128,
                oldNullable: true,
                oldDefaultValue: "11220e28ce5848d587c10eda8ba4bda8");
        }
    }
}
