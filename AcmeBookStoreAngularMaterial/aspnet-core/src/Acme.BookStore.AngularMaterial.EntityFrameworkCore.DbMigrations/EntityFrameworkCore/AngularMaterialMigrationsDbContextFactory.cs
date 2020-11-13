using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Acme.BookStore.AngularMaterial.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class AngularMaterialMigrationsDbContextFactory : IDesignTimeDbContextFactory<AngularMaterialMigrationsDbContext>
    {
        public AngularMaterialMigrationsDbContext CreateDbContext(string[] args)
        {
            AngularMaterialEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<AngularMaterialMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new AngularMaterialMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../Acme.BookStore.AngularMaterial.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
