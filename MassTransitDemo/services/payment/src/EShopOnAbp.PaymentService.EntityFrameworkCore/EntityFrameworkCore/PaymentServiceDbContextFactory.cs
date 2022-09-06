using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace EShopOnAbp.PaymentService.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class PaymentServiceDbContextFactory : IDesignTimeDbContextFactory<PaymentServiceDbContext>
    {
        public PaymentServiceDbContext CreateDbContext(string[] args)
        {
            PaymentServiceEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<PaymentServiceDbContext>()
                .UseNpgsql(
                configuration.GetConnectionString(PaymentServiceDbProperties.ConnectionStringName),
                b =>
                {
                    b.MigrationsHistoryTable("__PaymentService_Migrations");
                });

            // https://www.npgsql.org/efcore/release-notes/6.0.html#opting-out-of-the-new-timestamp-mapping-logic
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

            return new PaymentServiceDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../EShopOnAbp.PaymentService.HttpApi.Host/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
