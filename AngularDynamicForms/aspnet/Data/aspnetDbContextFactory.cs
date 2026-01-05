using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace aspnet.Data;

public class aspnetDbContextFactory : IDesignTimeDbContextFactory<aspnetDbContext>
{
    public aspnetDbContext CreateDbContext(string[] args)
    {
        aspnetGlobalFeatureConfigurator.Configure();
        aspnetModuleExtensionConfigurator.Configure();

        aspnetEfCoreEntityExtensionMappings.Configure();
        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<aspnetDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new aspnetDbContext(builder.Options);
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