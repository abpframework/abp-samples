using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace PasswordlessAuthentication.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class PasswordlessAuthenticationMigrationsDbContextFactory : IDesignTimeDbContextFactory<PasswordlessAuthenticationMigrationsDbContext>
    {
        public PasswordlessAuthenticationMigrationsDbContext CreateDbContext(string[] args)
        {
            PasswordlessAuthenticationEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<PasswordlessAuthenticationMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new PasswordlessAuthenticationMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                   .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../PasswordlessAuthentication.DbMigrator/"))
                   .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
