using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace UnifiedContextsDemo.EntityFrameworkCore
{
    public class UnifiedContextsDemoDbContextFactory : IDesignTimeDbContextFactory<UnifiedContextsDemoDbContext>
    {
        public UnifiedContextsDemoDbContext CreateDbContext(string[] args)
        {
            UnifiedContextsDemoEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<UnifiedContextsDemoDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new UnifiedContextsDemoDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../UnifiedContextsDemo.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
