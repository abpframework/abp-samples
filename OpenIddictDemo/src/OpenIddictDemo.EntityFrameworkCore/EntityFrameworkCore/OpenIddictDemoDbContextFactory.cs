using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace OpenIddictDemo.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class OpenIddictDemoDbContextFactory : IDesignTimeDbContextFactory<OpenIddictDemoDbContext>
    {
        public OpenIddictDemoDbContext CreateDbContext(string[] args)
        {
            OpenIddictDemoEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<OpenIddictDemoDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new OpenIddictDemoDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../OpenIddictDemo.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
