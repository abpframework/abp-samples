using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace SignalRDemo.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class SignalRDemoMigrationsDbContextFactory : IDesignTimeDbContextFactory<SignalRDemoMigrationsDbContext>
    {
        public SignalRDemoMigrationsDbContext CreateDbContext(string[] args)
        {
            SignalRDemoEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<SignalRDemoMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new SignalRDemoMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../SignalRDemo.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
