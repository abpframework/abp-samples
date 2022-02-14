using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace TelerikBlazorSample.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class TelerikBlazorSampleDbContextFactory : IDesignTimeDbContextFactory<TelerikBlazorSampleDbContext>
{
    public TelerikBlazorSampleDbContext CreateDbContext(string[] args)
    {
        TelerikBlazorSampleEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<TelerikBlazorSampleDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new TelerikBlazorSampleDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../TelerikBlazorSample.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
