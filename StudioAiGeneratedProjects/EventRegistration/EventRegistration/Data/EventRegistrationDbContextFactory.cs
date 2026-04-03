using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace EventRegistration.Data;

public class EventRegistrationDbContextFactory : IDesignTimeDbContextFactory<EventRegistrationDbContext>
{
    public EventRegistrationDbContext CreateDbContext(string[] args)
    {
        EventRegistrationGlobalFeatureConfigurator.Configure();
        EventRegistrationModuleExtensionConfigurator.Configure();

        EventRegistrationEfCoreEntityExtensionMappings.Configure();
        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<EventRegistrationDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new EventRegistrationDbContext(builder.Options);
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