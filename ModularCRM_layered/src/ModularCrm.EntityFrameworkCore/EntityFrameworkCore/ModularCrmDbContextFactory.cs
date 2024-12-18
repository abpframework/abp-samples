using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace ModularCrm.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class ModularCrmDbContextFactory : IDesignTimeDbContextFactory<ModularCrmDbContext>
{
    public ModularCrmDbContext CreateDbContext(string[] args)
    {
        var configuration = BuildConfiguration();
        
        ModularCrmEfCoreEntityExtensionMappings.Configure();

        var builder = new DbContextOptionsBuilder<ModularCrmDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));
        
        return new ModularCrmDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../ModularCrm.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
