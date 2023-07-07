using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ImageManipulationDemo.Data;
using Volo.Abp.DependencyInjection;

namespace ImageManipulationDemo.EntityFrameworkCore;

public class EntityFrameworkCoreImageManipulationDemoDbSchemaMigrator
    : IImageManipulationDemoDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreImageManipulationDemoDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the ImageManipulationDemoDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<ImageManipulationDemoDbContext>()
            .Database
            .MigrateAsync();
    }
}
