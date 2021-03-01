using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace IDSReferenceToken.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class IDSReferenceTokenMigrationsDbContextFactory : IDesignTimeDbContextFactory<IDSReferenceTokenMigrationsDbContext>
    {
        public IDSReferenceTokenMigrationsDbContext CreateDbContext(string[] args)
        {
            IDSReferenceTokenEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<IDSReferenceTokenMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new IDSReferenceTokenMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../IDSReferenceToken.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
