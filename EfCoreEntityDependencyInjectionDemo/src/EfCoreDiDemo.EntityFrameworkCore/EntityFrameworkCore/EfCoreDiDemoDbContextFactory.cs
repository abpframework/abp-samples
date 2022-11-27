using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace EfCoreDiDemo.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class EfCoreDiDemoDbContextFactory : IDesignTimeDbContextFactory<EfCoreDiDemoDbContext>
{
    public EfCoreDiDemoDbContext CreateDbContext(string[] args)
    {
        EfCoreDiDemoEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<EfCoreDiDemoDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new EfCoreDiDemoDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../EfCoreDiDemo.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
