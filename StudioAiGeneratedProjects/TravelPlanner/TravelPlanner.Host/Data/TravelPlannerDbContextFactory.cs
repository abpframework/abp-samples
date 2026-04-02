using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace TravelPlanner.Data;

public class TravelPlannerDbContextFactory : IDesignTimeDbContextFactory<TravelPlannerDbContext>
{
    public TravelPlannerDbContext CreateDbContext(string[] args)
    {
        TravelPlannerGlobalFeatureConfigurator.Configure();
        TravelPlannerModuleExtensionConfigurator.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<TravelPlannerDbContext>()
            .UseSqlite(configuration.GetConnectionString("Default"));

        return new TravelPlannerDbContext(builder.Options);
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
