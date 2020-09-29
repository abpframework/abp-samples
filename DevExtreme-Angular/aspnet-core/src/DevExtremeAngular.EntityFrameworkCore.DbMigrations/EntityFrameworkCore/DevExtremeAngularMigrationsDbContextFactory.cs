using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace DevExtremeAngular.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class DevExtremeAngularMigrationsDbContextFactory : IDesignTimeDbContextFactory<DevExtremeAngularMigrationsDbContext>
    {
        public DevExtremeAngularMigrationsDbContext CreateDbContext(string[] args)
        {
            DevExtremeAngularEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<DevExtremeAngularMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new DevExtremeAngularMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../DevExtremeAngular.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
