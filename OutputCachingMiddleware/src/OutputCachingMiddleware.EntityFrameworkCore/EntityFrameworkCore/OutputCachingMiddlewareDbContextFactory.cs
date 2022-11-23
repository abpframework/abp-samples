using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace OutputCachingMiddleware.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class OutputCachingMiddlewareDbContextFactory : IDesignTimeDbContextFactory<OutputCachingMiddlewareDbContext>
{
    public OutputCachingMiddlewareDbContext CreateDbContext(string[] args)
    {
        OutputCachingMiddlewareEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<OutputCachingMiddlewareDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new OutputCachingMiddlewareDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../OutputCachingMiddleware.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
