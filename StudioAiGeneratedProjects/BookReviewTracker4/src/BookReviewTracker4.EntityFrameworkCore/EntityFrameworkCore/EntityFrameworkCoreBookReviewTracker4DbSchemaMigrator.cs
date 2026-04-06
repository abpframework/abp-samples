using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using BookReviewTracker4.Data;
using Volo.Abp.DependencyInjection;

namespace BookReviewTracker4.EntityFrameworkCore;

public class EntityFrameworkCoreBookReviewTracker4DbSchemaMigrator
    : IBookReviewTracker4DbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreBookReviewTracker4DbSchemaMigrator(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the BookReviewTracker4DbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<BookReviewTracker4DbContext>()
            .Database
            .MigrateAsync();
    }
}
