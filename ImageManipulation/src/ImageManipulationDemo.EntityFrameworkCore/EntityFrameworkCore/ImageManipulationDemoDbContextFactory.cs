using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace ImageManipulationDemo.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class ImageManipulationDemoDbContextFactory : IDesignTimeDbContextFactory<ImageManipulationDemoDbContext>
{
    public ImageManipulationDemoDbContext CreateDbContext(string[] args)
    {
        ImageManipulationDemoEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<ImageManipulationDemoDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new ImageManipulationDemoDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../ImageManipulationDemo.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
