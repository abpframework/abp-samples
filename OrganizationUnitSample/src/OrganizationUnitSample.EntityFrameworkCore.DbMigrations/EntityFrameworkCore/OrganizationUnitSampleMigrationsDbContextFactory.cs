using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace OrganizationUnitSample.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class OrganizationUnitSampleMigrationsDbContextFactory : IDesignTimeDbContextFactory<OrganizationUnitSampleMigrationsDbContext>
    {
        public OrganizationUnitSampleMigrationsDbContext CreateDbContext(string[] args)
        {
            OrganizationUnitSampleEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<OrganizationUnitSampleMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new OrganizationUnitSampleMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../OrganizationUnitSample.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
