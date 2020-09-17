using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace ExtendLocalizationResource.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class ExtendLocalizationResourceMigrationsDbContextFactory : IDesignTimeDbContextFactory<ExtendLocalizationResourceMigrationsDbContext>
    {
        public ExtendLocalizationResourceMigrationsDbContext CreateDbContext(string[] args)
        {
            ExtendLocalizationResourceEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<ExtendLocalizationResourceMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new ExtendLocalizationResourceMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../ExtendLocalizationResource.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
