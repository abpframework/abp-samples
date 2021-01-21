using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace ExcelIO.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class ExcelIOMigrationsDbContextFactory : IDesignTimeDbContextFactory<ExcelIOMigrationsDbContext>
    {
        public ExcelIOMigrationsDbContext CreateDbContext(string[] args)
        {
            ExcelIOEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<ExcelIOMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new ExcelIOMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../ExcelIO.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
