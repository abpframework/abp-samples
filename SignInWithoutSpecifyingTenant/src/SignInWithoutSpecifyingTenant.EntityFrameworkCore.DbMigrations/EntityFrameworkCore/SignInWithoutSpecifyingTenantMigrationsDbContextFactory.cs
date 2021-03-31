using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace SignInWithoutSpecifyingTenant.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class SignInWithoutSpecifyingTenantMigrationsDbContextFactory : IDesignTimeDbContextFactory<SignInWithoutSpecifyingTenantMigrationsDbContext>
    {
        public SignInWithoutSpecifyingTenantMigrationsDbContext CreateDbContext(string[] args)
        {
            SignInWithoutSpecifyingTenantEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<SignInWithoutSpecifyingTenantMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new SignInWithoutSpecifyingTenantMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../SignInWithoutSpecifyingTenant.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
