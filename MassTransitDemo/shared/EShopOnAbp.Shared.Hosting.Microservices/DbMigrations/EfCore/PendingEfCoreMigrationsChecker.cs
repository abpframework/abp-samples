using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Serilog;
using System;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DistributedLocking;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Uow;

namespace EShopOnAbp.Shared.Hosting.Microservices.DbMigrations.EfCore;

public abstract class PendingEfCoreMigrationsChecker<TDbContext> : PendingMigrationsCheckerBase
    where TDbContext : DbContext
{
    protected IUnitOfWorkManager UnitOfWorkManager { get; }
    protected IServiceProvider ServiceProvider { get; }
    protected ICurrentTenant CurrentTenant { get; }
    protected IDistributedEventBus DistributedEventBus { get; }
    protected IAbpDistributedLock DistributedLockProvider { get; }
    protected string DatabaseName { get; }

    protected PendingEfCoreMigrationsChecker(
        IUnitOfWorkManager unitOfWorkManager,
        IServiceProvider serviceProvider,
        ICurrentTenant currentTenant,
        IDistributedEventBus distributedEventBus,
        IAbpDistributedLock abpDistributedLock,
        string databaseName)
    {
        UnitOfWorkManager = unitOfWorkManager;
        ServiceProvider = serviceProvider;
        CurrentTenant = currentTenant;
        DistributedEventBus = distributedEventBus;
        DistributedLockProvider = abpDistributedLock;
        DatabaseName = databaseName;
    }

    public virtual async Task CheckAndApplyDatabaseMigrationsAsync()
    {
        await TryAsync(LockAndApplyDatabaseMigrationsAsync);
    }

    protected virtual async Task LockAndApplyDatabaseMigrationsAsync()
    {
        await using (var handle = await DistributedLockProvider.TryAcquireAsync("Migration_" + DatabaseName))
        {
            Log.Information($"Lock is acquired for db migration and seeding on database named: {DatabaseName}...");

            if (handle is null)
            {
                Log.Information($"Handle is null because of the locking for : {DatabaseName}");
                return;
            }

            using (CurrentTenant.Change(null))
            {
                // Create database tables if needed
                using (var uow = UnitOfWorkManager.Begin(requiresNew: true, isTransactional: false))
                {
                    var dbContext = ServiceProvider.GetRequiredService<TDbContext>();

                    var pendingMigrations = await dbContext
                        .Database
                        .GetPendingMigrationsAsync();

                    if (pendingMigrations.Any())
                    {
                        await dbContext.Database.MigrateAsync();
                    }

                    await uow.CompleteAsync();
                }

                await ServiceProvider.GetRequiredService<IDataSeeder>()
                    .SeedAsync();
            }
            Log.Information($"Lock is released for db migration and seeding on database named: {DatabaseName}...");
        }
    }
}