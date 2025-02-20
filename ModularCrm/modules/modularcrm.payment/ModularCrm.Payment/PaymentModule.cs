using Microsoft.Extensions.DependencyInjection;
using ModularCrm.Ordering.Events;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;
using Volo.Abp.MongoDB;
using ModularCrm.Payment.Data;
using ModularCrm.Payment.Orders;
using ModularCrm.Payment.Payment;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.MongoDB.DistributedEvents;

namespace ModularCrm.Payment;

[DependsOn(
    typeof(PaymentContractsModule),
    typeof(AbpDddApplicationModule),
    typeof(AbpAutoMapperModule),
    typeof(AbpAspNetCoreMvcModule),
    typeof(AbpMongoDbModule)
)]
public class PaymentModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAutoMapperObjectMapper<PaymentModule>();
        Configure<AbpAutoMapperOptions>(options =>
        {
            options.AddMaps<PaymentModule>(validate: true);
        });

        context.Services.AddMongoDbContext<PaymentMongoDbContext>(options =>
        {
            options.AddDefaultRepositories();
        });

        Configure<AbpDistributedEventBusOptions>(options =>
        {
            options.Inboxes.Configure(PaymentDbProperties.ConnectionStringName, config =>
            {
                config.UseMongoDbContext<IPaymentMongoDbContext>();
                config.EventSelector = type => type == typeof(OrderPlacedEto);
                config.HandlerSelector = type => type == typeof(PaymentOrderPlacedEventHandler);
            });

            options.Outboxes.Configure(PaymentDbProperties.ConnectionStringName, config =>
            {
                config.UseMongoDbContext<IPaymentMongoDbContext>();
                config.Selector = type => type == typeof(PaymentCompletedEto);
            });
        });
    }
}
