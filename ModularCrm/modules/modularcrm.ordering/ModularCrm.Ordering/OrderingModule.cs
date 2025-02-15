using ModularCrm.Products;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;
using ModularCrm.Ordering.Data;
using ModularCrm.Ordering.Events;
using ModularCrm.Ordering.Services;
using ModularCrm.Payment;
using ModularCrm.Payment.Payment;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.MongoDB;
using Volo.Abp.MongoDB.DistributedEvents;

namespace ModularCrm.Ordering;

[DependsOn(
    typeof(ProductsApplicationContractsModule),
    typeof(OrderingContractsModule),
    typeof(PaymentContractsModule),
    typeof(AbpDddApplicationModule),
    typeof(AbpAutoMapperModule),
    typeof(AbpAspNetCoreMvcModule),
    typeof(AbpMongoDbModule)
)]
public class OrderingModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAutoMapperObjectMapper<OrderingModule>();
        Configure<AbpAutoMapperOptions>(options =>
        {
            options.AddMaps<OrderingModule>(validate: true);
        });

        context.Services.AddMongoDbContext<OrderingDbContext>(options =>
        {
            options.AddDefaultRepositories(true);
        });

        Configure<AbpDistributedEventBusOptions>(options =>
        {
            options.Inboxes.Configure(OrderingDbProperties.ConnectionStringName, config =>
            {
                config.UseMongoDbContext<IOrderingDbContext>();
                config.EventSelector = type => type == typeof(PaymentCompletedEto);
                config.HandlerSelector = type => type == typeof(OrderPaymentCompletedEventHandler);
            });

            options.Outboxes.Configure(OrderingDbProperties.ConnectionStringName, config =>
            {
                config.UseMongoDbContext<IOrderingDbContext>();
                config.Selector = type => type == typeof(OrderPlacedEto);
            });
        });
    }
}
