using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace QuickBills.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class QuickBillsDbContextFactory : IDesignTimeDbContextFactory<QuickBillsDbContext>
{
    public QuickBillsDbContext CreateDbContext(string[] args)
    {
        var configuration = BuildConfiguration();
        
        QuickBillsEfCoreEntityExtensionMappings.Configure();

        var builder = new DbContextOptionsBuilder<QuickBillsDbContext>()
            .UseSqlite(configuration.GetConnectionString("Default"));
        
        return new QuickBillsDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../QuickBills.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false)
            .AddEnvironmentVariables();

        return builder.Build();
    }
}
