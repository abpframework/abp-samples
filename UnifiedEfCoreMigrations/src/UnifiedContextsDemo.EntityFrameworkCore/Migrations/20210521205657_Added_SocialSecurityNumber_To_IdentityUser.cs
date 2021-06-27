using Microsoft.EntityFrameworkCore.Migrations;

namespace UnifiedContextsDemo.Migrations
{
    public partial class Added_SocialSecurityNumber_To_IdentityUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "SocialSecurityNumber",
                table: "AbpUsers",
                type: "nvarchar(64)",
                maxLength: 64,
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SocialSecurityNumber",
                table: "AbpUsers");
        }
    }
}
