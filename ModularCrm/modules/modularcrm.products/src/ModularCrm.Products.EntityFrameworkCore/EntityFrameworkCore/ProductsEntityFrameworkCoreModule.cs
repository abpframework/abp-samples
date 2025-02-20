using Microsoft.Extensions.DependencyInjection;
using ModularCrm.Ordering.Events;
using ModularCrm.Products.Orders;
using ModularCrm.Products.Users;
using Volo.Abp.Domain.Entities.Events.Distributed;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.DistributedEvents;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Modularity;
using Volo.Abp.Users;

namespace ModularCrm.Products.EntityFrameworkCore;

[DependsOn(
    typeof(ProductsDomainModule),
    typeof(AbpEntityFrameworkCoreModule)
)]
public class ProductsEntityFrameworkCoreModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAbpDbContext<ProductsDbContext>(options =>
        {
            options.AddDefaultRepositories();
        });

        Configure<AbpDistributedEventBusOptions>(options =>
        {
            options.Inboxes.Configure(ProductsDbProperties.ConnectionStringName, config =>
            {
                config.UseDbContext<IProductsDbContext>();
                config.EventSelector = type => type == typeof(EntityCreatedEto<UserEto>) || type == typeof(OrderPlacedEto);
                config.HandlerSelector = type => type == typeof(ProductsOrderPlacedEventHandler) || type == typeof(ProductsUserCreatedEventHandler);
            });

            // Outboxes are not used in this module
            options.Outboxes.Configure(ProductsDbProperties.ConnectionStringName, config =>
            {
                config.UseDbContext<IProductsDbContext>();
                config.Selector = type => false;
            });
        });
    }
}
