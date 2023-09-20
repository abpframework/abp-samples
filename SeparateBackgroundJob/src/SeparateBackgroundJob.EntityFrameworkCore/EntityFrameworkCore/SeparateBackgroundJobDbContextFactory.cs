using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace SeparateBackgroundJob.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class SeparateBackgroundJobDbContextFactory : IDesignTimeDbContextFactory<SeparateBackgroundJobDbContext>
{
    public SeparateBackgroundJobDbContext CreateDbContext(string[] args)
    {
        SeparateBackgroundJobEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<SeparateBackgroundJobDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new SeparateBackgroundJobDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../SeparateBackgroundJob.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
