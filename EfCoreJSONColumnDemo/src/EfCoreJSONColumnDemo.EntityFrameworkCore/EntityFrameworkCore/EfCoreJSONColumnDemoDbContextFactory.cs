using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace EfCoreJSONColumnDemo.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class EfCoreJSONColumnDemoDbContextFactory : IDesignTimeDbContextFactory<EfCoreJSONColumnDemoDbContext>
{
    public EfCoreJSONColumnDemoDbContext CreateDbContext(string[] args)
    {
        EfCoreJSONColumnDemoEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<EfCoreJSONColumnDemoDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new EfCoreJSONColumnDemoDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../EfCoreJSONColumnDemo.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
