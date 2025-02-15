using Volo.Abp.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using ModularCrm.Ordering.Data;
using ModularCrm.Payment.Data;
using ModularCrm.Products.EntityFrameworkCore;
using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace ModularCrm.Data;

public class ModularCrmDbSchemaMigrator : ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public ModularCrmDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {

        /* We intentionally resolving the ModularCrmDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        // EF Core
        await _serviceProvider
            .GetRequiredService<ModularCrmDbContext>()
            .Database
            .MigrateAsync();

        await _serviceProvider
            .GetRequiredService<IProductsDbContext>()
            .Database
            .MigrateAsync();

        // MongoDB
        await MigrateMongoDbContexAsync<IOrderingDbContext>();
        await MigrateMongoDbContexAsync<IPaymentMongoDbContext>();
    }

    protected virtual async Task MigrateMongoDbContexAsync<TMongoDbContext>()
        where TMongoDbContext : IAbpMongoDbContext
    {
        var dbContext = _serviceProvider.GetRequiredService<TMongoDbContext>();
        var connectionStringResolver = _serviceProvider.GetRequiredService<IConnectionStringResolver>();

        var connectionString = await connectionStringResolver.ResolveAsync(ConnectionStringNameAttribute.GetConnStringName(dbContext.GetType()));

        var mongoUrl = new MongoUrl(connectionString);
        var databaseName = mongoUrl.DatabaseName;
        var client = new MongoClient(mongoUrl);

        if (databaseName.IsNullOrWhiteSpace())
        {
            databaseName = ConnectionStringNameAttribute.GetConnStringName(dbContext.GetType());
        }

        (dbContext as AbpMongoDbContext)?.InitializeCollections(client.GetDatabase(databaseName));
    }
}
