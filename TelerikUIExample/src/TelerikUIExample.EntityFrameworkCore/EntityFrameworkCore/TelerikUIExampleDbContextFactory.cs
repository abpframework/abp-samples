using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace TelerikUIExample.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class TelerikUIExampleDbContextFactory : IDesignTimeDbContextFactory<TelerikUIExampleDbContext>
{
    public TelerikUIExampleDbContext CreateDbContext(string[] args)
    {
        TelerikUIExampleEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<TelerikUIExampleDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new TelerikUIExampleDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../TelerikUIExample.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
