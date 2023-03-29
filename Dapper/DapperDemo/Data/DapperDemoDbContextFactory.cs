using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace DapperDemo.Data;

public class DapperDemoDbContextFactory : IDesignTimeDbContextFactory<DapperDemoDbContext>
{
    public DapperDemoDbContext CreateDbContext(string[] args)
    {

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<DapperDemoDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new DapperDemoDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
