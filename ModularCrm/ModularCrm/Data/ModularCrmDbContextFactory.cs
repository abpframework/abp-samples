using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace ModularCrm.Data;

public class ModularCrmDbContextFactory : IDesignTimeDbContextFactory<ModularCrmDbContext>
{
    public ModularCrmDbContext CreateDbContext(string[] args)
    {
        ModularCrmEfCoreEntityExtensionMappings.Configure();
        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<ModularCrmDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new ModularCrmDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}