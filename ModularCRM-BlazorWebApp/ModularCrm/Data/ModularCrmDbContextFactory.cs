using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace ModularCrm.Data;

public class ModularCrmDbContextFactory : IDesignTimeDbContextFactory<ModularCrmDbContext>
{
    public ModularCrmDbContext CreateDbContext(string[] args)
    {
        ModularCrmGlobalFeatureConfigurator.Configure();
        ModularCrmModuleExtensionConfigurator.Configure();
        
        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<ModularCrmDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new ModularCrmDbContext(builder.Options);
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