using EShopOnAbp.CatalogService.MongoDB;
using EShopOnAbp.Shared.Hosting.Microservices.DbMigrations;
using System;
using Volo.Abp.Data;
using Volo.Abp.DistributedLocking;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Uow;

namespace EShopOnAbp.CatalogService.DbMigrations;

public class CatalogServiceDatabaseMigrationChecker : PendingMongoDbMigrationsChecker<CatalogServiceMongoDbContext>
{
    public CatalogServiceDatabaseMigrationChecker(
        IUnitOfWorkManager unitOfWorkManager,
        IServiceProvider serviceProvider,
        ICurrentTenant currentTenant,
        IDataSeeder dataSeeder,
        IAbpDistributedLock distributedLockProvider)
        : base(
            unitOfWorkManager,
            serviceProvider,
            currentTenant,
            dataSeeder,
            distributedLockProvider,
            CatalogServiceDbProperties.ConnectionStringName)
    {
    }
}