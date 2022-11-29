using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace EfCoreGuardedTypeDemo.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class EfCoreGuardedTypeDemoDbContextFactory : IDesignTimeDbContextFactory<EfCoreGuardedTypeDemoDbContext>
{
    public EfCoreGuardedTypeDemoDbContext CreateDbContext(string[] args)
    {
        EfCoreGuardedTypeDemoEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<EfCoreGuardedTypeDemoDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new EfCoreGuardedTypeDemoDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../EfCoreGuardedTypeDemo.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
