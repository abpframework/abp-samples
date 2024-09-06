using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Acme.DemoCenterApp.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class DemoCenterAppDbContextFactory : IDesignTimeDbContextFactory<DemoCenterAppDbContext>
{
    public DemoCenterAppDbContext CreateDbContext(string[] args)
    {
        var configuration = BuildConfiguration();
        
        DemoCenterAppEfCoreEntityExtensionMappings.Configure();

        var builder = new DbContextOptionsBuilder<DemoCenterAppDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));
        
        return new DemoCenterAppDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../Acme.DemoCenterApp.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
