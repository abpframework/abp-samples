using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace BillMaster.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class BillMasterDbContextFactory : IDesignTimeDbContextFactory<BillMasterDbContext>
{
    public BillMasterDbContext CreateDbContext(string[] args)
    {
        var configuration = BuildConfiguration();
        
        BillMasterEfCoreEntityExtensionMappings.Configure();

        var builder = new DbContextOptionsBuilder<BillMasterDbContext>()
            .UseSqlite(configuration.GetConnectionString("Default"));
        
        return new BillMasterDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../BillMaster.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false)
            .AddEnvironmentVariables();

        return builder.Build();
    }
}
