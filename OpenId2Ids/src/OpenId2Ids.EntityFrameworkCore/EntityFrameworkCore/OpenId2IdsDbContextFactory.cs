using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace OpenId2Ids.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class OpenId2IdsDbContextFactory : IDesignTimeDbContextFactory<OpenId2IdsDbContext>
{
    public OpenId2IdsDbContext CreateDbContext(string[] args)
    {
        OpenId2IdsEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<OpenId2IdsDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new OpenId2IdsDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../OpenId2Ids.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
