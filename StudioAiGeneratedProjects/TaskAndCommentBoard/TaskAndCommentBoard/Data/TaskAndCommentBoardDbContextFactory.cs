using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace TaskAndCommentBoard.Data;

public class TaskAndCommentBoardDbContextFactory : IDesignTimeDbContextFactory<TaskAndCommentBoardDbContext>
{
    public TaskAndCommentBoardDbContext CreateDbContext(string[] args)
    {
        TaskAndCommentBoardGlobalFeatureConfigurator.Configure();
        TaskAndCommentBoardModuleExtensionConfigurator.Configure();

        TaskAndCommentBoardEfCoreEntityExtensionMappings.Configure();
        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<TaskAndCommentBoardDbContext>()
            .UseSqlite(configuration.GetConnectionString("Default"));

        return new TaskAndCommentBoardDbContext(builder.Options);
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