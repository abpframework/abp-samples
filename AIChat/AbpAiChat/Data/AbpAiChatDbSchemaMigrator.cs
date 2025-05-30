using Volo.Abp.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace AbpAiChat.Data;

public class AbpAiChatDbSchemaMigrator : ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public AbpAiChatDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        
        /* We intentionally resolving the AbpAiChatDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<AbpAiChatDbContext>()
            .Database
            .MigrateAsync();

    }
}
