using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace CustomNgAppWithIdentityServer.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class CustomNgAppWithIdentityServerMigrationsDbContextFactory : IDesignTimeDbContextFactory<CustomNgAppWithIdentityServerMigrationsDbContext>
    {
        public CustomNgAppWithIdentityServerMigrationsDbContext CreateDbContext(string[] args)
        {
            CustomNgAppWithIdentityServerEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<CustomNgAppWithIdentityServerMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new CustomNgAppWithIdentityServerMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../CustomNgAppWithIdentityServer.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
