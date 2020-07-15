using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace PostgeSqlDemo.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class PostgeSqlDemoMigrationsDbContextFactory : IDesignTimeDbContextFactory<PostgeSqlDemoMigrationsDbContext>
    {
        public PostgeSqlDemoMigrationsDbContext CreateDbContext(string[] args)
        {
            PostgeSqlDemoEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<PostgeSqlDemoMigrationsDbContext>()
                .UseNpgsql(configuration.GetConnectionString("Default"), opts => opts.UseNetTopologySuite());

            return new PostgeSqlDemoMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../PostgeSqlDemo.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
