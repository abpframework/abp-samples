using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace CustomAngularAppWithIdentityServer.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class CustomAngularAppWithIdentityServerMigrationsDbContextFactory : IDesignTimeDbContextFactory<CustomAngularAppWithIdentityServerMigrationsDbContext>
    {
        public CustomAngularAppWithIdentityServerMigrationsDbContext CreateDbContext(string[] args)
        {
            CustomAngularAppWithIdentityServerEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<CustomAngularAppWithIdentityServerMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new CustomAngularAppWithIdentityServerMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../CustomAngularAppWithIdentityServer.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
