using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace ProfilerTiered.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class ProfilerTieredDbContextFactory : IDesignTimeDbContextFactory<ProfilerTieredDbContext>
    {
        public ProfilerTieredDbContext CreateDbContext(string[] args)
        {
            ProfilerTieredEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<ProfilerTieredDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new ProfilerTieredDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../ProfilerTiered.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
