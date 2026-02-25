using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace NG.ModularCRM.Data;

public class ModularCRMDbContextFactory : IDesignTimeDbContextFactory<ModularCRMDbContext>
{
    public ModularCRMDbContext CreateDbContext(string[] args)
    {
        ModularCRMGlobalFeatureConfigurator.Configure();
        ModularCRMModuleExtensionConfigurator.Configure();

        ModularCRMEfCoreEntityExtensionMappings.Configure();
        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<ModularCRMDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new ModularCRMDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false)
            .AddEnvironmentVariables();

        return builder.Build();
    }
}