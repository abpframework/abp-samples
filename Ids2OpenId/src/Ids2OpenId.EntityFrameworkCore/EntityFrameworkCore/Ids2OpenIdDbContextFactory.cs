using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Ids2OpenId.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class Ids2OpenIdDbContextFactory : IDesignTimeDbContextFactory<Ids2OpenIdDbContext>
{
    public Ids2OpenIdDbContext CreateDbContext(string[] args)
    {
        Ids2OpenIdEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<Ids2OpenIdDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new Ids2OpenIdDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../Ids2OpenId.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
