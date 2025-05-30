using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace AbpAiChat.Data;

public class AbpAiChatDbContextFactory : IDesignTimeDbContextFactory<AbpAiChatDbContext>
{
    public AbpAiChatDbContext CreateDbContext(string[] args)
    {
        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<AbpAiChatDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new AbpAiChatDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}