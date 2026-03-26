using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace GymWorkoutPlanner.Data;

public class GymWorkoutPlannerDbContextFactory : IDesignTimeDbContextFactory<GymWorkoutPlannerDbContext>
{
    public GymWorkoutPlannerDbContext CreateDbContext(string[] args)
    {
        GymWorkoutPlannerGlobalFeatureConfigurator.Configure();
        GymWorkoutPlannerModuleExtensionConfigurator.Configure();

        GymWorkoutPlannerEfCoreEntityExtensionMappings.Configure();
        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<GymWorkoutPlannerDbContext>()
            .UseNpgsql(configuration.GetConnectionString("Default"));

        return new GymWorkoutPlannerDbContext(builder.Options);
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