using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CustomApplicationModules.Migrations
{
    public partial class Custom_Modules : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "OrganizationId",
                table: "AbpUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SecretNumber",
                table: "AbpUsers",
                maxLength: 32,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SocialSecurityNumber",
                table: "AbpUsers",
                maxLength: 32,
                nullable: true);

            migrationBuilder.CreateTable(
                name: "AppOrganizations",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ExtraProperties = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<Guid>(nullable: true),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierId = table.Column<Guid>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(nullable: true),
                    DeletionTime = table.Column<DateTime>(nullable: true),
                    TenantId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppOrganizations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tests",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<Guid>(nullable: true),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierId = table.Column<Guid>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(nullable: true),
                    DeletionTime = table.Column<DateTime>(nullable: true),
                    Name = table.Column<string>(maxLength: 200, nullable: true),
                    Code = table.Column<string>(nullable: true),
                    DeleterUserId = table.Column<Guid>(nullable: true),
                    LastModifierUserId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tests", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Tests_AbpUsers_CreatorId",
                        column: x => x.CreatorId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Tests_AbpUsers_DeleterUserId",
                        column: x => x.DeleterUserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Tests_AbpUsers_LastModifierUserId",
                        column: x => x.LastModifierUserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AbpUsers_OrganizationId",
                table: "AbpUsers",
                column: "OrganizationId");

            migrationBuilder.CreateIndex(
                name: "IX_Tests_CreatorId",
                table: "Tests",
                column: "CreatorId");

            migrationBuilder.CreateIndex(
                name: "IX_Tests_DeleterUserId",
                table: "Tests",
                column: "DeleterUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Tests_LastModifierUserId",
                table: "Tests",
                column: "LastModifierUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_AbpUsers_AppOrganizations_OrganizationId",
                table: "AbpUsers",
                column: "OrganizationId",
                principalTable: "AppOrganizations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AbpUsers_AppOrganizations_OrganizationId",
                table: "AbpUsers");

            migrationBuilder.DropTable(
                name: "AppOrganizations");

            migrationBuilder.DropTable(
                name: "Tests");

            migrationBuilder.DropIndex(
                name: "IX_AbpUsers_OrganizationId",
                table: "AbpUsers");

            migrationBuilder.DropColumn(
                name: "OrganizationId",
                table: "AbpUsers");

            migrationBuilder.DropColumn(
                name: "SecretNumber",
                table: "AbpUsers");

            migrationBuilder.DropColumn(
                name: "SocialSecurityNumber",
                table: "AbpUsers");
        }
    }
}
