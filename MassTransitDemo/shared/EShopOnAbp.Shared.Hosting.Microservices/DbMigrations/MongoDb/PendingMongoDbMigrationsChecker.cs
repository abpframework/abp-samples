using Microsoft.Extensions.DependencyInjection;
using MongoDB.Driver;
using Serilog;
using System;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DistributedLocking;
using Volo.Abp.MongoDB;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Uow;

namespace EShopOnAbp.Shared.Hosting.Microservices.DbMigrations;

public class PendingMongoDbMigrationsChecker<TDbContext> : PendingMigrationsCheckerBase
    where TDbContext : AbpMongoDbContext
{
    protected IUnitOfWorkManager UnitOfWorkManager { get; }
    protected IServiceProvider ServiceProvider { get; }
    protected ICurrentTenant CurrentTenant { get; }
    protected IDataSeeder DataSeeder { get; }
    protected IAbpDistributedLock DistributedLockProvider { get; }
    protected string DatabaseName { get; }

    protected PendingMongoDbMigrationsChecker(
        IUnitOfWorkManager unitOfWorkManager,
        IServiceProvider serviceProvider,
        ICurrentTenant currentTenant,
        IDataSeeder dataSeeder,
        IAbpDistributedLock distributedLockProvider,
        string databaseName)
    {
        UnitOfWorkManager = unitOfWorkManager;
        ServiceProvider = serviceProvider;
        CurrentTenant = currentTenant;
        DataSeeder = dataSeeder;
        DistributedLockProvider = distributedLockProvider;
        DatabaseName = databaseName;
    }

    public virtual async Task CheckAndApplyDatabaseMigrationsAsync()
    {
        await TryAsync(async () =>
        {
            using (CurrentTenant.Change(null))
            {
                // Create database tables if needed
                using (var uow = UnitOfWorkManager.Begin(requiresNew: true, isTransactional: false))
                {
                    await MigrateDatabaseSchemaAsync();

                    await DataSeeder.SeedAsync();

                    await uow.CompleteAsync();
                }
            }
        });
    }

    /// <summary>
    /// Apply scheme update for MongoDB Database.
    /// </summary>
    protected virtual async Task<bool> MigrateDatabaseSchemaAsync()
    {
        var result = false;
        await using (var handle = await DistributedLockProvider.TryAcquireAsync("Migration_" + DatabaseName))
        {
            using (var uow = UnitOfWorkManager.Begin(requiresNew: true, isTransactional: false))
            {
                Log.Information($"Lock is acquired for db migration and seeding on database named: {DatabaseName}...");

                if (handle is null)
                {
                    Log.Information($"Handle is null because of the locking for : {DatabaseName}");
                    return false;
                }

                async Task<bool> MigrateDatabaseSchemaWithDbContextAsync()
                {
                    var dbContexts = ServiceProvider.GetServices<IAbpMongoDbContext>();
                    var connectionStringResolver = ServiceProvider.GetRequiredService<IConnectionStringResolver>();

                    foreach (var dbContext in dbContexts)
                    {
                        var connectionString =
                            await connectionStringResolver.ResolveAsync(
                                ConnectionStringNameAttribute.GetConnStringName(dbContext.GetType()));
                        if (connectionString.IsNullOrWhiteSpace())
                        {
                            continue;
                        }

                        var mongoUrl = new MongoUrl(connectionString);
                        var databaseName = mongoUrl.DatabaseName;
                        var client = new MongoClient(mongoUrl);

                        if (databaseName.IsNullOrWhiteSpace())
                        {
                            databaseName = ConnectionStringNameAttribute.GetConnStringName(dbContext.GetType());
                        }

                        (dbContext as AbpMongoDbContext)?.InitializeCollections(client.GetDatabase(databaseName));
                    }

                    return true;
                }

                //Migrating the host database
                result = await MigrateDatabaseSchemaWithDbContextAsync();

                await uow.CompleteAsync();
            }

            return result;
        }
    }
}