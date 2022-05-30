using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace ConcurrentLogin.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class ConcurrentLoginDbContextFactory : IDesignTimeDbContextFactory<ConcurrentLoginDbContext>
{
    public ConcurrentLoginDbContext CreateDbContext(string[] args)
    {
        ConcurrentLoginEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<ConcurrentLoginDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new ConcurrentLoginDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../ConcurrentLogin.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
