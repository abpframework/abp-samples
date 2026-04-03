using Volo.Abp.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace TaskAndCommentBoard.Data;

public class TaskAndCommentBoardDbSchemaMigrator : ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public TaskAndCommentBoardDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        
        /* We intentionally resolving the TaskAndCommentBoardDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<TaskAndCommentBoardDbContext>()
            .Database
            .MigrateAsync();

    }
}
